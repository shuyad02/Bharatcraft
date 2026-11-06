import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Wand2, Zap } from 'lucide-react';

export default function PromptBar({ onGenerate, isGenerating, onSelectPreset }) {
  const [prompt, setPrompt] = useState('');
  const [selectedModel, setSelectedModel] = useState('qwen-3.8-27b');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!prompt.trim() || isGenerating) return;
    onGenerate(prompt, selectedModel);
  };

  const presets = [
    { label: "💳 Indian UPI & Wallet Dashboard", prompt: "Create an Indian UPI Payment & Wallet Dashboard with dark mode, QR scanner modal, and INR metrics" },
    { label: "🧾 GST Invoice Studio", prompt: "Create an Indian GST Invoice Generator with HSN codes, IGST/CGST breakdown, and print preview" },
    { label: "⚡ BharatAI Sovereign Cloud SaaS", prompt: "Create a modern high-converting SaaS landing page for an Indian AI Cloud startup with live interactive pricing in INR" },
    { label: "🛍️ Kirana POS & Inventory", prompt: "Create a Kirana Store Quick POS billing screen with barcode simulator, daily sales meter, and WhatsApp receipt export" }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-3">
      {/* Main Prompt Input Box */}
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900/90 p-[1px] shadow-2xl transition group focus-within:from-orange-500 focus-within:to-amber-500">
          <div className="flex items-center bg-[#0d0f17] rounded-2xl px-4 py-2.5 gap-3">
            <Wand2 className="w-5 h-5 text-orange-400 shrink-0" />
            
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe any web app, tool, or component to generate... (e.g. UPI Dashboard, Swiggy food ordering UI)"
              className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none"
              disabled={isGenerating}
            />

            {/* Model Selector */}
            <div className="hidden sm:flex items-center shrink-0">
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="bg-slate-900 border border-slate-700/80 rounded-xl px-2.5 py-1.5 text-xs text-orange-300 font-mono focus:outline-none cursor-pointer"
              >
                <option value="qwen-3.8-27b">Qwen 3.8 27B (Fast)</option>
                <option value="deepseek-v4.1-flash">DeepSeek V4.1 (Reasoning)</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!prompt.trim() || isGenerating}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-orange-500/25 transition shrink-0"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Synthesizing...</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 fill-white" />
                  <span>Generate</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Preset Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <span className="text-slate-500 text-[11px] font-semibold shrink-0 uppercase tracking-wider">Try Presets:</span>
        {presets.map((item, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => {
              setPrompt(item.prompt);
              onSelectPreset(item.prompt);
            }}
            className="px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-orange-500/50 text-slate-300 hover:text-white transition whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
