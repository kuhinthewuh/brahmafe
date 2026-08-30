import React from 'react';
import { MISSION_STATS, WORKER_DISTRIBUTION, MOTHER_ACTIVITY_CHART, RELIABILITY_TREND } from '@/lib/mockData';
import BrainModel from '@/components/dashboard/BrainModel';
import { RadialBarChart, RadialBar, AreaChart, Area, ResponsiveContainer, BarChart, Bar, Cell, LineChart, Line, YAxis } from 'recharts';
import { ArrowUpRight, Activity, Calendar, Download } from 'lucide-react';

export default function Overview() {
  return (
    <div className="h-full flex flex-col p-8 lg:p-10">
      
      <header className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-light tracking-tight text-white mb-1">Operational Overview</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search missions..." 
              className="bg-black/20 border border-white/10 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:border-[#8be8ff]/50 text-white w-64 transition-colors"
            />
            <svg className="w-4 h-4 absolute right-4 top-2.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <button className="bg-[#8be8ff] hover:bg-[#6fa8ff] text-black font-semibold text-sm px-6 py-2 rounded-full flex items-center gap-2 transition-colors">
            <ArrowUpRight className="w-4 h-4" />
            New Mission
          </button>
          <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors relative">
            <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#8be8ff] rounded-full border border-[#1c1c1e]"></span>
          </button>
        </div>
      </header>

      {/* Grid Layout matches the screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 auto-rows-[minmax(280px,1fr)]">
        
        {/* CARD 1: Mission Insights */}
        <div className="bg-[#242426] rounded-3xl p-6 relative flex flex-col justify-between overflow-hidden shadow-lg border border-white/5">
          <div className="flex justify-between items-start">
            <h3 className="text-sm font-medium text-slate-200">Mission Insights</h3>
            <div className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center text-[#8be8ff]">
              <Activity className="w-4 h-4" />
            </div>
          </div>
          
          <div className="flex flex-col gap-2 relative z-10 mt-4">
             <div className="flex items-center gap-2">
                <div className="w-1 h-3 bg-[#8be8ff] rounded-full"></div>
                <div className="text-xs text-slate-400"><strong className="text-white text-sm">{MISSION_STATS.activeMissions}</strong> Active Missions</div>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-1 h-3 bg-purple-500 rounded-full"></div>
                <div className="text-xs text-slate-400"><strong className="text-white text-sm">{MISSION_STATS.workersActive}</strong> Workers Active</div>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-1 h-3 bg-orange-400 rounded-full"></div>
                <div className="text-xs text-slate-400"><strong className="text-white text-sm">{MISSION_STATS.recoveries}</strong> Recoveries</div>
             </div>
          </div>

          <div className="absolute -bottom-10 -right-10 w-[240px] h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart 
                cx="50%" cy="50%" innerRadius="50%" outerRadius="100%" 
                barSize={16} 
                data={[
                  { name: 'Active', value: 100, fill: '#8be8ff' },
                  { name: 'Workers', value: 75, fill: '#a855f7' },
                  { name: 'Recoveries', value: 50, fill: '#fb923c' }
                ]}
                startAngle={180} endAngle={0}
              >
                <RadialBar minAngle={15} background={{ fill: '#111' }} clockWise dataKey="value" cornerRadius={10} />
              </RadialBarChart>
            </ResponsiveContainer>
            <div className="absolute bottom-[35%] left-[30%] text-center">
               <div className="text-2xl font-semibold text-white tracking-tighter">100%</div>
               <div className="text-[9px] text-slate-400 tracking-widest uppercase">Uptime</div>
            </div>
          </div>
        </div>

        {/* CARD 2: Mother Activity */}
        <div className="bg-[#242426] rounded-3xl p-6 relative flex flex-col justify-between overflow-hidden shadow-lg border border-white/5">
           <div className="flex justify-between items-start mb-4 relative z-10">
              <h3 className="text-sm font-medium text-slate-200">Mother Activity</h3>
              <span className="text-xs font-semibold text-[#8be8ff]">LIVE</span>
           </div>
           
           <div className="absolute inset-0 top-16 left-0 right-0 bottom-0 opacity-70">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={MOTHER_ACTIVITY_CHART} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorDec" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8be8ff" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#8be8ff" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="decisionLoad" stroke="#8be8ff" strokeWidth={2} fillOpacity={1} fill="url(#colorDec)" />
                  <Area type="monotone" dataKey="workerCoordination" stroke="#555" strokeWidth={1} fill="none" />
                </AreaChart>
              </ResponsiveContainer>
           </div>
           
           <div className="flex justify-between items-end mt-auto relative z-10 pt-16">
             <button className="text-[#8be8ff] text-xs font-medium uppercase tracking-wider hover:text-[#6fa8ff] transition-colors">
               Weekly Activity Report
             </button>
             <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
               <Download className="w-4 h-4 text-slate-300" />
             </div>
           </div>
        </div>

        {/* CARD 3: Mission Summary */}
        <div className="bg-[#8be8ff] rounded-3xl p-6 relative flex flex-col justify-between overflow-hidden shadow-lg shadow-[#8be8ff]/10">
           <div className="flex justify-between items-start">
              <h3 className="text-sm font-semibold text-black">Mission Summary</h3>
              <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-black">
                <Calendar className="w-4 h-4" />
              </div>
           </div>
           
           <div className="flex justify-between items-center my-6">
              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase font-bold tracking-widest text-black/50 mb-1">MON</span>
                <span className="text-lg font-semibold text-black mb-2">14</span>
                <div className="flex gap-0.5"><span className="w-1 h-1 rounded-full bg-black"></span><span className="w-1 h-1 rounded-full bg-black/30"></span><span className="w-1 h-1 rounded-full bg-black/30"></span></div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase font-bold tracking-widest text-black/50 mb-1">TUE</span>
                <span className="text-lg font-semibold text-black mb-2">15</span>
                <div className="flex gap-0.5"><span className="w-1 h-1 rounded-full bg-black"></span><span className="w-1 h-1 rounded-full bg-black"></span><span className="w-1 h-1 rounded-full bg-black/30"></span></div>
              </div>
              <div className="flex flex-col items-center bg-black/5 rounded-[20px] px-3 py-3 border border-black/10">
                <span className="text-[10px] uppercase font-bold tracking-widest text-black/60 mb-1">WED</span>
                <span className="text-xl font-bold text-black mb-2">16</span>
                <div className="flex gap-0.5"><span className="w-1 h-1 rounded-full bg-black"></span><span className="w-1 h-1 rounded-full bg-black"></span><span className="w-1 h-1 rounded-full bg-black"></span></div>
              </div>
           </div>
           
           <div className="flex items-end gap-3">
              <span className="text-5xl font-light tracking-tighter text-black">98.7<span className="text-2xl">%</span></span>
              <span className="text-xs text-black/70 pb-1 leading-tight w-20">Mission<br/>continuity</span>
           </div>
        </div>

        {/* CARD 4: Worker Distribution */}
        <div className="bg-[#242426] rounded-3xl p-6 relative flex flex-col overflow-hidden shadow-lg border border-white/5">
           <div className="flex justify-between items-start mb-6">
              <h3 className="text-sm font-medium text-slate-200">Worker Distribution</h3>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
           </div>
           
           <div className="flex-1 w-full min-h-[150px]">
             <ResponsiveContainer width="100%" height="100%">
                <BarChart data={WORKER_DISTRIBUTION} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                  <Bar dataKey="value" radius={[6, 6, 6, 6]} barSize={24}>
                    {WORKER_DISTRIBUTION.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.highlight ? '#8be8ff' : '#444'} />
                    ))}
                  </Bar>
                </BarChart>
             </ResponsiveContainer>
           </div>
           
           <div className="flex justify-between items-center mt-2 px-2">
             {WORKER_DISTRIBUTION.map(w => (
                <div key={w.name} className="text-[9px] text-slate-500 uppercase tracking-wider max-w-[40px] text-center truncate">{w.name}</div>
             ))}
           </div>
        </div>

        {/* CARD 5: 3D Brain (Hero) */}
        <div className="bg-[#1c1c1e] rounded-3xl relative overflow-hidden shadow-lg border border-white/5 col-span-1 min-h-[280px] p-1">
           <BrainModel />
        </div>

        {/* CARD 6: Reliability Trend */}
        <div className="bg-[#242426] rounded-3xl p-6 relative flex flex-col justify-between overflow-hidden shadow-lg border border-white/5">
           <div className="flex justify-between items-start mb-6">
              <h3 className="text-sm font-medium text-slate-200">Mission Reliability</h3>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
           </div>

           <div className="flex-1 w-full relative min-h-[100px] mb-4">
             <ResponsiveContainer width="100%" height="100%">
               <LineChart data={RELIABILITY_TREND} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
                  <YAxis domain={['dataMin - 0.2', 'dataMax + 0.2']} hide />
                  <Line type="monotone" dataKey="value" stroke="#8be8ff" strokeWidth={3} dot={{ r: 4, fill: '#8be8ff', strokeWidth: 2, stroke: '#1c1c1e' }} activeDot={{ r: 6 }} />
               </LineChart>
             </ResponsiveContainer>
             <div className="flex justify-between absolute bottom-0 left-4 right-4 text-[10px] text-slate-500 font-medium">
                {RELIABILITY_TREND.map(t => <span key={t.time}>{t.time}</span>)}
             </div>
           </div>

           <div className="flex items-end gap-3 mt-auto">
              <span className="text-5xl font-light tracking-tighter text-white">99.8<span className="text-2xl text-slate-500">%</span></span>
              <span className="text-xs text-slate-400 pb-1 leading-tight w-20">Average<br/>reliability</span>
           </div>
        </div>

      </div>
    </div>
  );
}
