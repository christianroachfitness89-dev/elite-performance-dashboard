import Link from 'next/link';
import Head from 'next/head';

export default function Agents() {
  const agents = [
    {
      name: 'Hermes',
      emoji: '⚡',
      role: 'Chief Intelligence Officer',
      channel: '#hermes',
      color: 'from-brand-red-primary to-brand-red-bright',
      description: 'Business brain - lead capture, client nurturing, marketing, sales',
      reports: 'Direct to Christian',
      status: 'Active',
      stats: { leads: '67 captured', conversion: '60%+', response: '<5 min' }
    },
    {
      name: 'Luna Φ',
      emoji: '🌙',
      role: 'Social Media Manager',
      channel: '#claude',
      color: 'from-purple-500 to-purple-600',
      description: 'Instagram captions, content scheduling, engagement',
      reports: 'Hermes → Mike',
      status: 'Active',
      stats: { posts: '12/week', engagement: '+18%', reach: '2.4k' }
    },
    {
      name: 'Nico Φ',
      emoji: '🎯',
      role: 'Operations Coordinator',
      channel: '#crew-hq',
      color: 'from-blue-500 to-blue-600',
      description: 'Task tracking, team coordination, workflow optimization',
      reports: 'Hermes',
      status: 'Active',
      stats: { tasks: '47 active', completion: '94%', efficiency: '+23%' }
    },
    {
      name: 'Mike Φ',
      emoji: '📝',
      role: 'Content Director',
      channel: '#content-pipeline',
      color: 'from-brand-red-primary to-brand-red-bright',
      description: 'Content strategy, brand guidelines, visual direction',
      reports: 'Hermes',
      status: 'Active',
      stats: { campaigns: '8 active', approval: '98%', consistency: '100%' }
    },
    {
      name: 'F2F Φ',
      emoji: '🤝',
      role: 'Face-to-Face Outreach',
      channel: '#f2f-outreach',
      color: 'from-green-500 to-green-600',
      description: 'Gym floor engagement, member conversions, partnerships',
      reports: 'Hermes → Nico',
      status: 'Active',
      stats: { conversations: '35/day', conversions: '12%', partnerships: '2 gyms' }
    },
    {
      name: 'Kai Φ',
      emoji: '🎣',
      role: 'Lead Capture Specialist',
      channel: '#lead-alerts',
      color: 'from-brand-red-bright to-brand-red-glow',
      description: 'PAR-Q monitoring, hot lead alerts, follow-up sequences',
      reports: 'Hermes',
      status: 'Active',
      stats: { alerts: '15 hot', response: 'instant', followup: '100%' }
    },
    {
      name: 'Ruby Φ',
      emoji: '💎',
      role: 'Client Success Manager',
      channel: '#crew-hq',
      color: 'from-pink-500 to-pink-600',
      description: 'Client check-ins, retention, satisfaction tracking',
      reports: 'Hermes → Nico',
      status: 'Active',
      stats: { clients: '42 active', retention: '89%', satisfaction: '4.9/5' }
    },
    {
      name: 'Jax Φ',
      emoji: '✅',
      role: 'Task Management',
      channel: '#active-tasks',
      color: 'from-orange-500 to-orange-600',
      description: 'Task creation, deadline tracking, completion monitoring',
      reports: 'Nico',
      status: 'Active',
      stats: { tasks: '156 total', ontime: '96%', overdue: '<2%' }
    },
    {
      name: 'Mark Φ',
      emoji: '🔧',
      role: 'Technical Operations',
      channel: '#cursor',
      color: 'from-cyan-500 to-cyan-600',
      description: 'Code reviews, system maintenance, technical debt',
      reports: 'Hermes',
      status: 'Active',
      stats: { uptime: '99.9%', issues: '0 critical', deployments: '24/week' }
    }
  ];

  return (
    <>
      <Head>
        <title>Elite Agents - Org Chart</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-animated relative">
        <div className="bg-grain"></div>

        {/* Ambient Glow Orbs */}
        <div className="fixed top-0 left-1/4 w-96 h-96 bg-brand-red-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-brand-red-bright/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header */}
        <header className="relative z-10 border-b border-brand-red-primary/10 bg-brand-deep/30 backdrop-blur-xl sticky top-0">
          <div className="container mx-auto px-6 py-5">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-5 hover:opacity-80 transition-opacity">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-red-primary to-brand-red-bright flex items-center justify-center glow-medium transform hover:scale-105 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <div>
                  <h1 className="text-4xl font-display tracking-wide text-gradient">Elite Performance AI</h1>
                  <p className="text-brand-text-secondary text-sm font-medium mt-0.5">Christian Roach Fitness • Command Center</p>
                </div>
              </Link>
              <nav className="flex items-center gap-3">
                <Link href="/" className="card-elite py-2.5 px-5 text-sm hover:border-brand-red-primary/40 transition-all">
                  Dashboard
                </Link>
                <div className="btn-elite py-2.5 px-5 text-sm">
                  Agents Org Chart
                </div>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 container mx-auto px-6 py-12">
          {/* Page Title */}
          <div className="mb-12 animate-fade-in">
            <h2 className="text-5xl font-display text-brand-text-primary mb-3 tracking-wide">Elite Agents Org Chart</h2>
            <p className="text-brand-text-secondary text-lg font-light max-w-3xl">Meet your AI-powered team. Each agent specializes in a specific business function, working together to automate and optimize your fitness coaching business.</p>
          </div>

          {/* Christian (Top Level) */}
          <div className="flex justify-center mb-16 animate-fade-in-delay-1">
            <div className="card-elite border-brand-red-primary/40 glow-medium max-w-2xl w-full">
              <div className="flex items-center gap-6 mb-5">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-red-primary to-brand-red-bright flex items-center justify-center glow-strong transform hover:scale-105 transition-transform duration-300">
                  <span className="text-4xl">👑</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-display text-brand-text-primary tracking-wide">Christian Roach</h3>
                  <p className="text-brand-red-bright font-semibold text-lg mt-1">Business Owner / Head Coach</p>
                </div>
                <div className="hidden md:block text-right">
                  <span className="inline-flex items-center gap-2 card-elite py-2 px-4">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red-glow opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-red-bright"></span>
                    </span>
                    <span className="text-brand-text-secondary text-sm font-medium">Final Decision Maker</span>
                  </span>
                </div>
              </div>
              <p className="text-brand-text-secondary text-center mb-6 font-light">
                All agents ultimately report to Christian. Hermes escalates hot leads, sensitive issues, and strategic decisions directly.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="card-elite py-3 px-4 text-center">
                  <p className="text-brand-text-muted text-xs uppercase tracking-wider mb-1">Focus Areas</p>
                  <p className="text-brand-text-primary font-semibold text-sm">High-Ticket Closes</p>
                </div>
                <div className="card-elite py-3 px-4 text-center">
                  <p className="text-brand-text-muted text-xs uppercase tracking-wider mb-1">Weekly Revenue</p>
                  <p className="text-brand-red-bright font-bold text-lg">$4,280</p>
                </div>
                <div className="card-elite py-3 px-4 text-center">
                  <p className="text-brand-text-muted text-xs uppercase tracking-wider mb-1">Active Clients</p>
                  <p className="text-brand-text-primary font-semibold text-lg">42</p>
                </div>
                <div className="card-elite py-3 px-4 text-center">
                  <p className="text-brand-text-muted text-xs uppercase tracking-wider mb-1">PT Sessions</p>
                  <p className="text-brand-text-primary font-semibold text-lg">38/wk</p>
                </div>
              </div>
            </div>
          </div>

          {/* Connection Line */}
          <div className="flex justify-center mb-16">
            <div className="w-0.5 h-24 bg-gradient-to-b from-brand-red-primary via-brand-red-bright to-transparent opacity-60"></div>
          </div>

          {/* Hermes (Second Level - Central) */}
          <div className="flex justify-center mb-16 animate-fade-in-delay-2">
            <div className="card-elite border-brand-red-primary/40 glow-medium max-w-3xl w-full">
              <div className="flex items-center gap-6 mb-5">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-red-primary to-brand-red-bright flex items-center justify-center glow-strong transform hover:scale-105 transition-transform duration-300">
                  <span className="text-4xl">⚡</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-display text-brand-text-primary tracking-wide">Hermes</h3>
                  <p className="text-brand-red-bright font-semibold text-lg mt-1">Chief Intelligence Officer</p>
                </div>
                <div className="hidden md:block text-right">
                  <span className="inline-flex items-center gap-2 card-elite py-2 px-4 border-brand-red-primary/40">
                    <span className="text-brand-red-bright text-sm font-semibold">Central Command</span>
                  </span>
                </div>
              </div>
              <p className="text-brand-text-secondary text-center mb-6 font-light">
                The central AI brain of the business. Hermes handles every intelligent function: lead capture, client nurturing, marketing intelligence, scheduling, and coordinates all other specialized agents.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div className="card-elite py-3 px-4 text-center">
                  <p className="text-brand-text-muted text-xs uppercase tracking-wider mb-1">Leads Captured</p>
                  <p className="text-brand-red-bright font-bold text-2xl">67</p>
                </div>
                <div className="card-elite py-3 px-4 text-center">
                  <p className="text-brand-text-muted text-xs uppercase tracking-wider mb-1">Response Time</p>
                  <p className="text-brand-text-primary font-semibold text-lg">&lt;5 min</p>
                </div>
                <div className="card-elite py-3 px-4 text-center">
                  <p className="text-brand-text-muted text-xs uppercase tracking-wider mb-1">Close Rate</p>
                  <p className="text-brand-text-primary font-semibold text-lg">60%+</p>
                </div>
                <div className="card-elite py-3 px-4 text-center">
                  <p className="text-brand-text-muted text-xs uppercase tracking-wider mb-1">Uptime</p>
                  <p className="text-brand-text-primary font-semibold text-lg">24/7</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-center pt-4 border-t border-brand-red-primary/10">
                <span className="card-elite py-2 px-4 text-sm">📧 Lead Capture</span>
                <span className="card-elite py-2 px-4 text-sm">📊 Marketing Intelligence</span>
                <span className="card-elite py-2 px-4 text-sm">💬 Client Nurture</span>
                <span className="card-elite py-2 px-4 text-sm">📅 Scheduling</span>
                <span className="card-elite py-2 px-4 text-sm">🎯 Objection Handling</span>
                <span className="card-elite py-2 px-4 text-sm">📝 Content Generation</span>
              </div>
            </div>
          </div>

          {/* Connection Line */}
          <div className="flex justify-center mb-16">
            <div className="w-0.5 h-24 bg-gradient-to-b from-brand-red-primary via-brand-red-bright to-transparent opacity-60"></div>
          </div>

          {/* Third Level - All Other Agents Grid */}
          <div className="mb-16">
            <h3 className="text-3xl font-display text-brand-text-primary text-center mb-8 tracking-wide animate-fade-in">Specialized Agent Network</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agents.filter(a => a.name !== 'Hermes').map((agent, index) => (
                <div 
                  key={agent.name} 
                  className="card-elite group hover:glow-medium transition-all duration-300 animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${agent.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {agent.emoji}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display text-brand-text-primary tracking-wide">{agent.name}</h3>
                      <p className="text-brand-red-bright text-sm font-semibold">{agent.role}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1.5 card-elite py-1.5 px-3 text-xs">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-brand-text-secondary">{agent.status}</span>
                      </span>
                    </div>
                  </div>
                  <p className="text-brand-text-secondary text-sm mb-5 font-light leading-relaxed">{agent.description}</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4 pb-4 border-b border-brand-red-primary/10">
                    {Object.entries(agent.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <p className="text-brand-text-muted text-xs uppercase tracking-wider mb-1">{key}</p>
                        <p className="text-brand-text-primary font-bold text-sm">{value}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <p className="text-brand-text-muted uppercase tracking-wider mb-1">Reports To</p>
                      <p className="text-brand-text-primary font-medium">{agent.reports}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-brand-text-muted uppercase tracking-wider mb-1">Channel</p>
                      <span className="card-elite py-1.5 px-3 text-brand-text-secondary font-mono">{agent.channel}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Communication Flow Diagram */}
          <div className="card-elite animate-fade-in-delay-3">
            <div className="mb-8">
              <h3 className="text-3xl font-display text-brand-text-primary tracking-wide">Communication Flow</h3>
              <p className="text-brand-text-secondary text-sm mt-2 font-light">See how leads and tasks flow through your AI organization</p>
            </div>
            <div className="space-y-5">
              {/* Flow Item 1 */}
              <div className="group p-6 bg-brand-elevated/50 rounded-xl border border-brand-red-primary/10 hover:border-brand-red-primary/30 transition-all duration-300">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-red-primary to-brand-red-bright flex items-center justify-center text-brand-text-primary font-bold font-display text-lg group-hover:scale-110 transition-transform">1</div>
                  <div className="flex-1">
                    <p className="text-brand-text-primary font-semibold text-lg">Lead Inquiry Arrives</p>
                    <p className="text-brand-text-secondary text-sm mt-0.5">PAR-Q form submission, Gmail inquiry, Instagram DM</p>
                  </div>
                  <div className="text-brand-red-bright font-display text-3xl">→</div>
                  <div className="w-40 text-center card-elite py-3 px-4">
                    <p className="text-brand-text-primary font-bold">Hermes</p>
                    <p className="text-brand-text-secondary text-xs mt-0.5">Capture & Qualify</p>
                  </div>
                </div>
              </div>

              {/* Flow Item 2 */}
              <div className="group p-6 bg-brand-elevated/50 rounded-xl border border-brand-red-primary/10 hover:border-brand-red-primary/30 transition-all duration-300">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-red-primary to-brand-red-bright flex items-center justify-center text-brand-text-primary font-bold font-display text-lg group-hover:scale-110 transition-transform">2</div>
                  <div className="flex-1">
                    <p className="text-brand-text-primary font-semibold text-lg">Hot Lead Detected</p>
                    <p className="text-brand-text-secondary text-sm mt-0.5">Score 70+, phone number present, budget confirmed</p>
                  </div>
                  <div className="text-brand-red-bright font-display text-3xl">→</div>
                  <div className="w-40 text-center card-elite py-3 px-4">
                    <p className="text-brand-text-primary font-bold">Kai Φ</p>
                    <p className="text-brand-text-secondary text-xs mt-0.5">Instant Alert</p>
                  </div>
                </div>
              </div>

              {/* Flow Item 3 */}
              <div className="group p-6 bg-brand-elevated/50 rounded-xl border border-brand-red-primary/10 hover:border-brand-red-primary/30 transition-all duration-300">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-red-primary to-brand-red-bright flex items-center justify-center text-brand-text-primary font-bold font-display text-lg group-hover:scale-110 transition-transform">3</div>
                  <div className="flex-1">
                    <p className="text-brand-text-primary font-semibold text-lg">Content Creation Needed</p>
                    <p className="text-brand-text-secondary text-sm mt-0.5">Instagram post, caption, visual asset required</p>
                  </div>
                  <div className="text-brand-red-bright font-display text-3xl">→</div>
                  <div className="w-40 text-center card-elite py-3 px-4">
                    <p className="text-brand-text-primary font-bold">Mike Φ → Luna Φ</p>
                    <p className="text-brand-text-secondary text-xs mt-0.5">Create & Schedule</p>
                  </div>
                </div>
              </div>

              {/* Flow Item 4 */}
              <div className="group p-6 bg-brand-elevated/50 rounded-xl border border-brand-red-primary/10 hover:border-brand-red-primary/30 transition-all duration-300">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-red-primary to-brand-red-bright flex items-center justify-center text-brand-text-primary font-bold font-display text-lg group-hover:scale-110 transition-transform">4</div>
                  <div className="flex-1">
                    <p className="text-brand-text-primary font-semibold text-lg">Client Check-in Due</p>
                    <p className="text-brand-text-secondary text-sm mt-0.5">5+ days without contact, retention risk</p>
                  </div>
                  <div className="text-brand-red-bright font-display text-3xl">→</div>
                  <div className="w-40 text-center card-elite py-3 px-4">
                    <p className="text-brand-text-primary font-bold">Ruby Φ</p>
                    <p className="text-brand-text-secondary text-xs mt-0.5">Retention Outreach</p>
                  </div>
                </div>
              </div>

              {/* Flow Item 5 */}
              <div className="group p-6 bg-brand-elevated/50 rounded-xl border border-brand-red-primary/10 hover:border-brand-red-primary/30 transition-all duration-300">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-red-primary to-brand-red-bright flex items-center justify-center text-brand-text-primary font-bold font-display text-lg group-hover:scale-110 transition-transform">5</div>
                  <div className="flex-1">
                    <p className="text-brand-text-primary font-semibold text-lg">Ready to Purchase</p>
                    <p className="text-brand-text-secondary text-sm mt-0.5">Lead qualified, objections handled, budget confirmed</p>
                  </div>
                  <div className="text-brand-red-bright font-display text-3xl">→</div>
                  <div className="w-40 text-center card-elite py-3 px-4 border-brand-red-primary/40 glow-soft">
                    <p className="text-brand-text-primary font-bold">Christian</p>
                    <p className="text-brand-text-secondary text-xs mt-0.5">Final Close</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t border-brand-red-primary/10 py-8 bg-brand-deep/30 backdrop-blur-xl mt-12">
          <div className="container mx-auto px-6 text-center">
            <p className="text-brand-text-secondary text-sm font-medium">Elite Performance AI Dashboard • Christian Roach Fitness Coaching</p>
            <p className="text-brand-text-muted text-xs mt-3 flex items-center justify-center gap-2">
              Powered by OpenClaw
              <span className="text-brand-red-bright animate-pulse-slow">⚡</span>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
