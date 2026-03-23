import React, { useState, useEffect, useRef } from 'react';
import { Sidebar } from '../components/Chat/Sidebar';
import { ChatInput } from '../components/Chat/ChatInput';
import { ChatBubble } from '../components/Chat/ChatBubble';
import { Menu } from 'lucide-react';

let sessionCounter = 1;

const createSession = (title) => ({
    id: Date.now(),
    title: title || `Chat ${sessionCounter++}`,
    created_at: new Date().toISOString(),
});

export const ChatPage = () => {
    const [sessions, setSessions] = useState([]);
    const [currentSessionId, setCurrentSessionId] = useState(null);
    // messages stored as { [sessionId]: [{id, role, content}] }
    const [allMessages, setAllMessages] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const messagesEndRef = useRef(null);

    const messages = currentSessionId ? (allMessages[currentSessionId] || []) : [];

    // Scroll to bottom on new message
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleNewChat = () => {
        const newSession = createSession('New Chat');
        setSessions(prev => [newSession, ...prev]);
        setCurrentSessionId(newSession.id);
        setIsSidebarOpen(false);
    };

    const handleDeleteSession = (sessionId) => {
        setSessions(prev => {
            const updated = prev.filter(s => s.id !== sessionId);
            if (currentSessionId === sessionId) {
                setCurrentSessionId(updated.length > 0 ? updated[0].id : null);
            }
            return updated;
        });
        setAllMessages(prev => {
            const copy = { ...prev };
            delete copy[sessionId];
            return copy;
        });
    };

    const handleSendMessage = async (content) => {
        if (!content.trim()) return;

        let activeSessionId = currentSessionId;

        // Create session if none exists
        if (!activeSessionId) {
            const newSession = createSession(content.slice(0, 30) + (content.length > 30 ? '...' : ''));
            setSessions(prev => [newSession, ...prev]);
            activeSessionId = newSession.id;
            setCurrentSessionId(activeSessionId);
        } else {
            // Update session title if it's the first message
            setSessions(prev => prev.map(s =>
                s.id === activeSessionId && s.title === 'New Chat'
                    ? { ...s, title: content.slice(0, 30) + (content.length > 30 ? '...' : '') }
                    : s
            ));
        }

        const userMsg = { id: Date.now(), role: 'user', content };
        const aiMsgId = Date.now() + 1;
        const aiMsg = { id: aiMsgId, role: 'assistant', content: '' };

        setAllMessages(prev => ({
            ...prev,
            [activeSessionId]: [...(prev[activeSessionId] || []), userMsg, aiMsg],
        }));

        setIsLoading(true);

        // Simulate streaming AI response (frontend-only placeholder)
        const demoResponse =
            `> **[Demo Mode]** — The AI backend is currently disabled.\n\n` +
            `You asked: *"${content}"*\n\n` +
            `To enable live AI responses, connect the backend service and update the API configuration.`;

        let streamed = '';
        for (const char of demoResponse) {
            await new Promise(r => setTimeout(r, 12));
            streamed += char;
            const snap = streamed;
            setAllMessages(prev => ({
                ...prev,
                [activeSessionId]: (prev[activeSessionId] || []).map(msg =>
                    msg.id === aiMsgId ? { ...msg, content: snap } : msg
                ),
            }));
        }

        setIsLoading(false);
    };

    return (
        <div className="flex bg-[#050505] min-h-screen text-white overflow-hidden font-sans">
            {/* Mobile Sidebar Toggle */}
            <div className={`fixed top-4 left-4 z-50 lg:hidden`}>
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="p-2 bg-black/50 backdrop-blur-md rounded-lg border border-white/10"
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Sidebar */}
            <Sidebar
                sessions={sessions}
                currentSessionId={currentSessionId}
                onSelectSession={(id) => { setCurrentSessionId(id); setIsSidebarOpen(false); }}
                onNewChat={handleNewChat}
                onDeleteSession={handleDeleteSession}
                isOpen={isSidebarOpen}
            />

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col h-screen relative bg-[#050505]">
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 pb-32 custom-scrollbar scroll-smooth">
                    {messages.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center px-4 max-w-6xl mx-auto">
                            {/* Hero Section */}
                            <div className="text-center mb-12">
                                <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-3xl bg-gradient-to-tr from-emerald-500/10 to-green-500/10 border border-green-500/20 flex items-center justify-center mb-6 md:mb-8 shadow-[0_0_50px_rgba(16,185,129,0.1)] animate-pulse-slow mx-auto">
                                    <span className="text-3xl md:text-5xl font-mono text-green-400 font-bold">V</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white tracking-tight">Verse Engine V3.0</h2>
                                <p className="text-xs md:text-sm text-slate-400 mb-6">Initialize UEFN Logic Architecture</p>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs text-slate-400">Device Logic</span>
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs text-slate-400">Verse Syntax</span>
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs text-slate-400">Debugging</span>
                                </div>
                            </div>

                            {/* Feature Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
                                {/* Settings Card */}
                                <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-500/10 to-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">Settings</h3>
                                    <p className="text-sm text-slate-400 mb-4">Customize your AI experience and preferences</p>
                                    <ul className="space-y-2 text-xs text-slate-500">
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-blue-400"></span>Model Selection</li>
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-blue-400"></span>Response Length</li>
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-blue-400"></span>Code Style</li>
                                    </ul>
                                </div>

                                {/* Updates Card */}
                                <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-green-500/10 to-emerald-600/10 border border-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">Updates</h3>
                                    <p className="text-sm text-slate-400 mb-4">Latest features and improvements</p>
                                    <ul className="space-y-2 text-xs text-slate-500">
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-green-400"></span>Real-time Streaming</li>
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-green-400"></span>Enhanced Formatting</li>
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-green-400"></span>Pro Code Blocks</li>
                                    </ul>
                                </div>

                                {/* FAQ Card */}
                                <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-500/10 to-purple-600/10 border border-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">FAQ</h3>
                                    <p className="text-sm text-slate-400 mb-4">Common questions and answers</p>
                                    <ul className="space-y-2 text-xs text-slate-500">
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-purple-400"></span>How to use Verse?</li>
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-purple-400"></span>UEFN Best Practices</li>
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-purple-400"></span>Debugging Tips</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col w-full">
                            {messages.map((msg, idx) => (
                                <ChatBubble
                                    key={msg.id || idx}
                                    role={msg.role}
                                    content={msg.content}
                                />
                            ))}
                            <div className="h-32 flex-shrink-0" ref={messagesEndRef} />
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        </div>
    );
};
