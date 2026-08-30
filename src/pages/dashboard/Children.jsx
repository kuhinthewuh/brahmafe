import React, { useState } from 'react';
import { WORKERS_LIST } from '@/lib/mockData';
import { Users, Clock, ServerCog, Wrench, Shield, ArrowRight } from 'lucide-react';

const StatusColors = {
  COMPLETED: 'text-[#8be8ff] bg-[#8be8ff]/10 border-[#8be8ff]/30',
  FAILED: 'text-red-400 bg-red-400/10 border-red-400/30',
  ACTIVE: 'text-blue-400 bg-blue-400/10 border-blue-400/30',
};

export default function Children() {
  const [selectedWorker, setSelectedWorker] = useState(WORKERS_LIST[0]);

  return (
    <div className="h-full flex flex-col p-8 lg:p-10 text-white">
      <header className="mb-8">
        <h2 className="text-3xl font-light tracking-tight mb-2">Workforce Health</h2>
        <p className="text-slate-400">The worker can die. The mission cannot.</p>
      </header>

      {/* Top Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
        {[
          { label: 'TOTAL CREATED', value: '18', color: 'text-white' },
          { label: 'ACTIVE', value: '2', color: 'text-blue-400' },
          { label: 'COMPLETED', value: '11', color: 'text-[#8be8ff]' },
          { label: 'RETIRED', value: '4', color: 'text-slate-400' },
          { label: 'FAILED', value: '1', color: 'text-red-400' },
          { label: 'REPLACED', value: '2', color: 'text-orange-400' },
          { label: 'STATE LOST', value: '0', color: 'text-[#8be8ff]' },
        ].map((metric) => (
          <div key={metric.label} className="bg-[#1c1c1e] rounded-2xl p-4 border border-white/5 flex flex-col items-center text-center">
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">{metric.label}</span>
            <span className={`text-2xl font-light ${metric.color}`}>{metric.value}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-1 gap-6 overflow-hidden min-h-0">
        
        {/* Workers List */}
        <div className="w-1/3 flex flex-col bg-[#1c1c1e] border border-white/5 rounded-2xl overflow-hidden shadow-lg">
          <div className="p-4 border-b border-white/5 bg-[#242426] flex items-center gap-2 text-sm font-medium text-slate-300">
            <Users className="w-4 h-4" /> All Workers
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {WORKERS_LIST.map(worker => (
              <div 
                key={worker.id} 
                onClick={() => setSelectedWorker(worker)}
                className={`p-4 rounded-xl cursor-pointer transition-all border ${selectedWorker?.id === worker.id ? 'bg-white/5 border-white/20' : 'bg-transparent border-transparent hover:bg-white/5'}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex flex-col">
                    <span className="font-mono text-sm text-white font-medium">{worker.id}</span>
                    <span className="text-xs text-slate-400 mt-0.5">{worker.role}</span>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider border ${StatusColors[worker.status]}`}>
                    {worker.status}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-500 mt-3">
                  <span>Mission {worker.mission}</span>
                  <span>{worker.created}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Worker Detail */}
        {selectedWorker ? (
          <div className="flex-1 flex flex-col bg-[#1c1c1e] border border-white/5 rounded-2xl overflow-hidden shadow-lg">
            
            <div className="p-6 border-b border-white/5 bg-[#242426] flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-mono text-white mb-1">{selectedWorker.id}</h3>
                <div className="text-sm text-[#8be8ff] font-medium">{selectedWorker.role}</div>
              </div>
              <span className={`text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border ${StatusColors[selectedWorker.status]}`}>
                {selectedWorker.status}
              </span>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
               <div className="grid grid-cols-2 gap-6">
                 
                 {/* Details */}
                 <div className="space-y-6">
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Parent</div>
                      <div className="text-sm text-white flex items-center gap-2"><ArrowRight className="w-4 h-4 text-slate-500"/> Mother</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Mission</div>
                      <div className="text-sm text-white">{selectedWorker.mission}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Lifetime</div>
                      <div className="text-sm text-white">{selectedWorker.lifetime}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Created</div>
                      <div className="text-sm text-slate-300 flex items-center gap-2"><Clock className="w-4 h-4" /> {selectedWorker.created}</div>
                    </div>
                 </div>

                 {/* Operational Data */}
                 <div className="space-y-6">
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Tools Used</div>
                      <div className="text-sm text-white flex items-center gap-2"><Wrench className="w-4 h-4 text-slate-400"/> {selectedWorker.mcpCalls || 0} MCP Calls</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Evidence Produced</div>
                      <div className="text-sm text-white flex items-center gap-2"><Shield className="w-4 h-4 text-[#8be8ff]"/> {selectedWorker.evidenceProduced || 0} Artifacts</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Checkpoint History</div>
                      <div className="text-sm text-white flex items-center gap-2">
                        <ServerCog className="w-4 h-4 text-blue-400" /> {selectedWorker.checkpoint}
                      </div>
                    </div>
                    
                    {selectedWorker.failure && (
                      <div className="p-3 bg-red-400/10 border border-red-400/30 rounded-lg">
                        <div className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-1">Failure Reason</div>
                        <div className="text-sm font-mono text-red-200">{selectedWorker.failure}</div>
                      </div>
                    )}
                    
                    {selectedWorker.replacement && (
                      <div>
                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Replacement</div>
                        <div className="text-sm font-mono text-orange-400">{selectedWorker.replacement}</div>
                      </div>
                    )}

                    {selectedWorker.restoredFrom && (
                      <div>
                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Restored From</div>
                        <div className="text-sm font-mono text-blue-400">{selectedWorker.restoredFrom}</div>
                      </div>
                    )}
                 </div>

               </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center text-slate-500 bg-[#1c1c1e] border border-white/5 rounded-2xl">
            Select a worker to view details.
          </div>
        )}

      </div>
    </div>
  );
}
