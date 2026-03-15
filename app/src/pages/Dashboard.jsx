import React from 'react'
import { Activity, Shield, Timer, Bell, User, Settings, LogOut, ChevronRight, TrendingUp, AlertTriangle } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className="dashboard-layout" style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)' }}>
            {/* Simple Sidebar */}
            <aside style={{ width: '280px', borderRight: '1px solid rgba(0,0,0,0.05)', padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: 32, height: 32, background: 'var(--primary)', borderRadius: 8 }}></div>
                    <span style={{ fontSize: 20, fontWeight: 800, color: 'var(--primary)' }}>MoveBreak</span>
                </Link>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <NavItem icon={<Activity size={20} />} label="Overview" active />
                    <NavItem icon={<Shield size={20} />} label="Posture" />
                    <NavItem icon={<Timer size={20} />} label="Focus" />
                    <NavItem icon={<User size={20} />} label="Profile" />
                    <NavItem icon={<Settings size={20} />} label="Settings" />
                </nav>

                <div style={{ marginTop: 'auto' }}>
                    <NavItem icon={<LogOut size={20} />} label="Logout" color="var(--error)" />
                </div>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, padding: '40px 60px', overflowY: 'auto' }}>
                <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 4 }}>Welcome back, Nandakumar!</h1>
                        <p style={{ color: 'var(--text-secondary)' }}>You've had a productive morning. Time for a quick stretch?</p>
                    </div>
                    <div style={{ padding: '8px 16px', background: 'var(--surface)', borderRadius: '99px', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Bell size={18} color="var(--text-secondary)" />
                        <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700 }}>N</div>
                    </div>
                </header>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '40px' }}>
                    <StatCard 
                        title="Breaks Taken" 
                        value="6" 
                        trend="+2 from yesterday"
                        icon={<Timer color="var(--primary)" />}
                    />
                    <StatCard 
                        title="Active Time" 
                        value="4h 12m" 
                        trend="Normal range"
                        icon={<Activity color="var(--success)" />}
                    />
                    <StatCard 
                        title="Posture Score" 
                        value="88" 
                        trend="Excellent"
                        icon={<Shield color="var(--primary-dark)" />}
                    />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
                    {/* Health Score Ring Card */}
                    <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '48px' }}>
                        <div style={{ position: 'relative', width: '220px', height: '220px' }}>
                            <svg width="220" height="220" viewBox="0 0 220 220">
                                <circle cx="110" cy="110" r="100" fill="none" stroke="var(--surface)" strokeWidth="15" />
                                <circle cx="110" cy="110" r="100" fill="none" stroke="var(--primary)" strokeWidth="15" strokeDasharray="628" strokeDashoffset="125" strokeLinecap="round" />
                            </svg>
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                                <span style={{ fontSize: 48, fontWeight: 800, display: 'block' }}>82</span>
                                <span style={{ fontSize: 14, color: 'var(--text-secondary)', fontWeight: 600 }}>Health Score</span>
                            </div>
                        </div>
                        <div style={{ maxWidth: '300px' }}>
                            <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16 }}>Looking Good!</h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>Your overall health score is trending upwards this week. Keep maintaining that posture!</p>
                            <button className="btn-primary">View Detailed Insights</button>
                        </div>
                    </div>

                    {/* AI Insights Card */}
                    <div className="card" style={{ background: 'var(--primary)', color: 'white' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 20 }}>
                            <TrendingUp size={24} />
                            <h3 style={{ fontSize: 20, fontWeight: 700 }}>AI Coach</h3>
                        </div>
                        <p style={{ fontSize: 16, lineHeight: 1.6, opacity: 0.9, marginBottom: 24 }}>
                            "You've been sitting for 45 minutes straight. Based on your stress levels, now would be a perfect time for a 5-minute eye-relief exercise."
                        </p>
                        <button style={{ width: '100%', padding: '12px', borderRadius: '12px', border: 'none', background: 'rgba(255,255,255,0.2)', color: 'white', fontWeight: 700, cursor: 'pointer' }}>
                            Start Exercise
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}

const NavItem = ({ icon, label, active = false, color = 'var(--text-primary)' }) => (
    <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px', 
        padding: '12px 16px', 
        borderRadius: '12px', 
        background: active ? 'var(--surface)' : 'transparent',
        cursor: 'pointer',
        color: active ? 'var(--primary)' : color,
        fontWeight: active ? 700 : 500,
        transition: 'all 0.2s'
    }}>
        {icon}
        <span>{label}</span>
    </div>
)

const StatCard = ({ title, value, trend, icon }) => (
    <div className="card" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
            <div style={{ padding: '12px', background: 'var(--background)', borderRadius: '12px' }}>{icon}</div>
            <span style={{ fontSize: 12, color: 'var(--success)', fontWeight: 700, background: 'rgba(16, 185, 129, 0.1)', padding: '4px 8px', borderRadius: '4px' }}>{trend}</span>
        </div>
        <h4 style={{ fontSize: 14, color: 'var(--text-secondary)', fontWeight: 600, marginBottom: 4 }}>{title}</h4>
        <span style={{ fontSize: 28, fontWeight: 800 }}>{value}</span>
    </div>
)

export default Dashboard
