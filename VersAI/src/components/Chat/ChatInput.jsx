import { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Plus, Mic } from 'lucide-react';

export const ChatInput = ({ onSend, isLoading }) => {
    const [input, setInput] = useState('');
    const textareaRef = useRef(null);

    const handleSubmit = () => {
        if (input.trim() && !isLoading) {
            onSend(input);
            setInput('');
            if (textareaRef.current) textareaRef.current.style.height = 'auto';
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = '24px';
            const scrollHeight = textareaRef.current.scrollHeight;
            textareaRef.current.style.height = Math.min(scrollHeight, 200) + 'px';
        }
    }, [input]);

    return (
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-chat-bg via-chat-bg to-transparent pt-10 pb-6">
            <div className="max-w-3xl mx-auto px-4 md:px-0">
                <div className="relative flex items-end gap-2 bg-[#40414f] border border-[#303139] rounded-xl shadow-xs focus-within:border-black/20 dark:focus-within:border-gray-500/50 p-3">
                    <textarea
                        ref={textareaRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Send a message..."
                        rows={1}
                        className="flex-1 max-h-[200px] py-2 px-2 bg-transparent border-none text-white text-[16px] outline-none resize-none overflow-y-auto leading-6 custom-scrollbar placeholder-gray-400"
                    />

                    <button
                        onClick={handleSubmit}
                        disabled={!input.trim() || isLoading}
                        className={`
                            p-2 rounded-md transition-all flex items-center justify-center mb-0.5
                            ${input.trim()
                                ? 'bg-[#19c37d] text-white hover:bg-[#1a885d]'
                                : 'bg-transparent text-gray-400 cursor-not-allowed hover:bg-black/5 dark:hover:bg-white/5'}
                        `}
                    >
                        {isLoading ? (
                            <Loader2 size={16} className="animate-spin" />
                        ) : (
                            <Send size={16} />
                        )}
                    </button>
                </div>
                <div className="text-center text-xs text-gray-400 mt-2">
                    Versy can make mistakes. Consider checking important information.
                </div>
            </div>
        </div>
    );
};
