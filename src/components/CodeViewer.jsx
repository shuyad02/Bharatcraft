import React, { useState } from 'react';
import { Copy, Check, Code, FileCode2 } from 'lucide-react';

export default function CodeViewer({ html }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!html) return;
    navigator.clipboard.writeText(html);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const linesCount = html ? html.split('\n').length : 0;
  const charsCount = html ? html.length : 0;

  return (
    <div className="flex flex-col h-full bg-[#0a0c13] rounded-2xl border border-slate-800/80 overflow-hidden shadow-2xl">
      {/* Code Viewer Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/80 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <FileCode2 className="w-4 h-4 text-orange-400" />
          <span className="font-mono text-slate-300 font-semibold">index.html (Single-file Bundle)</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
            {linesCount} lines • {(charsCount / 1024).toFixed(1)} KB
          </span>

          <button
            onClick={handleCopy}
            disabled={!html}
            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white disabled:opacity-30 transition flex items-center gap-1.5 font-medium"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Text Area */}
      <div className="flex-1 bg-[#050608] p-4 overflow-auto font-mono text-xs text-slate-300 leading-relaxed select-text">
        {html ? (
          <pre className="whitespace-pre-wrap break-all">
            <code>{html}</code>
          </pre>
        ) : (
          <div className="h-full flex items-center justify-center text-slate-600 text-center">
            <p>Code output stream will appear here...</p>
          </div>
        )}
      </div>
    </div>
  );
}
