import React, { useState } from 'react';
import { CODE_CHANGES_LIST } from '@/lib/mockData';
import { Search, FileCode2, ArrowRight, ShieldCheck, CheckCircle2, Clock, GitCommit } from 'lucide-react';

export default function CodeChanges() {
  const [selectedChange, setSelectedChange] = useState(CODE_CHANGES_LIST[0]);

  return (
    <div className="h-full flex flex-col p-8 lg:p-10 text-white">
      <header className="mb-8">
        <h2 className="text-3xl font-light tracking-tight mb-2">Code Changes</h2>
        <p className="text-slate-400">What has BRAHMA changed?</p>
      </header>

      <div className="flex flex-1 gap-6 overflow-hidden min-h-0">
        
        {/* List Side */}
        <div className="w-1/3 flex flex-col bg-[#1c1c1e] border border-white/5 rounded-2xl overflow-hidden shadow-lg">
          <div className="p-4 border-b border-white/5 bg-[#242426]">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search files or missions..." 
                className="w-full bg-black/20 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-[#8be8ff]/50 text-white transition-colors"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {CODE_CHANGES_LIST.map(change => (
              <div 
                key={change.id} 
                onClick={() => setSelectedChange(change)}
                className={`p-4 rounded-xl cursor-pointer transition-all border ${selectedChange?.id === change.id ? 'bg-[#8be8ff]/10 border-[#8be8ff]/30' : 'bg-transparent border-transparent hover:bg-white/5'}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2 font-mono text-sm text-slate-200">
                    <FileCode2 className="w-4 h-4 text-[#8be8ff]" />
                    {change.file}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 bg-[#8be8ff]/20 text-[#8be8ff] rounded-full uppercase tracking-wider">{change.status}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>Mission {change.mission}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {change.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detail Side */}
        {selectedChange ? (
          <div className="flex-1 flex flex-col bg-[#1c1c1e] border border-white/5 rounded-2xl overflow-hidden shadow-lg">
            
            <div className="p-6 border-b border-white/5 bg-[#242426] flex justify-between items-start">
              <div>
                <h3 className="text-xl font-mono text-white mb-2">{selectedChange.file}</h3>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <span className="px-2 py-0.5 bg-white/5 rounded border border-white/10 font-mono text-xs text-slate-300">{selectedChange.candidateHash}</span>
                  <span>•</span>
                  <span>Mission {selectedChange.mission}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-4 py-2 rounded-lg border border-white/10 transition-colors">
                  Revert
                </button>
                <button className="bg-[#8be8ff] hover:bg-[#6fa8ff] text-black font-semibold text-sm px-4 py-2 rounded-lg transition-colors">
                  View Source
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              
              {/* Trust Chain */}
              <div className="flex flex-col gap-3">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Trust Chain</h4>
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300">GENERATED</span>
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300">SANDBOXED</span>
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span className="px-3 py-1.5 rounded-full bg-white/5 border border-[#8be8ff]/50 text-[#8be8ff] flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> VERIFIED
                  </span>
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300">APPROVED</span>
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span className="px-3 py-1.5 rounded-full bg-[#8be8ff]/10 border border-[#8be8ff]/30 text-[#8be8ff] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> DEPLOYED
                  </span>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-4 gap-4">
                 <div className="bg-[#242426] p-4 rounded-xl border border-white/5">
                   <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-2">Tests</div>
                   <div className="text-xl text-white flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#8be8ff]" /> {selectedChange.tests}</div>
                 </div>
                 <div className="bg-[#242426] p-4 rounded-xl border border-white/5">
                   <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-2">Function Benchmark</div>
                   <div className="text-xl font-light text-[#8be8ff]">{selectedChange.funcBenchmarkBefore} <span className="text-slate-500 text-sm">→</span> {selectedChange.funcBenchmarkAfter}</div>
                 </div>
                 <div className="bg-[#242426] p-4 rounded-xl border border-white/5">
                   <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-2">Service p95</div>
                   <div className="text-xl font-light text-[#8be8ff]">{selectedChange.serviceP95Before} <span className="text-slate-500 text-sm">→</span> {selectedChange.serviceP95After}</div>
                 </div>
                 <div className="bg-[#242426] p-4 rounded-xl border border-white/5">
                   <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-2">Generated By</div>
                   <div className="text-sm font-medium text-white">{selectedChange.generatedBy}</div>
                 </div>
              </div>

              {/* Diff View */}
              <div className="flex flex-col gap-3">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <GitCommit className="w-4 h-4" /> Diff
                </h4>
                <div className="bg-[#0c0c0c] rounded-xl border border-white/10 overflow-hidden font-mono text-sm leading-relaxed p-4 whitespace-pre-wrap overflow-x-auto text-slate-300">
                  {selectedChange.diff.split('\n').map((line, i) => {
                    if (line.startsWith('+')) return <div key={i} className="text-[#8be8ff] bg-[#8be8ff]/5 px-2">{line}</div>;
                    if (line.startsWith('-')) return <div key={i} className="text-red-400 bg-red-500/5 px-2">{line}</div>;
                    if (line.startsWith('@@')) return <div key={i} className="text-slate-500 px-2">{line}</div>;
                    return <div key={i} className="px-2">{line}</div>;
                  })}
                </div>
              </div>

            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center text-slate-500 bg-[#1c1c1e] border border-white/5 rounded-2xl">
            Select a change to view details.
          </div>
        )}

      </div>
    </div>
  );
}
