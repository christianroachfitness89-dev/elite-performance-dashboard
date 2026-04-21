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
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{__html: `
          tailwind.config = {
            theme: {
              extend: {
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

      <div className="min-h-screen bg-gradient-to-br from-brand-deepest via-brand-deep to-brand-elevated">
        {/* Header */}
        <header className="border-b border-brand-red-primary/20 bg-brand-deepest/90 backdrop-blur-xl sticky top-0 z-50">
          <div className="container mx-auto px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-red-primary to-brand-red-bright flex items-center justify-center shadow-lg shadow-brand-red-primary/30">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h1 className="text-3xl font-bold tracking-wide bg-gradient-to-r from-brand-red-primary via-brand-red-bright to-brand-red-glow bg-clip-text text-transparent">MISSION CONTROL</h1>
                  <p className="text-brand-text-secondary text-xs">Elite Performance AI • Live Operations</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 bg-brand-elevated/80 py-2 px-4 rounded-lg border border-brand-red-primary/20 shadow-inner">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
                  </span>
                  <span className="text-success text-xs font-bold tracking-wide">SYSTEMS ONLINE</span>
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
            <div className="mb-6 p-5 bg-brand-red-primary/10 border border-brand-red-primary/40 rounded-xl shadow-lg shadow-brand-red-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🚨</span>
                <h2 className="text-lg font-bold text-brand-red-bright">CRITICAL ALERTS</h2>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {status.critical_alerts.map((alert, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-brand-elevated/60 rounded-lg border border-brand-red-primary/30 hover:border-brand-red-bright/50 transition-all">
                    <span className="text-3xl">{alert.icon}</span>
                    <div>
                      <p className="text-brand-red-bright text-sm font-bold">{alert.title}</p>
                      <p className="text-brand-text-secondary/80 text-xs">{alert.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ROW 2: Live Metrics (5 columns) */}
          <div className="grid grid-cols-5 gap-4 mb-6">
            <div className="bg-brand-elevated/60 p-5 rounded-xl border border-brand-red-primary/20 hover:border-brand-red-primary/40 transition-all shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">📋</span>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
                </span>
              </div>
              <p className="text-brand-text-muted text-xs uppercase tracking-widest font-bold">PAR-Q Monitor</p>
              <p className="text-3xl font-bold text-brand-text-primary mt-2">ACTIVE</p>
              <p className="text-brand-text-secondary text-xs mt-3 font-mono">Every 5 min</p>
            </div>

            <div className="bg-brand-elevated/60 p-5 rounded-xl border border-brand-red-primary/20 hover:border-brand-red-primary/40 transition-all shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">💰</span>
                <span className="h-2.5 w-2.5 rounded-full bg-success"></span>
              </div>
              <p className="text-brand-text-muted text-xs uppercase tracking-widest font-bold">Revenue Today</p>
              <p className="text-3xl font-bold text-success mt-2">${status.stripe?.revenue_dollars || '0.00'}</p>
              <p className="text-brand-text-secondary text-xs mt-3 font-mono">{status.stripe?.successful_payments || 0} successful</p>
            </div>

            <div className="bg-brand-elevated/60 p-5 rounded-xl border border-brand-red-primary/20 hover:border-brand-red-primary/40 transition-all shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">💳</span>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-warning"></span>
                </span>
              </div>
              <p className="text-brand-text-muted text-xs uppercase tracking-widest font-bold">Failed Payments</p>
              <p className="text-3xl font-bold text-warning mt-2">{status.stripe?.failed_payments || 0}</p>
              <p className="text-brand-text-secondary text-xs mt-3 font-mono">Need recovery</p>
            </div>

            <div className="bg-brand-elevated/60 p-5 rounded-xl border border-brand-red-primary/20 hover:border-brand-red-primary/40 transition-all shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">📅</span>
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
              </div>
              <p className="text-brand-text-muted text-xs uppercase tracking-widest font-bold">Tomorrow</p>
              <p className="text-3xl font-bold text-brand-text-primary mt-2">{status.calendar?.total_sessions || 0}</p>
              <p className="text-brand-text-secondary text-xs mt-3 font-mono">{status.calendar?.conflicts || 0} conflicts</p>
            </div>

            <div className="bg-brand-elevated/60 p-5 rounded-xl border border-brand-red-primary/20 hover:border-brand-red-primary/40 transition-all shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">📧</span>
                <span className="h-2.5 w-2.5 rounded-full bg-brand-text-muted"></span>
              </div>
              <p className="text-brand-text-muted text-xs uppercase tracking-widest font-bold">Inbox</p>
              <p className="text-3xl font-bold text-brand-text-primary mt-2">{status.email?.total_unread || 0}</p>
              <p className="text-brand-text-secondary text-xs mt-3 font-mono">Unread</p>
            </div>
          </div>

          {/* ROW 3: Main Content (2 columns - 60/40) */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* LEFT: Schedule */}
            <div className="col-span-2 bg-brand-elevated/60 p-5 rounded-xl border border-brand-red-primary/20 hover:border-brand-red-primary/30 transition-all shadow-lg">
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-brand-red-primary/20">
                <div>
                  <h3 className="text-xl font-bold text-brand-text-primary">📅 TOMORROW'S SCHEDULE</h3>
                  <p className="text-brand-text-muted text-xs mt-1 font-mono">{status.calendar?.total_sessions || 0} SESSIONS • 5 AM - 9 PM ACDT</p>
                </div>
                <span className="text-warning text-sm font-bold bg-warning/10 px-3 py-1 rounded-lg border border-warning/30">{status.calendar?.conflicts || 0} CONFLICTS</span>
              </div>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {status.calendar?.sessions && status.calendar.sessions.length > 0 ? (
                  status.calendar.sessions.map((session, idx) => (
                    <div key={idx} className={`flex items-center gap-4 p-3 rounded-lg border ${session.conflict ? 'bg-warning/5 border-warning/30' : 'bg-brand-deep/80 border-brand-red-primary/10'}`}>
                      <div className="w-24 text-brand-red-bright font-mono text-sm">{session.adelaide_time}</div>
                      <div className="flex-1"><p className="text-brand-text-primary text-sm">{session.summary}</p></div>
                      {session.conflict && <span className="text-xs bg-warning/20 text-warning px-3 py-1 rounded font-bold">⚠️ BUFFER</span>}
                    </div>
                  ))
                ) : <p className="text-brand-text-muted text-sm text-center py-8">No sessions</p>}
              </div>
            </div>

            {/* RIGHT: Hot Leads */}
            <div className="bg-brand-elevated/60 p-5 rounded-xl border border-brand-red-primary/20 hover:border-brand-red-primary/30 transition-all shadow-lg">
              <div className="mb-5 pb-4 border-b border-brand-red-primary/20">
                <h3 className="text-xl font-bold text-brand-text-primary">🔥 HOT LEADS</h3>
                <p className="text-brand-text-muted text-xs mt-1 font-mono">READY TO CONVERT</p>
              </div>
              <div className="space-y-3">
                {status.leads && status.leads.length > 0 ? (
                  status.leads.slice(0, 5).map((lead, idx) => (
                    <div key={idx} className="p-4 bg-brand-deep/80 rounded-lg border border-brand-red-primary/10 hover:border-brand-red-primary/40 transition-all cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-brand-text-primary font-bold text-sm">{lead.name}</p>
                        <span className={`text-xs font-bold px-2 py-1 rounded ${lead.score >= 90 ? 'bg-brand-red-primary/20 text-brand-red-bright' : lead.score >= 70 ? 'bg-warning/20 text-warning' : 'bg-yellow-500/20 text-yellow-400'}`}>{lead.score}</span>
                      </div>
                      <p className="text-brand-text-secondary text-xs mb-2">{lead.goal}</p>
                      {lead.phone && <p className="text-brand-text-muted text-xs font-mono">📞 {lead.phone}</p>}
                    </div>
                  ))
                ) : <p className="text-brand-text-muted text-sm text-center py-8">No hot leads</p>}
              </div>
            </div>
          </div>

          {/* ROW 4: Automation + Actions */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-brand-elevated/60 p-5 rounded-xl border border-brand-red-primary/20 hover:border-brand-red-primary/30 transition-all shadow-lg">
              <div className="mb-5 pb-4 border-b border-brand-red-primary/20">
                <h3 className="text-xl font-bold text-brand-text-primary">⚙️ AUTOMATION STATUS</h3>
                <p className="text-brand-text-muted text-xs mt-1 font-mono">SCHEDULED TASKS</p>
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
                <h3 className="text-xl font-bold text-brand-text-primary">⚡ QUICK ACTIONS</h3>
                <p className="text-brand-text-muted text-xs mt-1 font-mono">EXECUTE OPERATIONS</p>
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
