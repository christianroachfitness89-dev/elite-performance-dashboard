import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function AgentsPage() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/status', {
          headers: { 'Accept': 'application/json' },
          cache: 'no-store'
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setStatus(data);
      } catch (err) {
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <>
        <Head>
          <title>Loading... | Elite Agents</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className="min-h-screen flex items-center justify-center" style={{background: 'linear-gradient(135deg, #0A0A0A 0%, #121212 50%, #1C1C1C 100%)'}}>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full border-4 border-red-500/30 border-t-red-500 animate-spin mx-auto mb-4"></div>
            <p className="text-sm font-mono" style={{color: '#B8B8B8'}}>LOADING AGENTS...</p>
          </div>
        </div>
      </>
    );
  }

  const agents = status?.agents || [];
  const executiveLayer = agents.filter(a => ['Hermes', 'Luna Φ', 'Nico Φ'].includes(a.name));
  const specialistLayer = agents.filter(a => ['Kai Φ', 'Jax Φ', 'Mark Φ', 'Ruby Φ'].includes(a.name));
  const reservedLayer = agents.filter(a => a.status === 'standby');

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Elite Agents | Elite Performance AI</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com" />
        <script dangerouslySetInnerHTML={{__html: `
          tailwind.config = {
            theme: {
              extend: {
                fontFamily: {
                  display: ['Bebas Neue', 'sans-serif'],
                  body: ['Inter', 'sans-serif'],
                  mono: ['JetBrains Mono', 'monospace']
                }
              }
            }
          }
        `}} />
        <style dangerouslySetInnerHTML={{__html: `
          .custom-scrollbar::-webkit-scrollbar { width: 6px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: rgba(28, 28, 28, 0.5); border-radius: 10px; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(209, 45, 48, 0.3); border-radius: 10px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(209, 45, 48, 0.5); }
          .agent-card { transition: all 0.3s ease; }
          .agent-card:hover { transform: translateY(-4px); }
        `}} />
      </Head>

      <div className="min-h-screen relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0A0A0A 0%, #121212 50%, #1C1C1C 100%)'}}>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>

        {/* Header */}
        <header className="relative z-10 border-b" style={{borderColor: 'rgba(209, 45, 48, 0.2)', backgroundColor: 'rgba(10, 10, 10, 0.8)', backdropFilter: 'blur(20px)'}}>
          <div className="container mx-auto px-8 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <a href="/" className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl" style={{background: 'linear-gradient(135deg, #D12D30 0%, #E13C3E 100%)', boxShadow: '0 0 40px rgba(209, 45, 48, 0.4)'}}>
                  <span className="text-3xl">⚡</span>
                </a>
                <div>
                  <h1 className="text-5xl font-display tracking-wide" style={{background: 'linear-gradient(135deg, #D12D30 0%, #E13C3E 50%, #F04C50 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>ELITE AGENTS</h1>
                  <p className="text-xs font-mono tracking-widest" style={{color: '#717171'}}>AI ORGANIZATION CHART</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a href="/" className="text-sm font-mono px-4 py-2 rounded-xl border transition-all hover:scale-105" style={{borderColor: 'rgba(209, 45, 48, 0.3)', backgroundColor: 'rgba(28, 28, 28, 0.6)', color: '#B8B8B8'}}>
                  ← BACK TO DASHBOARD
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-8 py-8">
          {/* Executive Layer */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">👑</span>
              <h2 className="text-3xl font-display tracking-wide" style={{color: '#FAFAFA'}}>EXECUTIVE LAYER</h2>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {executiveLayer.map((agent, idx) => (
                <AgentCard key={idx} agent={agent} tier="executive" />
              ))}
            </div>
          </section>

          {/* Specialist Layer */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">⚡</span>
              <h2 className="text-3xl font-display tracking-wide" style={{color: '#FAFAFA'}}>SPECIALIST LAYER</h2>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {specialistLayer.map((agent, idx) => (
                <AgentCard key={idx} agent={agent} tier="specialist" />
              ))}
            </div>
          </section>

          {/* Reserved/Standby */}
          {reservedLayer.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">💤</span>
                <h2 className="text-3xl font-display tracking-wide" style={{color: '#FAFAFA'}}>RESERVED</h2>
              </div>
              <div className="grid grid-cols-5 gap-6">
                {reservedLayer.map((agent, idx) => (
                  <AgentCard key={idx} agent={agent} tier="standby" />
                ))}
              </div>
            </section>
          )}

          {/* Ops Scripts */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">⚙️</span>
              <h2 className="text-3xl font-display tracking-wide" style={{color: '#FAFAFA'}}>AUTOMATION SCRIPTS</h2>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {status?.ops_scripts?.map((script, idx) => (
                <div key={idx} className="agent-card p-6 rounded-2xl border" style={{backgroundColor: 'rgba(28, 28, 28, 0.6)', borderColor: 'rgba(209, 45, 48, 0.2)'}}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{script.status === 'healthy' ? '✅' : '⚠️'}</span>
                    <span className="text-xs font-mono px-3 py-1 rounded-lg" style={{backgroundColor: script.status === 'healthy' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)', color: script.status === 'healthy' ? '#10b981' : '#f59e0b'}}>{script.status.toUpperCase()}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{color: '#FAFAFA'}}>{script.name}</h3>
                  <p className="text-xs font-mono mb-3" style={{color: '#717171'}}>{script.schedule}</p>
                  <div className="pt-3 border-t" style={{borderColor: 'rgba(209, 45, 48, 0.1)'}}>
                    <p className="text-xs" style={{color: '#B8B8B8'}}><span className="font-mono" style={{color: '#717171'}}>LAST RUN:</span> {script.last_run}</p>
                    <p className="text-xs mt-1" style={{color: '#B8B8B8'}}><span className="font-mono" style={{color: '#717171'}}>RESULT:</span> {script.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* System Stats */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">📊</span>
              <h2 className="text-3xl font-display tracking-wide" style={{color: '#FAFAFA'}}>SYSTEM STATUS</h2>
            </div>
            <div className="grid grid-cols-4 gap-6">
              <StatCard label="Active Agents" value={agents.filter(a => a.status === 'active').length} icon="🤖" color="#10b981" />
              <StatCard label="Standby Agents" value={agents.filter(a => a.status === 'standby').length} icon="💤" color="#8b5cf6" />
              <StatCard label="Cron Jobs" value={status?.cron_count || 0} icon="⏰" color="#3b82f6" />
              <StatCard label="Last Sync" value={new Date(status?.timestamp).toLocaleTimeString('en-AU', {timeZone: 'Australia/Adelaide', hour: '2-digit', minute: '2-digit'})} icon="🔄" color="#f59e0b" />
            </div>
          </section>
        </main>

        <footer className="border-t py-6 mt-12" style={{borderColor: 'rgba(209, 45, 48, 0.2)', backgroundColor: 'rgba(10, 10, 10, 0.6)'}}>
          <div className="container mx-auto px-8 text-center">
            <p className="text-xs font-mono tracking-widest" style={{color: '#717171'}}>ELITE PERFORMANCE AI • AGENT ORCHESTRATION</p>
            <p className="text-xs font-mono mt-2" style={{color: '#555'}}>POWERED BY OPENCLAW ⚡</p>
          </div>
        </footer>
      </div>
    </>
  );
}

function AgentCard({ agent, tier }) {
  const tierColors = {
    executive: { border: 'rgba(209, 45, 48, 0.4)', bg: 'rgba(209, 45, 48, 0.05)', glow: 'rgba(209, 45, 48, 0.2)' },
    specialist: { border: 'rgba(59, 130, 246, 0.3)', bg: 'rgba(59, 130, 246, 0.05)', glow: 'rgba(59, 130, 246, 0.15)' },
    standby: { border: 'rgba(139, 92, 246, 0.2)', bg: 'rgba(139, 92, 246, 0.03)', glow: 'rgba(139, 92, 246, 0.1)' }
  };

  const colors = tierColors[tier];

  return (
    <div className="agent-card p-6 rounded-2xl border relative overflow-hidden" style={{backgroundColor: colors.bg, borderColor: colors.border}}>
      <div className="absolute top-0 right-0 w-20 h-20 opacity-10" style={{background: `radial-gradient(circle at top right, ${colors.glow}, transparent 70%)`}}></div>
      
      <div className="flex items-center justify-between mb-4">
        <span className="text-4xl">{agent.emoji}</span>
        <span className="text-xs font-mono px-3 py-1 rounded-lg" style={{backgroundColor: agent.status === 'active' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(139, 92, 246, 0.1)', color: agent.status === 'active' ? '#10b981' : '#8b5cf6'}}>
          {agent.status.toUpperCase()}
        </span>
      </div>

      <h3 className="text-xl font-bold mb-1" style={{color: '#FAFAFA'}}>{agent.name}</h3>
      <p className="text-sm mb-3" style={{color: '#B8B8B8'}}>{agent.role}</p>

      <div className="pt-4 border-t" style={{borderColor: 'rgba(209, 45, 48, 0.1)'}}>
        <div className="flex items-center justify-between text-xs">
          <span className="font-mono" style={{color: '#717171'}}>CHANNEL:</span>
          <span className="font-mono" style={{color: agent.channel === '-' ? '#717171' : '#E13C3E'}}>{agent.channel}</span>
        </div>
        <div className="flex items-center justify-between text-xs mt-2">
          <span className="font-mono" style={{color: '#717171'}}>MODEL:</span>
          <span className="font-mono" style={{color: '#B8B8B8'}}>{agent.model}</span>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon, color }) {
  return (
    <div className="p-6 rounded-2xl border transition-all hover:scale-[1.02]" style={{backgroundColor: 'rgba(28, 28, 28, 0.6)', borderColor: 'rgba(209, 45, 48, 0.2)'}}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl">{icon}</span>
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{backgroundColor: color}}></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{backgroundColor: color}}></span>
        </span>
      </div>
      <p className="text-xs uppercase tracking-widest font-bold" style={{color: '#717171'}}>{label}</p>
      <p className="text-4xl font-bold mt-3" style={{color: color}}>{value}</p>
    </div>
  );
}
