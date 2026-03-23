import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Mail, Lock, Eye, EyeOff, AlertCircle, LogIn } from 'lucide-react';
import { ParticleBackground } from '../components/Layout/ParticleBackground';

const ADMIN_EMAIL = 'admin@versy.ai';
const ADMIN_PASSWORD = 'versy2026';

export const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simulate a slight delay for UX realism
        await new Promise(res => setTimeout(res, 700));

        if (email.trim().toLowerCase() !== ADMIN_EMAIL) {
            setError('Access denied. This account is not authorized.');
            setIsLoading(false);
            return;
        }

        if (password !== ADMIN_PASSWORD) {
            setError('Incorrect password. Please try again.');
            setIsLoading(false);
            return;
        }

        // Store auth in session
        sessionStorage.setItem('versy_auth', 'true');
        onLogin();
        navigate('/chat');
    };

    return (
        <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
            <ParticleBackground />

            {/* Background glows */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full max-w-md mx-4"
            >
                {/* Card */}
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-[0_25px_80px_rgba(0,0,0,0.8)]">

                    {/* Logo */}
                    <div className="flex flex-col items-center mb-10">
                        <div className="relative mb-5">
                            <div className="absolute inset-0 bg-emerald-500 blur-xl opacity-30 rounded-2xl" />
                            <div className="relative bg-black border border-emerald-500/40 p-4 rounded-2xl">
                                <Bot size={32} className="text-emerald-400" />
                            </div>
                        </div>
                        <h1 className="text-3xl font-black text-white tracking-tighter">
                            VERSY<span className="text-emerald-400">.AI</span>
                        </h1>
                        <p className="text-slate-500 text-sm font-medium mt-2">Administrator Access</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</label>
                            <div className="relative">
                                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={e => { setEmail(e.target.value); setError(''); }}
                                    placeholder="test@gmail.com"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.07] transition-all"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Password</label>
                            <div className="relative">
                                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={e => { setPassword(e.target.value); setError(''); }}
                                    placeholder="••••••••"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-11 py-3.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.07] transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>

                        {/* Error message */}
                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                                    transition={{ duration: 0.25 }}
                                    className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                                >
                                    <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
                                    <p className="text-red-400 text-sm font-medium">{error}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Submit */}
                        <motion.button
                            type="submit"
                            disabled={isLoading}
                            whileTap={{ scale: 0.97 }}
                            className="w-full flex items-center justify-center gap-3 mt-2 py-4 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed text-black font-black rounded-xl transition-all text-sm tracking-wide shadow-lg shadow-emerald-500/20"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                    Authenticating...
                                </>
                            ) : (
                                <>
                                    <LogIn size={18} />
                                    Sign In
                                </>
                            )}
                        </motion.button>
                    </form>

                    {/* Footer hint */}
                    <p className="text-center text-slate-600 text-xs mt-8 font-medium">
                        Restricted to authorized personnel only
                    </p>
                </div>
            </motion.div>
        </div>
    );
};
