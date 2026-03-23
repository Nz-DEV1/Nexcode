import React from 'react';
import { Plus, MessageSquare, Trash2, LayoutGrid, Settings, HelpCircle, BarChart2 } from 'lucide-react';

export const Sidebar = ({ sessions, currentSessionId, onSelectSession, onNewChat, onDeleteSession, isOpen }) => {
    return (
        <div className={`
            fixed inset-y-0 left-0 z-40 w-[280px] bg-[#0d0d0d] border-r border-white/5 transform transition-transform duration-300 ease-in-out flex flex-col
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            lg:translate-x-0 lg:static
        `}>
            {/* Logo Area */}
            <div className="p-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-green-500 to-emerald-300 flex items-center justify-center">
                    <span className="text-black font-bold text-lg">V</span>
                </div>
                <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    Verse AI
                </h1>
            </div>

            {/* Main Navigation */}
            <div className="px-4 space-y-1 mb-6">
                <button
                    onClick={onNewChat}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500/20 transition-all font-medium mb-4"
                >
                    <Plus size={18} />
                    New Project
                </button>
            </div>

            <div className="px-4 flex-1 overflow-y-auto custom-scrollbar">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">Workspace</div>

                {/* Mock Nav Items */}
                <div className="space-y-1 mb-6">
                    <div className="flex items-center gap-3 px-3 py-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
                        <LayoutGrid size={18} />
                        <span>Templates</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
                        <BarChart2 size={18} />
                        <span>Statistics</span>
                    </div>
                </div>

                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">Recent Chats</div>
                <div className="space-y-1">
                    {sessions.map((session) => (
                        <div
                            key={session.id}
                            className={`
                                group flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer text-sm transition-all
                                ${currentSessionId === session.id
                                    ? 'bg-white/10 text-white border border-white/5'
                                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                }
                            `}
                            onClick={() => onSelectSession(session.id)}
                        >
                            <span className="truncate flex-1 max-w-[170px]">
                                {session.title || 'Untitled Project'}
                            </span>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onDeleteSession(session.id);
                                }}
                                className="opacity-0 group-hover:opacity-100 text-gray-500 hover:text-red-400 transition-all"
                            >
                                <Trash2 size={14} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/5 space-y-1">
                <div className="flex items-center gap-3 px-3 py-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
                    <Settings size={18} />
                    <span>Settings</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
                    <HelpCircle size={18} />
                    <span>Updates & FAQ</span>
                </div>
            </div>
        </div>
    );
};
