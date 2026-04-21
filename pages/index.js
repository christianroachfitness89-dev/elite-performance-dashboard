import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/status');
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error('Error fetching status:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading || !data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="spinner mx-auto mb-6"></div>
          <p className="text-lg font-semibold text-gray-600">Loading Elite Dashboard...</p>
          <p className="text-sm text-gray-500 mt-2">Connecting to AI Command Center</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Elite Performance AI - Command Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Christian Roach Fitness - AI Organization Command Center" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>" />
      </Head>

      {/* Header */}
      <header className="gradient-bg text-white py-12 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                <span className="text-5xl">⚡</span>
                <h1 className="text-5xl font-black tracking-tight">Elite Performance AI</h1>
              </div>
              <p className="text-purple-200 mt-3 text-xl font-light">Command Center • Live Intelligence Hub</p>
            </div>
            
            <div className="glass-dark rounded-2xl px-8 py-6 text-center lg:text-right">
              <div className="text-purple-100 text-lg font-bold mb-2">
                {new Date(data.timestamp).toLocaleString('en-AU', {
                  timeZone: 'Australia/Adelaide',
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
              <div className="flex items-center justify-center lg:justify-end gap-3 text-purple-300 text-sm">
                <span className="live-dot"></span>
                <span className="font-medium">Australia/Adelaide • Live Feed</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Metrics Bar */}
      <div className="container mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <MetricCard label="Revenue Today" value={data.metrics.stripe_today} color="text-emerald-600" icon="💰" trend="+$119" />
          <MetricCard label="Failed Payments" value={data.metrics.failed_payments} color="text-red-600" icon="⚠️" alert />
          <MetricCard label="Tomorrow's Sessions" value={data.metrics.sessions_tomorrow} color="text-blue-600" icon="📅" />
          <MetricCard label="Inbox" value={data.metrics.unread_emails} color="text-amber-600" icon="📧" />
          <MetricCard label="PAR-Q Submissions" value={`${data.metrics.parq_total_submissions} total`} color="text-purple-600" icon="📋" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Executive Layer */}
        <section className="mb-16">
          <div className="section-header">
            <div className="section-icon executive">👑</div>
            <h2 className="section-title">Executive Command</h2>
          </div>
          <div className="premium-table-container">
            <table className="premium-table">
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Agent</th>
                  <th>Model</th>
                  <th>Mission</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <ExecutiveRow role="Board" name="Christian Roach" model="Human" mission="Strategic oversight & final approval" />
                <ExecutiveRow role="CEO" name="⚡ Hermes" model="qwen3.5:397b-cloud" mission="Chief Intelligence Officer" />
              </tbody>
            </table>
          </div>
        </section>

        {/* Elite Agents */}
        <section className="mb-16">
          <div className="section-header">
            <div className="section-icon agents">🤖</div>
            <h2 className="section-title">Elite Agents Division</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.agents.map((agent, idx) => (
              <AgentCard key={idx} agent={agent} />
            ))}
          </div>
        </section>

        {/* Operations Scripts */}
        <section>
          <div className="section-header">
            <div className="section-icon ops">⚙️</div>
            <h2 className="section-title">Operations Automation</h2>
          </div>
          <div className="premium-table-container">
            <table className="premium-table">
              <thead>
                <tr>
                  <th>Automation</th>
                  <th>Schedule</th>
                  <th>Last Execution</th>
                  <th>Result</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data.ops_scripts.map((script, idx) => (
                  <tr key={idx} className="hover:bg-gradient-to-r hover:from-purple-50 hover:to-transparent">
                    <td className="font-bold text-gray-900">{script.name}</td>
                    <td className="text-gray-600 font-medium">{script.schedule}</td>
                    <td className="text-gray-500 text-sm">{script.last_run}</td>
                    <td className="text-gray-600 text-sm truncate max-w-xs">{script.result}</td>
                    <td>
                      <span className="badge badge-active">✓ Operational</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="live-dot"></span>
            <span className="text-gray-600 font-medium">Auto-refreshes every 60 seconds</span>
          </div>
          <p className="text-gray-500 mb-2">Last updated: {new Date(data.timestamp).toLocaleTimeString('en-AU')}</p>
          <h3 className="text-2xl font-black text-gray-800 mt-6 mb-2">Elite Performance AI Corporation</h3>
          <p className="text-lg text-gray-600 font-medium">Christian Roach Fitness</p>
          <p className="text-sm text-gray-500 mt-3 italic">"Transforming bodies, building confidence, changing lives"</p>
        </footer>
      </div>
    </>
  );
}

function MetricCard({ label, value, color, icon, trend, alert }) {
  return (
    <div className="metric-card group">
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-500 text-xs font-black uppercase tracking-wider">{label}</span>
        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{icon}</span>
      </div>
      <div className={`text-3xl font-black ${color} mb-2`}>{value || 'N/A'}</div>
      {trend && (
        <div className="flex items-center gap-2 text-sm">
          <span className="text-emerald-600 font-bold">↑ {trend}</span>
          <span className="text-gray-400">today</span>
        </div>
      )}
      {alert && (
        <div className="mt-3 pt-3 border-t border-red-100">
          <span className="text-red-600 text-xs font-bold uppercase">⚠ Action Required</span>
        </div>
      )}
    </div>
  );
}

function ExecutiveRow({ role, name, model, mission }) {
  return (
    <tr className="hover:bg-gradient-to-r hover:from-purple-50 hover:to-transparent transition-all">
      <td className="font-black text-gray-900 text-lg">{role}</td>
      <td className="font-bold text-gray-900 text-lg">{name}</td>
      <td className="text-gray-500 font-mono text-sm bg-gray-50 rounded px-3 py-1 inline-block my-2">{model}</td>
      <td className="text-gray-600 font-medium">{mission}</td>
      <td>
        <span className="badge badge-active">🟢 Active</span>
      </td>
    </tr>
  );
}

function AgentCard({ agent }) {
  const statusClass = agent.status === 'active' ? 'badge-active' : 'badge-standby';
  const statusLabel = agent.status === 'active' ? 'Active' : 'Standby';
  const borderClass = agent.status === 'active' ? 'status-active' : 'status-standby';

  return (
    <div className={`agent-card ${borderClass} group`}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{agent.emoji}</span>
        <span className={`${statusClass} scale-110`}>{statusLabel}</span>
      </div>
      <h3 className="font-black text-xl text-gray-900 mb-1">{agent.name}</h3>
      <p className="text-gray-600 font-medium text-sm mb-4">{agent.role}</p>
      <div className="bg-gradient-to-r from-slate-50 to-purple-50 rounded-xl px-4 py-3 flex justify-between items-center">
        <div>
          <div className="text-xs text-gray-400 font-bold uppercase mb-1">Model</div>
          <div className="text-sm font-mono font-semibold text-gray-700">{agent.model}</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-400 font-bold uppercase mb-1">Channel</div>
          <div className="text-sm font-semibold text-purple-600">{agent.channel}</div>
        </div>
      </div>
    </div>
  );
}
