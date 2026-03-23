import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { PricingPage } from './pages/PricingPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ChatPage } from './pages/ChatPage';
import { LoginPage } from './pages/LoginPage';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '40px', background: '#000', color: '#10b981', height: '100vh', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'white' }}>CRITICAL <span style={{ color: '#10b981' }}>ERROR</span></h1>
                    <div style={{ background: '#0a0a0a', padding: '30px', borderRadius: '24px', marginTop: '20px', color: '#888', border: '1px solid #10b981', maxWidth: '600px', textAlign: 'center' }}>
                        <code>{this.state.error?.message || "Unknown Runtime Error"}</code>
                    </div>
                    <button
                        onClick={() => window.location.reload()}
                        style={{ marginTop: '30px', padding: '15px 30px', background: '#10b981', color: 'black', border: 'none', borderRadius: '12px', cursor: 'pointer', fontWeight: '900' }}
                    >
                        RELOAD SYSTEM
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}

function App() {
    // Check if admin is already authenticated this session
    const [isAuthenticated, setIsAuthenticated] = useState(
        () => sessionStorage.getItem('versy_auth') === 'true'
    );

    const handleLogin = () => setIsAuthenticated(true);

    return (
        <ErrorBoundary>
            <Router>
                <Routes>
                    {/* Public routes */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/features" element={<FeaturesPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/how-it-works" element={<HowItWorksPage />} />

                    {/* Login route */}
                    <Route
                        path="/login"
                        element={
                            isAuthenticated
                                ? <Navigate to="/chat" replace />
                                : <LoginPage onLogin={handleLogin} />
                        }
                    />

                    {/* Protected chat route */}
                    <Route
                        path="/chat"
                        element={
                            isAuthenticated
                                ? <ChatPage />
                                : <Navigate to="/login" replace />
                        }
                    />

                    <Route path="*" element={<div style={{ color: 'white', padding: '40px', background: 'black', height: '100vh' }}>404 - Unknown Location</div>} />
                </Routes>
            </Router>
        </ErrorBoundary>
    );
}

export default App;
