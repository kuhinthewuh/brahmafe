import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, FileCode2, Brain, Users, Settings, LogOut } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard, exact: true },
  { name: 'Code Changes', path: '/dashboard/code-changes', icon: FileCode2 },
  { name: 'Mother', path: '/dashboard/mother', icon: Brain },
  { name: 'Children', path: '/dashboard/children', icon: Users },
];

export default function DashboardShell() {
  return (
    <div className="h-screen w-full bg-[#111111] bg-gradient-to-br from-[#0c0c0c] to-[#1a1a1a] font-sans text-slate-300">
      <div className="w-full h-full bg-[#1c1c1e] overflow-hidden flex border-none relative">
        
        {/* Sidebar */}
        <aside className="w-[260px] h-full flex flex-col bg-[#1c1c1e] border-r border-white/5 py-8 px-6 flex-shrink-0 z-10 hidden lg:flex">
          <div className="mb-10">
            <h1 className="text-2xl font-semibold text-white tracking-tight flex items-center gap-2" style={{ fontFamily: "'Instrument Serif', serif" }}>
              <span className="text-white">Brahma</span>
            </h1>
          </div>

          <div className="flex items-center gap-3 mb-10 pb-8 border-b border-white/10">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden text-white font-semibold text-sm">
               B
            </div>
            <div>
              <p className="text-sm font-medium text-white">brahma-user</p>
              <p className="text-xs text-slate-500">Authorized</p>
            </div>
          </div>

          <nav className="flex-1 flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.exact}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
                    isActive
                      ? 'bg-white/10 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-2 pt-8 border-t border-white/10">
            <button className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 text-left">
              <Settings className="w-5 h-5" />
              Settings
            </button>
            <button className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 text-left">
              <LogOut className="w-5 h-5" />
              Log Out
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 h-full overflow-y-auto scrollbar-hide overflow-x-hidden relative">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
