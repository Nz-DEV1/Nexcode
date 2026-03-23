
// Safe Mode Mock (Static Background for stability)
const motion = {
    div: ({ children, className, ...props }) => <div className={className} {...props}>{children}</div>
};

export const ParticleBackground = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
            {/* Primary Emerald Glow - Dynamic Atmosphere */}
            <div
                className="absolute -top-[10%] -left-[10%] w-[80%] h-[80%] bg-emerald-500/10 rounded-full blur-[160px]"
            />

            {/* Lime Glow - Bottom Right */}
            <div
                className="absolute bottom-[0%] -right-[10%] w-[70%] h-[70%] bg-lime-500/5 rounded-full blur-[140px]"
            />

            {/* Central Glow Point */}
            <div
                className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"
            />

            {/* Precision Grid Overlay */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            {/* Darker Vignette to focus center */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
        </div>
    );
};
