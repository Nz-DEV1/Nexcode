import { useState, useEffect } from 'react';
import { Check, Copy } from 'lucide-react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-cpp';

export const CodeBlock = ({ code, language = 'javascript' }) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        Prism.highlightAll();
    }, [code, language]);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="my-6 rounded-xl overflow-hidden bg-[#0d0d0d] border border-white/5 shadow-2xl">
            {/* Minimalist Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#0d0d0d] text-slate-400 border-b border-white/5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest opacity-60">
                    {language}
                </span>
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-2 py-1 rounded-lg hover:bg-white/5 transition-colors text-[11px] font-bold uppercase tracking-widest"
                >
                    {copied ? (
                        <>
                            <Check size={14} className="text-highlight" />
                            <span>Copied!</span>
                        </>
                    ) : (
                        <>
                            <Copy size={14} />
                            <span>Copy code</span>
                        </>
                    )}
                </button>
            </div>

            {/* Code Content with Vibrant Colors */}
            <div className="p-4 overflow-x-auto custom-scrollbar bg-[#0d0d0d]">
                <pre className={`language-${language} !bg-transparent !m-0 !p-0 !border-none !shadow-none font-mono text-[13px] md:text-sm leading-[1.6]`}>
                    <code className={`language-${language} !text-slate-300`}>{code}</code>
                </pre>
            </div>

            <style>{`
                .token.keyword, .token.operator { color: #3b82f6 !important; } /* Blue */
                .token.string, .token.attr-value { color: #10b981 !important; } /* Green */
                .token.function, .token.attr-name { color: #ef4444 !important; } /* Red */
                .token.number, .token.boolean { color: #fbbf24 !important; } /* Yellow/Orange */
                .token.comment { color: #64748b !important; font-style: italic; } /* Slate */
                .token.class-name, .token.constant { color: #ec4899 !important; } /* Pink */
            `}</style>
        </div>
    );
};
