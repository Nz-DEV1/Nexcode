import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Bot, User, Copy, Check } from 'lucide-react';
import prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-clike';

export const ChatBubble = ({ role, content, isTyping }) => {
    const isUser = role === 'user';
    const isAi = role === 'assistant' || role === 'model';

    // Optimized Code Block Component
    const CodeBlock = ({ inline, className, children, ...props }) => {
        const match = /language-(\w+)/.exec(className || '');
        const language = match ? match[1] : 'verse';
        const codeRef = React.useRef(null);
        const [copied, setCopied] = React.useState(false); // Move state here for independent copy buttons

        const handleCopy = (code) => {
            navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        };

        React.useEffect(() => {
            if (codeRef.current && !inline) {
                prism.languages.verse = prism.languages.swift;
                prism.highlightElement(codeRef.current);
            }
        }, [children, inline, language]);

        return !inline ? (
            <div className="rounded-[32px] overflow-hidden border border-primary/30 my-6 shadow-2xl glass-green w-full text-left font-mono group relative">
                <div className="flex items-center justify-between px-6 py-4 bg-black/60 border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-lg shadow-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-lg shadow-yellow-500/20" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-lg shadow-green-500/20" />
                        </div>
                        <span className="ml-4 text-xs font-bold tracking-widest text-slate-400 uppercase font-sans">
                            {language.toUpperCase()}
                        </span>
                    </div>
                </div>
                <button
                    onClick={() => handleCopy(String(children).replace(/\n$/, ''))}
                    className="absolute top-4 right-6 p-1.5 rounded-lg hover:bg-white/10 text-slate-500 hover:text-white transition-all z-10"
                    title="Copy Code"
                >
                    {copied ? <Check size={14} className="text-primary" /> : <Copy size={14} />}
                </button>
                <div className="p-0 overflow-x-auto relative bg-[#010201]">
                    <code
                        ref={codeRef}
                        className={`language-${language} match-braces !bg-transparent !whitespace-pre !block !p-8 text-[14px] leading-[1.7] relative z-10 font-mono`}
                        {...props}
                    >
                        {children}
                    </code>
                </div>
            </div>
        ) : (
            <code className="text-[#fca5a5] bg-[#7f1d1d]/30 border border-[#7f1d1d]/50 rounded px-1.5 py-0.5 text-[0.9em] font-mono" {...props}>
                {children}
            </code>
        );
    };

    return (
        <div className={`w-full py-6 text-base md:px-4 m-auto`}>
            <div className={`
                flex gap-4 max-w-4xl mx-auto w-full
                ${isUser ? 'flex-row-reverse' : 'flex-row'} 
                ${isUser ? 'items-end' : 'items-start'} 
            `}>
                <div className={`
                    w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center shrink-0 border border-white/10 shadow-lg
                    ${isUser ? 'bg-[#1e1e1e] hidden md:flex' : 'bg-gradient-to-tr from-green-500 to-emerald-600'} 
                `}>
                    {isUser ? <User size={18} className="text-gray-400" /> : <Bot size={20} className="text-white" />}
                </div>

                <div className={`
                    relative flex-1 overflow-visible min-w-0 max-w-[90%] md:max-w-[85%]
                    ${isUser ? 'ml-auto text-right' : 'mr-auto text-left'}
                `}>
                    {!isUser && (
                        <div className="flex items-center gap-2 mb-1.5 justify-start">
                            <span className="font-semibold text-xs text-green-400 tracking-wide">
                                VERSE AI
                            </span>
                            <span className="text-[9px] bg-green-500/10 text-green-400 border border-green-500/20 px-1 py-px rounded uppercase font-bold tracking-wider">Expert</span>
                        </div>
                    )}

                    {isTyping ? (
                        <div className="flex gap-1.5 h-8 items-center px-4 bg-[#1e1e1e]/50 rounded-2xl w-fit border border-white/5">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-[bounce_1s_infinite]"></span>
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-[bounce_1s_infinite_200ms]"></span>
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-[bounce_1s_infinite_400ms]"></span>
                        </div>
                    ) : (
                        <div className={`
                            prose prose-invert max-w-none leading-relaxed text-[#d1d5db]
                            ${isUser ? 'text-right' : 'text-left'}
                        `}>
                            <ReactMarkdown
                                components={{
                                    code: CodeBlock,
                                    table({ node, children }) {
                                        return (
                                            <div className="my-6 w-full overflow-hidden rounded-lg border border-white/10 shadow-sm bg-[#161b22] text-left">
                                                <table className="w-full text-left text-sm text-gray-300">
                                                    {children}
                                                </table>
                                            </div>
                                        )
                                    },
                                    thead({ node, children }) {
                                        return <thead className="bg-[#0d1117] text-white font-semibold border-b border-white/10">{children}</thead>
                                    },
                                    th({ node, children }) {
                                        return <th className="px-4 py-3">{children}</th>
                                    },
                                    td({ node, children }) {
                                        return <td className="px-4 py-3 border-t border-white/5">{children}</td>
                                    },
                                    em({ node, children }) {
                                        return (
                                            <em className="not-italic text-[#eab308] bg-[#eab308]/10 px-1.5 py-0.5 rounded text-[0.95em] font-medium border border-[#eab308]/20">
                                                {children}
                                            </em>
                                        )
                                    },
                                    strong({ node, children }) {
                                        return (
                                            <strong className="text-[#3b82f6] bg-[#3b82f6]/10 px-1.5 py-0.5 rounded text-[0.95em] font-bold border border-[#3b82f6]/20">
                                                {children}
                                            </strong>
                                        )
                                    }
                                }}
                            >
                                {content}
                            </ReactMarkdown>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
