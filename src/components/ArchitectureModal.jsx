import React from 'react';
import { X, Cpu, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';

export default function ArchitectureModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0e111a] border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute -right-20 -top-20 w-60 h-60 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center justify-center font-bold">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">BharatCraft Architecture</h3>
              <p className="text-xs text-slate-400">Dual-Stage Autonomous UI Synthesis Engine</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Pipeline Diagram Cards */}
        <div className="space-y-4">
          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 text-xs flex items-center justify-center font-mono">1</span>
                Design & Logic Reasoning
              </span>
              <span className="text-xs font-mono text-amber-400 font-semibold bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                deepseek-v4.1-flash
              </span>
            </div>
            <p className="text-xs text-slate-300">
              Analyzes user prompts, creates state hierarchy, plans interactive workflows (forms, modals, calculators), and validates INR/Indian localization requirements.
            </p>
          </div>

          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 text-xs flex items-center justify-center font-mono">2</span>
                High-Speed Code Synthesis
              </span>
              <span className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                qwen-3.8-27b
              </span>
            </div>
            <p className="text-xs text-slate-300">
              Streams production-ready HTML, Tailwind CSS classes, and reactive vanilla JavaScript bytecode directly to the live browser sandbox.
            </p>
          </div>

          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 text-xs flex items-center justify-center font-mono">3</span>
                Sandboxed Interactive Execution
              </span>
              <span className="text-xs font-mono text-blue-400 font-semibold bg-blue-500/10 px-2 py-0.5 rounded-md border border-blue-500/20">
                Live Iframe Engine
              </span>
            </div>
            <p className="text-xs text-slate-300">
              Executes in an isolated browser iframe with full multi-device preview toggles (Desktop, Tablet, Mobile) and 1-click standalone HTML bundling.
            </p>
          </div>
        </div>

        {/* Verification Footer */}
        <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
          <div className="text-xs text-slate-300">
            <span className="font-bold text-white">Hackathon Verification:</span> Repository includes official <code className="text-emerald-400 font-mono">BharatCode.txt</code> marker in root directory.
          </div>
        </div>
      </div>
    </div>
  );
}
