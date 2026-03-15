import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Activity, Shield, Timer, User, Settings, LogOut } from 'lucide-react'

const Sidebar = () => {
    const location = useLocation()
    
    const navItems = [
        { path: '/dashboard', label: 'Overview', icon: <Activity size={20} /> },
        { path: '/posture', label: 'Posture', icon: <Shield size={20} /> },
        { path: '/focus', label: 'Focus', icon: <Timer size={20} /> },
        { path: '/analytics', label: 'Analytics', icon: <Activity size={20} /> },
        { path: '/achievements', label: 'Awards', icon: <Shield size={20} /> },
        { path: '/profile', label: 'Profile', icon: <User size={20} /> },
        { path: '/settings', label: 'Settings', icon: <Settings size={20} /> },
    ]

    return (
        <aside style={{ width: '280px', borderRight: '1px solid rgba(0,0,0,0.05)', padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '32px', background: 'var(--background)' }}>
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: 32, height: 32, background: 'var(--primary)', borderRadius: 8 }}></div>
                <span style={{ fontSize: 20, fontWeight: 800, color: 'var(--primary)' }}>MoveBreak</span>
            </Link>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {navItems.map((item) => (
                    <NavItem 
                        key={item.path}
                        icon={item.icon} 
                        label={item.label} 
                        active={location.pathname === item.path}
                        onClick={() => {}}
                        path={item.path}
                    />
                ))}
            </nav>

            <div style={{ marginTop: 'auto' }}>
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px', 
                    padding: '12px 16px', 
                    borderRadius: '12px', 
                    cursor: 'pointer',
                    color: 'var(--error)',
                    fontWeight: 500,
                    transition: 'all 0.2s'
                }}>
                    <LogOut size={20} />
                    <span>Logout</span>
                </div>
            </div>
        </aside>
    )
}

const NavItem = ({ icon, label, active, path }) => (
    <Link to={path} style={{ textDecoration: 'none' }}>
        <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            padding: '12px 16px', 
            borderRadius: '12px', 
            background: active ? 'var(--surface)' : 'transparent',
            cursor: 'pointer',
            color: active ? 'var(--primary)' : 'var(--text-primary)',
            fontWeight: active ? 700 : 500,
            transition: 'all 0.2s'
        }}>
            {icon}
            <span>{label}</span>
        </div>
    </Link>
)

export default Sidebar
