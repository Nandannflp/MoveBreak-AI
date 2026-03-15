import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, Timer, Activity, Bell, Smartphone, ChevronRight } from 'lucide-react'
import Dashboard from './pages/Dashboard'
import './index.css'

function Landing() {
  const navigate = useNavigate();
  return (
    <div className="app">
      {/* Header */}
      <nav className="container" style={{ padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: 32, height: 32, background: 'var(--primary)', borderRadius: 8 }}></div>
          <span style={{ fontSize: 20, fontWeight: 800, color: 'var(--primary)' }}>MoveBreak AI</span>
        </div>
        <button className="btn-primary" onClick={() => navigate('/dashboard')}>Launch Dashboard</button>
      </nav>

      {/* Hero Section */}
      <section className="container" style={{ textAlign: 'center', padding: '80px 0' }}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: 64, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.02em' }}
        >
          Work smarter, <span style={{ color: 'var(--primary)' }}>live healthier</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ fontSize: 20, color: 'var(--text-secondary)', maxWidth: 600, margin: '0 auto 40px' }}
        >
          The AI-powered health assistant that helps you maintain perfect posture and stay active throughout your workday.
        </motion.p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <button className="btn-primary" style={{ padding: '16px 32px', fontSize: 18 }} onClick={() => navigate('/dashboard')}>
            Get Started Free <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* App Preview / Dashboard Stats */}
      <section className="container" style={{ padding: '40px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div className="card">
            <Activity color="var(--primary)" size={32} style={{ marginBottom: 16 }} />
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Health Score</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Real-time analysis of your work habits and physical strain.</p>
          </div>
          <div className="card">
            <Shield color="var(--success)" size={32} style={{ marginBottom: 16 }} />
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Posture Guard</h3>
            <p style={{ color: 'var(--text-secondary)' }}>AI-driven detection ensures you're sitting correctly to avoid long-term pain.</p>
          </div>
          <div className="card">
            <Timer color="var(--warning)" size={32} style={{ marginBottom: 16 }} />
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Smart Breaks</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Personalized micro-break schedules based on your productivity patterns.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container" style={{ marginTop: 'auto', padding: '60px 0 40px', borderTop: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>
          © 2026 MoveBreak AI. Built for better work environments.
        </p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
