export const QuickPrompts = ({ onSelect }) => {
    const prompts = [
        "Create a Rank System 🏆",
        "How to move a Prop? 📦",
        "Explain 'suspends' ⏳",
        "Debugging Help 🐛"
    ];

    return (
        <div className="flex gap-3 mt-auto mb-4 flex-wrap justify-center">
            {prompts.map((prompt) => (
                <button
                    key={prompt}
                    onClick={() => onSelect(prompt)}
                    className="bg-white/5 border border-white/10 px-4 py-2.5 rounded-full text-slate-300 text-sm backdrop-blur-sm hover:bg-highlight/20 hover:border-highlight transition-all"
                >
                    {prompt}
                </button>
            ))}
        </div>
    );
};
