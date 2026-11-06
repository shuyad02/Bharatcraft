import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PromptBar from './components/PromptBar';
import LivePreview from './components/LivePreview';
import CodeViewer from './components/CodeViewer';
import ArchitectureModal from './components/ArchitectureModal';

export default function App() {
  const [currentHtml, setCurrentHtml] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [modelUsed, setModelUsed] = useState('qwen-3.8-27b');
  const [isArchitectureOpen, setIsArchitectureOpen] = useState(false);
  const [activeView, setActiveView] = useState('split'); // 'split', 'preview', 'code'

  // Pre-load high-fidelity UPI dashboard template on initial launch
  useEffect(() => {
    handleGenerate("Create an Indian UPI Payment & Wallet Dashboard with dark mode, QR scanner modal, and INR metrics", "qwen-3.8-27b");
  }, []);

  const handleGenerate = async (prompt, model) => {
    setIsGenerating(true);
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, model })
      });

      if (res.ok) {
        const data = await res.json();
        setCurrentHtml(data.html);
        setModelUsed(data.modelUsed || model);
      }
    } catch (err) {
      console.error('Generation error:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadHtml = () => {
    if (!currentHtml) return;
    const blob = new Blob([currentHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bharatcraft-export-${Date.now()}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#07080c] flex flex-col font-sans text-slate-100">
      {/* Navbar */}
      <Navbar
        onOpenArchitecture={() => setIsArchitectureOpen(true)}
        onDownloadHtml={handleDownloadHtml}
        currentCode={currentHtml}
      />

      {/* Main Studio Area */}
      <main className="flex-1 max-w-[1600px] w-full mx-auto p-4 sm:p-6 flex flex-col gap-5">
        {/* Floating Prompt Bar */}
        <PromptBar
          onGenerate={handleGenerate}
          isGenerating={isGenerating}
          onSelectPreset={(presetPrompt) => handleGenerate(presetPrompt, "qwen-3.8-27b")}
        />

        {/* View Switcher Tabs (for tablet/mobile or user preference) */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setActiveView('split')}
              className={`px-3 py-1 rounded-lg font-semibold transition ${activeView === 'split' ? 'bg-orange-500 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Split Studio
            </button>
            <button
              onClick={() => setActiveView('preview')}
              className={`px-3 py-1 rounded-lg font-semibold transition ${activeView === 'preview' ? 'bg-orange-500 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Live Preview Only
            </button>
            <button
              onClick={() => setActiveView('code')}
              className={`px-3 py-1 rounded-lg font-semibold transition ${activeView === 'code' ? 'bg-orange-500 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Code Only
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 font-mono">
            <span>Inference Lab:</span>
            <span className="text-orange-400 font-semibold">bharatcode.ai/api/model/v1</span>
          </div>
        </div>

        {/* Split Screen Workspace */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-[580px] h-[calc(100vh-280px)]">
          {/* Left / Code Viewer */}
          {(activeView === 'split' || activeView === 'code') && (
            <div className={`h-full ${activeView === 'code' ? 'lg:col-span-2' : ''}`}>
              <CodeViewer html={currentHtml} />
            </div>
          )}

          {/* Right / Live Preview */}
          {(activeView === 'split' || activeView === 'preview') && (
            <div className={`h-full ${activeView === 'preview' ? 'lg:col-span-2' : ''}`}>
              <LivePreview
                html={currentHtml}
                isGenerating={isGenerating}
                modelUsed={modelUsed}
              />
            </div>
          )}
        </div>
      </main>

      {/* Architecture Modal */}
      <ArchitectureModal
        isOpen={isArchitectureOpen}
        onClose={() => setIsArchitectureOpen(false)}
      />
    </div>
  );
}
