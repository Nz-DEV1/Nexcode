import {  MoreHorizontal, ShieldCheck } from 'lucide-react';

export const Header = () => {
    return (
        <header className="sticky top-0 z-40 flex items-center justify-between px-8 py-4 bg-black/40 backdrop-blur-xl border-b border-white/5 mx-4 mt-4 rounded-3xl">
            <div className="flex items-center gap-3 cursor-pointer group px-4 py-2 rounded-2xl hover:bg-white/5 transition-all">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(16,185,129,1)]"></div>
                <span className="text-sm font-black text-white tracking-tight uppercase">Session <span className="text-primary tracking-widest ml-1">#4029</span></span>
            </div>

            <div className="flex items-center gap-4">
                <button className="hidden md:flex items-center gap-2 px-6 py-2 rounded-xl bg-primary/10 border border-primary/20 text-xs font-black uppercase tracking-widest text-primary hover:bg-primary hover:text-black transition-all">
                    <ShieldCheck size={14} /> System Secure
                </button>
                <button className="p-3 text-slate-500 hover:text-white hover:bg-white/10 rounded-xl transition-all">
                    <MoreHorizontal size={20} />
                </button>
            </div>
        </header>
    );
};
