import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function MissionControl() {
  const [status, setStatus] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/status');
        const data = await res.json();
        setStatus(data);
        setLastUpdate(new Date());
      } catch (err) {
        console.error('Failed to fetch status:', err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!status) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full border-4 border-red-500/30 border-t-red-500 animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Initializing Mission Control...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Mission Control | Elite Performance AI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com?cache=bust-v2"></script>
        <script dangerouslySetInnerHTML={{__html: `
          tailwind.config = {
            important: true,
            theme: {
              extend: {
                fontFamily: {
                  display: ['Bebas Neue', 'sans-serif'],
                  body: ['Inter', 'sans-serif']
                },
                colors: {
                  brand: {
                    deepest: '#0A0A0A',
                    deep: '#121212',
                    elevated: '#1C1C1C',
                    surface: '#252525',
                    red: { 
                      primary: '#D12D30', 
                      bright: '#E13C3E', 
                      glow: '#F04C50' 
                    },
                    text: { 
                      primary: '#FAFAFA', 
                      secondary: '#B8B8B8', 
                      muted: '#717171' 
                    }
                  },
                  success: '#10b981',
                  warning: '#f59e0b',
                  danger: '#ef4444'
                }
              }
            }
          }
        `}} />
      </Head>

      <div className="min-h-screen relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0A0A0A 0%, #121212 50%, #1C1C1C 100%)'}}>
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>
        
        {/* Header */}
        <header className="relative z-10 border-b border-brand-red-primary/20 bg-brand-deepest/90 backdrop-blur-xl sticky top-0 z-50">
          <div className="container mx-auto px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-red-primary to-brand-red-bright flex items-center justify-center shadow-lg shadow-brand-red-primary/30">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h1 className="text-4xl font-display tracking-wide" style={{background: 'linear-gradient(135deg, #D12D30 0%, #E13C3E 50%, #F04C50 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>MISSION CONTROL</h1>
                  <p className="text-xs" style={{color: '#B8B8B8'}}>Elite Performance AI • Live Operations</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 bg-brand-elevated/80 py-2 px-4 rounded-lg border border-brand-red-primary/20 shadow-inner">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
                  </span>
                  <span className="text-success text-xs font-display tracking-wider">SYSTEMS ONLINE</span>
                </div>
                <div className="text-brand-text-muted text-xs font-mono">
                  {lastUpdate ? `LAST SYNC: ${lastUpdate.toLocaleTimeString('en-AU', { timeZone: 'Australia/Adelaide' })} ACDT` : 'LOADING...'}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-8 py-6">
          
          {/* ROW 1: Critical Alerts */}
          {status.critical_alerts && status.critical_alerts.length > 0 && (
            <div className="mb-6 p-5 rounded-xl" style={{backgroundColor: 'rgba(209, 45, 48, 0.1)', border: '1px solid rgba(209, 45, 48, 0.4)'}}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🚨</span>
                <h2 className="text-lg font-display tracking-wide" style={{color: '#E13C3E'}}>CRITICAL ALERTS</h2>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {status.critical_alerts.map((alert, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-lg transition-all" style={{backgroundColor: 'rgba(28, 28, 28, 0.6)', border: '1px solid rgba(209, 45, 48, 0.3)'}}>
                    <span className="text-3xl">{alert.icon}</span>
                    <div>
                      <p className="text-sm font-bold" style={{color: '#E13C3E'}}>{alert.title}</p>
                      <p className="text-xs" style={{color: '#B8B8B8'}}>{alert.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ROW 2: Live Metrics (5 columns) */}
          <div className="grid grid-cols-5 gap-4 mb-6">
            <div className="p-5 rounded-xl transition-all shadow-lg" style={{backgroundColor: 'rgba(28, 28, 28, 0.6)', border: '1px solid rgba(209, 45, 48, 0.2)'}}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">📋</span>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
              </div>
              <p className="text-xs uppercase tracking-widest font-bold" style={{color: '#717171'}}>PAR-Q Monitor</p>
              <p className="text-3xl font-bold mt-2" style={{color: '#FAFAFA'}}>ACTIVE</p>
              <p className="text-xs mt-3 font-mono" style={{color: '#B8B8B8'}}>Every 5 min</p>
            </div>

            <div className="p-5 rounded-xl transition-all shadow-lg" style={{backgroundColor: 'rgba(28, 28, 28, 0.6)', border: '1px solid rgba(209, 45, 48, 0.2)'}}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">💰</span>
                <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
              </div>
              <p className="text-xs uppercase tracking-widest font-bold" style={{color: '#717171'}}>Revenue Today</p>
              <p className="text-3xl font-bold mt-2" style={{color: '#10b981'}}>${status.stripe?.revenue_dollars || '0.00'}</p>
              <p className="text-xs mt-3 font-mono" style={{color: '#B8B8B8'}}>{status.stripe?.successful_payments || 0} successful</p>
            </div>

            <div className="p-5 rounded-xl transition-all shadow-lg" style={{backgroundColor: 'rgba(28, 28, 28, 0.6)', border: '1px solid rgba(209, 45, 48, 0.2)'}}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">💳</span>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
                </span>
              </div>
              <p className="text-xs uppercase tracking-widest font-bold" style={{color: '#717171'}}>Failed Payments</p>
              <p className="text-3xl font-bold mt-2" style={{color: '#f59e0b'}}>{status.stripe?.failed_payments || 0}</p>
              <p className="text-xs mt-3 font-mono" style={{color: '#B8B8B8'}}>Need recovery</p>
            </div>

            <div className="p-5 rounded-xl transition-all shadow-lg" style={{backgroundColor: 'rgba(28, 28, 28, 0.6)', border: '1px solid rgba(209, 45, 48, 0.2)'}}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">📅</span>
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
              </div>
              <p className="text-xs uppercase tracking-widest font-bold" style={{color: '#717171'}}>Tomorrow</p>
              <p className="text-3xl font-bold mt-2" style={{color: '#FAFAFA'}}>{status.calendar?.total_sessions || 0}</p>
              <p className="text-xs mt-3 font-mono" style={{color: '#B8B8B8'}}>{status.calendar?.conflicts || 0} conflicts</p>
            </div>

            <div className="p-5 rounded-xl transition-all shadow-lg" style={{backgroundColor: 'rgba(28, 28, 28, 0.6)', border: '1px solid rgba(209, 45, 48, 0.2)'}}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">📧</span>
                <span className="h-2.5 w-2.5 rounded-full bg-gray-500"></span>
              </div>
              <p className="text-xs uppercase tracking-widest font-bold" style={{color: '#717171'}}>Inbox</p>
              <p className="text-3xl font-bold mt-2" style={{color: '#FAFAFA'}}>{status.email?.total_unread || 0}</p>
              <p className="text-xs mt-3 font-mono" style={{color: '#B8B8B8'}}>Unread</p>
            </div>
          </div>

          {/* ROW 3: Main Content (2 columns - 60/40) */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* LEFT: Schedule */}
            <div className="col-span-2 p-5 rounded-xl transition-all shadow-lg" style={{backgroundColor: 'rgba(28, 28, 28, 0.6)', border: '1px solid rgba(209, 45, 48, 0.2)'}}>
              <div className="flex items-center justify-between mb-5 pb-4 border-b" style={{borderColor: 'rgba(209, 45, 48, 0.2)'}}>
                <div>
                  <h3 className="text-xl font-display tracking-wide" style={{color: '#FAFAFA'}}>📅 TOMORROW'S SCHEDULE</h3>
                  <p className="text-xs mt-1 font-mono" style={{color: '#717171'}}>{status.calendar?.total_sessions || 0} SESSIONS • 5 AM - 9 PM ACDT</p>
                </div>
                <span className="text-sm font-display tracking-wide px-3 py-1 rounded-lg border" style={{color: '#f59e0b', backgroundColor: 'rgba(245, 158, 11, 0.1)', borderColor: 'rgba(245, 158, 11, 0.3)'}}>{status.calendar?.conflicts || 0} CONFLICTS</span>
              </div>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {status.calendar?.sessions && status.calendar.sessions.length > 0 ? (
                  status.calendar.sessions.map((session, idx) => (
                    <div key={idx} className={`flex items-center gap-4 p-3 rounded-lg border ${session.conflict ? '' : ''}`} style={{backgroundColor: session.conflict ? 'rgba(245, 158, 11, 0.05)' : 'rgba(18, 18, 18, 0.8)', borderColor: session.conflict ? 'rgba(245, 158, 11, 0.3)' : 'rgba(209, 45, 48, 0.1)'}}>
                      <div className="w-24 font-mono text-sm" style={{color: '#E13C3E'}}>{session.adelaide_time}</div>
                      <div className="flex-1"><p className="text-sm" style={{color: '#FAFAFA'}}>{session.summary}</p></div>
                      {session.conflict && <span className="text-xs px-3 py-1 rounded font-bold" style={{backgroundColor: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b'}}>⚠️ BUFFER</span>}
                    </div>
                  ))
                ) : <p className="text-sm text-center py-8" style={{color: '#717171'}}>No sessions</p>}
              </div>
            </div>

            {/* RIGHT: Hot Leads */}
            <div className="p-5 rounded-xl transition-all shadow-lg" style={{backgroundColor: 'rgba(28, 28, 28, 0.6)', border: '1px solid rgba(209, 45, 48, 0.2)'}}>
              <div className="mb-5 pb-4 border-b" style={{borderColor: 'rgba(209, 45, 48, 0.2)'}}>
                <h3 className="text-xl font-display tracking-wide" style={{color: '#FAFAFA'}}>🔥 HOT LEADS</h3>
                <p className="text-xs mt-1 font-mono" style={{color: '#717171'}}>READY TO CONVERT</p>
              </div>
              <div className="space-y-3">
                {status.leads && status.leads.length > 0 ? (
                  status.leads.slice(0, 5).map((lead, idx) => (
                    <div key={idx} className="p-4 rounded-lg border transition-all cursor-pointer" style={{backgroundColor: 'rgba(18, 18, 18, 0.8)', borderColor: 'rgba(209, 45, 48, 0.1)'}}>
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-bold text-sm" style={{color: '#FAFAFA'}}>{lead.name}</p>
                        <span className="text-xs font-bold px-2 py-1 rounded" style={{backgroundColor: lead.score >= 90 ? 'rgba(209, 45, 48, 0.2)' : lead.score >= 70 ? 'rgba(245, 158, 11, 0.2)' : 'rgba(250, 204, 21, 0.2)', color: lead.score >= 90 ? '#E13C3E' : lead.score >= 70 ? '#f59e0b' : '#facc15'}}>{lead.score}</span>
                      </div>
                      <p className="text-xs mb-2" style={{color: '#B8B8B8'}}>{lead.goal}</p>
                      {lead.phone && <p className="text-xs font-mono" style={{color: '#717171'}}>📞 {lead.phone}</p>}
                    </div>
                  ))
                ) : <p className="text-sm text-center py-8" style={{color: '#717171'}}>No hot leads</p>}
              </div>
            </div>
          </div>

          {/* ROW 4: Automation + Actions */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-brand-elevated/60 p-5 rounded-xl border border-brand-red-primary/20 hover:border-brand-red-primary/30 transition-all shadow-lg">
              <div className="mb-5 pb-4 border-b border-brand-red-primary/20">
                <h3 className="text-xl font-display tracking-wide text-brand-text-primary">⚙️ AUTOMATION STATUS</h3>
                <p className="text-brand-text-muted text-xs font-mono mt-1">SCHEDULED TASKS</p>
              </div>
              <div className="space-y-3">
                {status.automations && status.automations.map((auto, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-brand-deep/80 rounded-lg border border-brand-red-primary/10 hover:border-brand-red-primary/30 transition-all">
                    <div className="flex items-center gap-3">
                      <span className={`h-2.5 w-2.5 rounded-full ${auto.status === 'success' ? 'bg-success' : auto.status === 'warning' ? 'bg-warning' : 'bg-brand-text-muted'}`}></span>
                      <span className="text-brand-text-primary text-sm font-bold">{auto.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-brand-text-muted text-xs font-mono">{auto.schedule}</p>
                      <p className="text-brand-text-secondary text-xs font-mono">LAST: {auto.last_run}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-elevated/60 p-5 rounded-xl border border-brand-red-primary/20 hover:border-brand-red-primary/30 transition-all shadow-lg">
              <div className="mb-5 pb-4 border-b border-brand-red-primary/20">
                <h3 className="text-xl font-display tracking-wide text-brand-text-primary">⚡ QUICK ACTIONS</h3>
                <p className="text-brand-text-muted text-xs font-mono mt-1">EXECUTE OPERATIONS</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="p-5 bg-brand-deep/80 rounded-xl border border-brand-red-primary/10 hover:border-brand-red-primary/40 hover:bg-brand-red-primary/10 transition-all text-left group">
                  <span className="text-2xl mb-3 block group-hover:scale-110 transition-transform">📧</span>
                  <span className="text-brand-text-primary text-sm font-bold block">Email Triage</span>
                  <span className="text-brand-text-muted text-xs font-mono">Categorize inbox</span>
                </button>
                <button className="p-5 bg-brand-deep/80 rounded-xl border border-brand-red-primary/10 hover:border-brand-red-primary/40 hover:bg-brand-red-primary/10 transition-all text-left group">
                  <span className="text-2xl mb-3 block group-hover:scale-110 transition-transform">💳</span>
                  <span className="text-brand-text-primary text-sm font-bold block">Payment Audit</span>
                  <span className="text-brand-text-muted text-xs font-mono">Check failed</span>
                </button>
                <button className="p-5 bg-brand-deep/80 rounded-xl border border-brand-red-primary/10 hover:border-brand-red-primary/40 hover:bg-brand-red-primary/10 transition-all text-left group">
                  <span className="text-2xl mb-3 block group-hover:scale-110 transition-transform">📋</span>
                  <span className="text-brand-text-primary text-sm font-bold block">PAR-Q Check</span>
                  <span className="text-brand-text-muted text-xs font-mono">Scan new leads</span>
                </button>
                <button className="p-5 bg-brand-deep/80 rounded-xl border border-brand-red-primary/10 hover:border-brand-red-primary/40 hover:bg-brand-red-primary/10 transition-all text-left group">
                  <span className="text-2xl mb-3 block group-hover:scale-110 transition-transform">📊</span>
                  <span className="text-brand-text-primary text-sm font-bold block">EOD Report</span>
                  <span className="text-brand-text-muted text-xs font-mono">Generate summary</span>
                </button>
              </div>
            </div>
          </div>
        </main>

        <footer className="border-t border-gray-800 py-4 bg-gray-950/80 mt-8">
          <div className="container mx-auto px-8 text-center">
            <p className="text-gray-500 text-xs font-mono">ELITE PERFORMANCE AI • MISSION CONTROL</p>
            <p className="text-gray-600 text-xs mt-1 font-mono">POWERED BY OPENCLAW ⚡</p>
          </div>
        </footer>
      </div>
    </>
  );
}
