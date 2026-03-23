import { ParticleBackground } from './ParticleBackground';

export const Layout = ({ children }) => {
    return (
        <div className="relative min-h-screen flex flex-col">
            <ParticleBackground />
            <div className="relative z-10 flex-1 flex flex-col">
                {children}
            </div>
        </div>
    );
};
