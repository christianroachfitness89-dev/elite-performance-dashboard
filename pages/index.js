import { useState, useEffect } from 'react';

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
      <div className="min-h-screen flex items-center justify-center" style={{background: 'linear-gradient(135deg, #0A0A0A 0%, #121212 50%, #1C1C1C 100%)'}}>
        <div className="text-center">
          <div className="w-16 h-16 rounded-full border-4 border-red-500/30 border-t-red-500 animate-spin mx-auto mb-4"></div>
          <p className="text-sm font-mono" style={{color: '#B8B8B8'}}>INITIALIZING MISSION CONTROL...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mission Control | Elite Performance AI</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
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
        `}} />
      </head>

      <div className="min-h-screen relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0A0A0A 0%, #121212 50%, #1C1C1C 100%)'}}>
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(209, 45, 48, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(209, 45, 48, 0.03) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>

        {/* Header */}
        <header className="relative z-10 border-b" style={{borderColor: 'rgba(209, 45, 48, 0.2)', backgroundColor: 'rgba(10, 10, 10, 0.8)', backdropFilter: 'blur(20px)'}}>
          <div className="container mx-auto px-8 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl" style={{background: 'linear-gradient(135deg, #D12D30 0%, #E13C3E 100%)', boxShadow: '0 0 40px rgba(209, 45, 48, 0.4)'}}>
                  <span className="text-3xl">⚡</span>
                </div>
                <div>
                  <h1 className="text-5xl font-display tracking-wide" style={{background: 'linear-gradient(135deg, #D12D30 0%, #E13C3E 50%, #F04C50 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>MISSION CONTROL</h1>
                  <p className="text-xs font-mono tracking-widest" style={{color: '#717171'}}>ELITE PERFORMANCE AI • LIVE OPERATIONS</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 px-5 py-3 rounded-xl border" style={{backgroundColor: 'rgba(28, 28, 28, 0.6)', borderColor: 'rgba(16, 185, 129, 0.3)'}}>
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-display tracking-wider" style={{color: '#10b981'}}>SYSTEMS ONLINE</span>
                </div>
                <div className="text-xs font-mono" style={{color: '#717171'}}>
                  {lastUpdate ? `SYNC: ${lastUpdate.toLocaleTimeString('en-AU', { timeZone: 'Australia/Adelaide', hour: '2-digit', minute: '2-digit' })} ACDT` : 'INITIALIZING...'}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-8 py-8">
          
          {/* ROW 1: Critical Alerts */}
          {status.critical_alerts && status.critical_alerts.length > 0 && (
            <div className="mb-8 p-6 rounded-2xl border" style={{backgroundColor: 'rgba(209, 45, 48, 0.08)', borderColor: 'rgba(209, 45, 48, 0.3)'}}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">🚨</span>
                <h2 className="text-2xl font-display tracking-wide" style={{color: '#E13C3E'}}>CRITICAL ALERTS</h2>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {status.critical_alerts.map((alert, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-5 rounded-xl border transition-all hover:scale-[1.02]" style={{backgroundColor: 'rgba(28, 28, 28, 0.6)', borderColor: 'rgba(209, 45, 48, 0.3)'}}>
                    <span className="text-4xl">{alert.icon}</span>
                    <div>
                      <p className="text-sm font-bold" style={{color: '#E13C3E'}}>{alert.title}</p>
                      <p className="text-xs mt-1" style={{color: '#B8B8B8'}}>{alert.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ROW 2: Live Metrics (5 columns) */}
          <div className="grid grid-cols-5 gap-5 mb-8">
            {[
              { icon: '📋', label: 'PAR-Q Monitor', value: 'ACTIVE', sub: 'Every 5 min', color: '#10b981', glow: 'rgba(16, 185, 129, 0.3)' },
              { icon: '💰', label: 'Revenue Today', value: `$${status.stripe?.revenue_dollars || '0.00'}`, sub: `${status.stripe?.successful_payments || 0} successful`, color: '#10b981', glow: 'rgba(16, 185, 129, 0.3)' },
              { icon: '💳', label: 'Failed Payments', value: status.stripe?.failed_payments || 0, sub: 'Need recovery', color: '#f59e0b', glow: 'rgba(245, 158, 11, 0.3)' },
              { icon: '📅', label: 'Tomorrow', value: status.calendar?.total_sessions || 0, sub: `${status.calendar?.conflicts || 0} conflicts`, color: '#3b82f6', glow: 'rgba(59, 130, 246, 0.3)' },
              { icon: '📧', label: 'Inbox', value: status.email?.total_unread || 0, sub: 'Unread', color: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.3)' }
            ].map((metric, idx) => (
              <div key={idx} className="p-6 rounded-2xl border transition-all hover:scale-[1.02] hover:shadow-2xl group" style={{backgroundColor: 'rgba(28, 28, 28, 0.6)', borderColor: 'rgba(209, 45, 48, 0.2)', boxShadow: metric.label === 'PAR-Q Monitor' ? `0 0 30px ${metric.glow}` : 'none'}}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl group-hover:scale-110 transition-transform">{metric.icon}</span>
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{backgroundColor: metric.color}}></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{backgroundColor: metric.color}}></span>
                  </span>
                </div>
                <p className="text-xs uppercase tracking-widest font-bold" style={{color: '#717171'}}>{metric.label}</p>
                <p className="text-4xl font-bold mt-3" style={{color: metric.color}}>{metric.value}</p>
                <p className="text-xs mt-3 font-mono" style={{color: '#B8B8B8'}}>{metric.sub}</p>
              </div>
            ))}
          </div>

          {/* ROW 3: Main Content (2 columns - 60/40) */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* LEFT: Schedule */}
            <div className="col-span-2 p-6 rounded-2xl border transition-all" style={{backgroundColor: 'rgba(28, 28, 28, 0.6)', borderColor: 'rgba(209, 45, 48, 0.2)'}}>
              <div className="flex items-center justify-between mb-6 pb-5 border-b" style={{borderColor: 'rgba(209, 45, 48, 0.2)'}}>
                <div>
                  <h3 className="text-2xl font-display tracking-wide" style={{color: '#FAFAFA'}}>📅 TOMORROW'S SCHEDULE</h3>
                  <p className="text-xs mt-2 font-mono tracking-wider" style={{color: '#717171'}}>{status.calendar?.total_sessions || 0} SESSIONS • 5 AM - 9 PM ACDT</p>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 rounded-xl border" style={{backgroundColor: status.calendar?.conflicts > 0 ? 'rgba(245, 158, 11, 0.1)' : 'rgba(16, 185, 129, 0.1)', borderColor: status.calendar?.conflicts > 0 ? 'rgba(245, 158, 11, 0.3)' : 'rgba(16, 185, 129, 0.3)'}}>
                  <span className="text-lg">{status.calendar?.conflicts > 0 ? '⚠️' : '✅'}</span>
                  <span className="text-sm font-bold" style={{color: status.calendar?.conflicts > 0 ? '#f59e0b' : '#10b981'}}>{status.calendar?.conflicts || 0} CONFLICTS</span>
                </div>
              </div>
              <div className="space-y-2 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                {status.calendar?.sessions && status.calendar.sessions.length > 0 ? (
                  status.calendar.sessions.map((session, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl border transition-all hover:scale-[1.01]" style={{backgroundColor: session.conflict ? 'rgba(245, 158, 11, 0.05)' : 'rgba(18, 18, 18, 0.8)', borderColor: session.conflict ? 'rgba(245, 158, 11, 0.3)' : 'rgba(209, 45, 48, 0.1)'}}>
                      <div className="w-28 font-mono text-sm font-bold" style={{color: '#E13C3E'}}>{session.adelaide_time}</div>
                      <div className="flex-1"><p className="text-sm font-medium" style={{color: '#FAFAFA'}}>{session.summary}</p></div>
                      {session.location && <div className="text-xs font-mono px-3 py-1 rounded-lg" style={{backgroundColor: 'rgba(139, 92, 246, 0.1)', color: '#a78bfa'}}>{session.location}</div>}
                      {session.conflict && <span className="text-xs font-bold px-3 py-1 rounded-lg" style={{backgroundColor: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b'}}>⚠️ BUFFER</span>}
                    </div>
                  ))
                ) : <p className="text-sm text-center py-12" style={{color: '#717171'}}>No sessions scheduled</p>}
              </div>
            </div>

            {/* RIGHT: Hot Leads */}
            <div className="p-6 rounded-2xl border transition-all" style={{backgroundColor: 'rgba(28, 28, 28, 0.6)', borderColor: 'rgba(209, 45, 48, 0.2)'}}>
              <div className="mb-6 pb-5 border-b" style={{borderColor: 'rgba(209, 45, 48, 0.2)'}}>
                <h3 className="text-2xl font-display tracking-wide" style={{color: '#FAFAFA'}}>🔥 HOT LEADS</h3>
                <p className="text-xs mt-2 font-mono tracking-wider" style={{color: '#717171'}}>READY TO CONVERT</p>
              </div>
              <div className="space-y-3">
                {status.leads && status.leads.length > 0 ? (
                  status.leads.slice(0, 5).map((lead, idx) => (
                    <div key={idx} className="p-4 rounded-xl border transition-all hover:scale-[1.02] cursor-pointer group" style={{backgroundColor: 'rgba(18, 18, 18, 0.8)', borderColor: 'rgba(209, 45, 48, 0.1)'}}>
                      <div className="flex items-center justify-between mb-3">
                        <p className="font-bold text-sm" style={{color: '#FAFAFA'}}>{lead.name}</p>
                        <span className="text-xs font-bold px-3 py-1.5 rounded-lg border" style={{backgroundColor: lead.score >= 90 ? 'rgba(209, 45, 48, 0.15)' : lead.score >= 70 ? 'rgba(245, 158, 11, 0.15)' : 'rgba(250, 204, 21, 0.15)', borderColor: lead.score >= 90 ? 'rgba(209, 45, 48, 0.4)' : lead.score >= 70 ? 'rgba(245, 158, 11, 0.4)' : 'rgba(250, 204, 21, 0.4)', color: lead.score >= 90 ? '#E13C3E' : lead.score >= 70 ? '#f59e0b' : '#facc15'}}>{lead.score}</span>
                      </div>
                      <p className="text-xs mb-3" style={{color: '#B8B8B8'}}>{lead.goal}</p>
                      {lead.phone && <div className="flex items-center gap-2 text-xs font-mono px-3 py-2 rounded-lg" style={{backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981'}}><span>📞</span>{lead.phone}</div>}
                    </div>
                  ))
                ) : <p className="text-sm text-center py-12" style={{color: '#717171'}}>No hot leads</p>}
              </div>
            </div>
          </div>

          {/* ROW 4: Automation + Actions */}
          <div className="grid grid-cols-2 gap-6">
            {/* Automation Status */}
            <div className="p-6 rounded-2xl border transition-all" style={{backgroundColor: 'rgba(28, 28, 28, 0.6)', borderColor: 'rgba(209, 45, 48, 0.2)'}}>
              <div className="mb-6 pb-5 border-b" style={{borderColor: 'rgba(209, 45, 48, 0.2)'}}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⚙️</span>
                  <div>
                    <h3 className="text-2xl font-display tracking-wide" style={{color: '#FAFAFA'}}>AUTOMATION STATUS</h3>
                    <p className="text-xs font-mono tracking-wider" style={{color: '#717171'}}>SCHEDULED TASKS</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {status.automations && status.automations.map((auto, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-xl border transition-all hover:scale-[1.01]" style={{backgroundColor: 'rgba(18, 18, 18, 0.8)', borderColor: auto.status === 'success' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(209, 45, 48, 0.2)'}}>
                    <div className="flex items-center gap-4">
                      <span className={`h-3 w-3 rounded-full ${auto.status === 'success' ? 'bg-green-500' : auto.status === 'warning' ? 'bg-yellow-500' : 'bg-gray-500'}`}></span>
                      <span className="text-sm font-bold" style={{color: '#FAFAFA'}}>{auto.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-mono" style={{color: '#E13C3E'}}>{auto.schedule}</p>
                      <p className="text-xs font-mono mt-1" style={{color: '#717171'}}>LAST: {auto.last_run}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-6 rounded-2xl border transition-all" style={{backgroundColor: 'rgba(28, 28, 28, 0.6)', borderColor: 'rgba(209, 45, 48, 0.2)'}}>
              <div className="mb-6 pb-5 border-b" style={{borderColor: 'rgba(209, 45, 48, 0.2)'}}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h3 className="text-2xl font-display tracking-wide" style={{color: '#FAFAFA'}}>QUICK ACTIONS</h3>
                    <p className="text-xs font-mono tracking-wider" style={{color: '#717171'}}>EXECUTE OPERATIONS</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '📧', title: 'Email Triage', desc: 'Categorize inbox' },
                  { icon: '💳', title: 'Payment Audit', desc: 'Check failed' },
                  { icon: '📋', title: 'PAR-Q Check', desc: 'Scan new leads' },
                  { icon: '📊', title: 'EOD Report', desc: 'Generate summary' }
                ].map((action, idx) => (
                  <button key={idx} className="p-5 rounded-xl border transition-all hover:scale-[1.02] hover:shadow-xl group text-left" style={{backgroundColor: 'rgba(18, 18, 18, 0.8)', borderColor: 'rgba(209, 45, 48, 0.1)'}}>
                    <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">{action.icon}</span>
                    <span className="text-sm font-bold block mb-1" style={{color: '#FAFAFA'}}>{action.title}</span>
                    <span className="text-xs font-mono" style={{color: '#717171'}}>{action.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t py-6 mt-12" style={{borderColor: 'rgba(209, 45, 48, 0.2)', backgroundColor: 'rgba(10, 10, 10, 0.6)'}}>
          <div className="container mx-auto px-8 text-center">
            <p className="text-xs font-mono tracking-widest" style={{color: '#717171'}}>ELITE PERFORMANCE AI • MISSION CONTROL</p>
            <p className="text-xs font-mono mt-2" style={{color: '#555'}}>POWERED BY OPENCLAW ⚡</p>
          </div>
        </footer>
      </div>
    </>
  );
}
