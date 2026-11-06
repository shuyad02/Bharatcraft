import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone, RotateCw, ExternalLink, Sparkles } from 'lucide-react';

export default function LivePreview({ html, isGenerating, modelUsed }) {
  const [device, setDevice] = useState('desktop'); // desktop, tablet, mobile
  const [refreshKey, setRefreshKey] = useState(0);

  const getWidth = () => {
    if (device === 'mobile') return 'max-w-[375px]';
    if (device === 'tablet') return 'max-w-[768px]';
    return 'w-full';
  };

  const handleOpenNewTab = () => {
    if (!html) return;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col h-full bg-[#0a0c13] rounded-2xl border border-slate-800/80 overflow-hidden shadow-2xl">
      {/* Top Bar of Preview */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/80 border-b border-slate-800 text-xs">
        {/* Device Switcher */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setDevice('desktop')}
            className={`p-1.5 rounded-lg transition ${device === 'desktop' ? 'bg-orange-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
            title="Desktop View"
          >
            <Monitor className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setDevice('tablet')}
            className={`p-1.5 rounded-lg transition ${device === 'tablet' ? 'bg-orange-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
            title="Tablet View (768px)"
          >
            <Tablet className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setDevice('mobile')}
            className={`p-1.5 rounded-lg transition ${device === 'mobile' ? 'bg-orange-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
            title="Mobile View (375px)"
          >
            <Smartphone className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Engine Status pill */}
        <div className="flex items-center gap-2">
          {modelUsed && (
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-full border border-orange-500/20">
              <Sparkles className="w-3 h-3" /> {modelUsed}
            </span>
          )}

          <button
            onClick={() => setRefreshKey(prev => prev + 1)}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
            title="Reload Sandbox"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleOpenNewTab}
            disabled={!html}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white disabled:opacity-30 transition"
            title="Open in Full Window"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Frame Container */}
      <div className="flex-1 bg-[#050608] flex items-center justify-center p-2 sm:p-4 overflow-auto relative">
        {isGenerating && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-30 flex flex-col items-center justify-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center animate-pulse">
              <Sparkles className="w-6 h-6 text-orange-400 animate-spin" />
            </div>
            <p className="text-sm font-semibold text-white">Synthesizing Reactive Canvas with BharatCode...</p>
            <p className="text-xs text-slate-400 font-mono">Streaming Tailwind & Vanilla JS bytecode</p>
          </div>
        )}

        {html ? (
          <div className={`h-full ${getWidth()} mx-auto transition-all duration-300 shadow-2xl rounded-xl overflow-hidden border border-slate-800/80 bg-white`}>
            <iframe
              key={refreshKey}
              srcDoc={html}
              title="BharatCraft Live Canvas"
              sandbox="allow-scripts allow-modals allow-same-origin allow-forms"
              className="w-full h-full border-0"
            />
          </div>
        ) : (
          <div className="text-center space-y-3 max-w-sm p-6">
            <div className="w-14 h-14 mx-auto rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500">
              <Monitor className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-300">No Web Canvas Active</h4>
            <p className="text-xs text-slate-500">
              Type any prompt above or pick a preset to watch BharatCode generate a live web app in real-time.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
