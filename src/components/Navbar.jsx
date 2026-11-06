import React from 'react';
import { Sparkles, Shield, Cpu, Download, Code2, ExternalLink } from 'lucide-react';

export default function Navbar({ onOpenArchitecture, onDownloadHtml, currentCode }) {
  return (
    <nav className="border-b border-slate-800/80 bg-[#090a0f]/90 backdrop-blur-xl px-4 lg:px-8 py-3.5 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo & Tag */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-500 via-amber-500 to-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 font-black text-lg">
            ⚡
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tight text-white">
                Bharat<span className="text-orange-500">Craft</span>
              </span>
              <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/30">
                Build League 2026
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
              Sovereign AI Web & Component Builder • India's v0
            </p>
          </div>
        </div>

        {/* Engine Badge & Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-slate-400">Engine:</span>
            <span className="text-orange-400 font-semibold">Qwen 3.8 27B</span>
            <span className="text-slate-600">|</span>
            <span className="text-amber-400 font-semibold">DeepSeek V4.1</span>
          </div>

          <button
            onClick={onOpenArchitecture}
            className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition flex items-center gap-2"
          >
            <Cpu className="w-3.5 h-3.5 text-orange-400" />
            <span className="hidden sm:inline">Architecture</span>
          </button>

          {currentCode && (
            <button
              onClick={onDownloadHtml}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-xs font-bold text-white shadow-lg shadow-orange-500/20 transition flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export .html</span>
            </button>
          )}

          <a
            href="https://github.com/shubhashy2605/bharatcraft"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition"
            title="GitHub Repository"
          >
            <Code2 className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}
