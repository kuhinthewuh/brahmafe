import React from 'react';
import BrainModel from '@/components/dashboard/BrainModel';
import { MOTHER_TIMELINE } from '@/lib/mockData';
import { Brain, Activity, Clock, ShieldAlert, CheckCircle, Info } from 'lucide-react';

const IconMap = {
  warning: ShieldAlert,
  info: Info,
  success: CheckCircle,
  error: Activity
};

const ColorMap = {
  warning: 'text-orange-400',
  info: 'text-blue-400',
  success: 'text-[#8be8ff]',
  error: 'text-red-400'
};

export default function Mother() {
  return (
    <div className="h-full flex flex-col p-8 lg:p-10 text-white overflow-y-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-light tracking-tight mb-2">Mother</h2>
        <p className="text-slate-400">Autonomous system controller health and activity.</p>
      </header>

      <div className="flex flex-col lg:flex-row gap-6 min-h-0">
        
        {/* Brain Side */}
        <div className="flex-1 min-h-[500px] bg-[#1c1c1e] rounded-3xl overflow-hidden border border-white/5 relative p-2 shadow-2xl">
          <BrainModel />
        </div>

        {/* Stats & Activity Side */}
        <div className="w-full lg:w-[400px] flex flex-col gap-6">
          
          <div className="bg-[#242426] rounded-3xl p-6 border border-white/5 shadow-lg">
             <div className="flex items-center gap-3 mb-6">
                <Brain className="w-6 h-6 text-[#8be8ff]" />
                <h3 className="text-lg font-medium text-white">Mother Status</h3>
             </div>
             
             <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">State</span>
                  <span className="text-xl font-light text-[#8be8ff]">HEALTHY</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Current Action</span>
                  <span className="text-sm font-medium text-white pt-1">MONITORING</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Active Mission</span>
                  <span className="text-xl font-light text-white">#042</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Missions Completed</span>
                  <span className="text-xl font-light text-white">9</span>
                </div>
                <div className="flex flex-col col-span-2 mt-2 pt-4 border-t border-white/10">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Workforce Stats</span>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Supervised (all time)</span>
                    <span className="text-white font-medium">18</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-1">
                    <span className="text-slate-400">Current workers</span>
                    <span className="text-white font-medium">2</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-1">
                    <span className="text-slate-400">Workers replaced</span>
                    <span className="text-white font-medium">2</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-1">
                    <span className="text-slate-400">Confirmed state lost</span>
                    <span className="text-[#8be8ff] font-medium">0</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-1">
                    <span className="text-slate-400">Decisions made</span>
                    <span className="text-white font-medium">124</span>
                  </div>
                </div>
             </div>
          </div>

          <div className="bg-[#242426] rounded-3xl p-6 border border-white/5 shadow-lg flex-1 flex flex-col min-h-[300px]">
             <div className="flex items-center gap-3 mb-6">
                <Activity className="w-5 h-5 text-slate-400" />
                <h3 className="text-sm font-medium text-white">Mother Activity</h3>
             </div>
             
             <div className="flex-1 overflow-y-auto scrollbar-hide pr-2 space-y-4">
                {MOTHER_TIMELINE.map((event, index) => {
                  const Icon = IconMap[event.type];
                  return (
                    <div key={event.id} className="flex gap-4 relative">
                       {index !== MOTHER_TIMELINE.length - 1 && (
                         <div className="absolute left-[11px] top-6 bottom-[-16px] w-[2px] bg-white/5"></div>
                       )}
                       <div className={`relative z-10 w-6 h-6 rounded-full bg-[#1c1c1e] border border-white/10 flex items-center justify-center ${ColorMap[event.type]}`}>
                          <Icon className="w-3 h-3" />
                       </div>
                       <div className="flex-1 pb-1">
                         <div className="text-sm text-slate-200">{event.action}</div>
                         <div className="text-xs text-slate-500 mt-1 flex items-center gap-1"><Clock className="w-3 h-3" /> {event.time}</div>
                       </div>
                    </div>
                  );
                })}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
