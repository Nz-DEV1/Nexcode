import { Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from '../Code/CodeBlock';

// Safe Mode Mock
const motion = {
    div: ({ children, ...props }) => <div {...props}>{children}</div>
};

export const MessageBubble = ({ role, content }) => {
    const isAi = role === 'assistant';

    return (
        <motion.div className={`w-full py-8 group transition-colors hover:bg-white/[0.01]`}>
            <div className="max-w-4xl mx-auto px-4 md:px-8 flex gap-4 md:gap-8 items-start">
                <div className={`
                    min-w-[32px] w-8 h-8 rounded-full flex items-center justify-center mt-1 
                    ${isAi
                        ? 'bg-gradient-to-tr from-primary/80 to-highlight/80 shadow-md shadow-primary/20'
                        : 'bg-slate-800 border border-white/10'}
                `}>
                    {isAi ? <Bot size={18} className="text-black" /> : <User size={18} className="text-slate-400" />}
                </div>

                <div className="flex-1 space-y-2 min-w-0">
                    <div className="text-[15px] md:text-[16px] font-medium text-slate-400 mb-1 opacity-60">
                        {isAi ? 'Versy AI' : 'You'}
                    </div>

                    <div className={`prose prose-invert max-w-none text-slate-200 leading-relaxed text-[15px] md:text-[16px]`}>
                        <ReactMarkdown
                            components={{
                                code(props) {
                                    const { className, children, ...rest } = props;
                                    const match = /language-(\w+)/.exec(className || '');
                                    if (!match) {
                                        return (
                                            <code className="bg-white/10 px-1.5 py-0.5 rounded-md font-mono text-[13px] text-highlight" {...rest}>
                                                {children}
                                            </code>
                                        );
                                    }
                                    return <CodeBlock code={String(children).replace(/\n$/, '')} language={match[1]} />;
                                },
                                p: ({ children }) => <p className="mb-4 last:mb-0">{children}</p>,
                                a: ({ children, href }) => (
                                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-highlight hover:text-highlight/80 underline underline-offset-4 decoration-highlight/30">
                                        {children}
                                    </a>
                                ),
                                ul: ({ children }) => <ul className="list-disc ml-4 mb-4 space-y-2">{children}</ul>,
                                ol: ({ children }) => <ol className="list-decimal ml-4 mb-4 space-y-2">{children}</ol>,
                                li: ({ children }) => <li className="pl-1 leading-relaxed">{children}</li>,
                                h1: ({ children }) => <h1 className="text-2xl font-bold mb-4 mt-6 text-white">{children}</h1>,
                                h2: ({ children }) => <h2 className="text-xl font-bold mb-3 mt-5 text-white">{children}</h2>,
                                h3: ({ children }) => <h3 className="text-lg font-bold mb-2 mt-4 text-white">{children}</h3>,
                            }}
                        >
                            {content}
                        </ReactMarkdown>
                    </div>

                    {isAi && content.length === 0 && (
                        <span className="inline-block w-2 h-4 bg-slate-500 rounded-sm animate-pulse align-middle" />
                    )}
                </div>
            </div>
        </motion.div>
    );
};
