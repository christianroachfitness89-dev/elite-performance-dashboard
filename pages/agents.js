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
      status: 'Active'
    },
    {
      name: 'Luna Φ',
      emoji: '🌙',
      role: 'Social Media Manager',
      channel: '#claude',
      color: 'from-purple-500 to-purple-600',
      description: 'Instagram captions, content scheduling, engagement',
      reports: 'Hermes → Mike',
      status: 'Active'
    },
    {
      name: 'Nico Φ',
      emoji: '🎯',
      role: 'Operations Coordinator',
      channel: '#crew-hq',
      color: 'from-blue-500 to-blue-600',
      description: 'Task tracking, team coordination, workflow optimization',
      reports: 'Hermes',
      status: 'Active'
    },
    {
      name: 'Mike Φ',
      emoji: '📝',
      role: 'Content Director',
      channel: '#content-pipeline',
      color: 'from-brand-red-primary to-brand-red-bright',
      description: 'Content strategy, brand guidelines, visual direction',
      reports: 'Hermes',
      status: 'Active'
    },
    {
      name: 'F2F Φ',
      emoji: '🤝',
      role: 'Face-to-Face Outreach',
      channel: '#f2f-outreach',
      color: 'from-green-500 to-green-600',
      description: 'Gym floor engagement, member conversions, partnerships',
      reports: 'Hermes → Nico',
      status: 'Active'
    },
    {
      name: 'Kai Φ',
      emoji: '🎣',
      role: 'Lead Capture Specialist',
      channel: '#lead-alerts',
      color: 'from-brand-red-bright to-brand-red-glow',
      description: 'PAR-Q monitoring, hot lead alerts, follow-up sequences',
      reports: 'Hermes',
      status: 'Active'
    },
    {
      name: 'Ruby Φ',
      emoji: '💎',
      role: 'Client Success Manager',
      channel: '#crew-hq',
      color: 'from-pink-500 to-pink-600',
      description: 'Client check-ins, retention, satisfaction tracking',
      reports: 'Hermes → Nico',
      status: 'Active'
    },
    {
      name: 'Jax Φ',
      emoji: '✅',
      role: 'Task Management',
      channel: '#active-tasks',
      color: 'from-orange-500 to-orange-600',
      description: 'Task creation, deadline tracking, completion monitoring',
      reports: 'Nico',
      status: 'Active'
    },
    {
      name: 'Mark Φ',
      emoji: '🔧',
      role: 'Technical Operations',
      channel: '#cursor',
      color: 'from-cyan-500 to-cyan-600',
      description: 'Code reviews, system maintenance, technical debt',
      reports: 'Hermes',
      status: 'Active'
    }
  ];

  return (
    <>
      <Head>
        <title>Elite Agents - Org Chart</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-brand-deepest">
        <div className="bg-grain fixed inset-0 pointer-events-none z-0"></div>

        {/* Header */}
        <header className="relative z-10 border-b border-brand-red-primary/20 bg-brand-deep/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-red-primary to-brand-red-bright flex items-center justify-center glow-soft">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h1 className="text-3xl font-display tracking-wider text-gradient">Elite Performance AI</h1>
                  <p className="text-brand-text-secondary text-sm">Christian Roach Fitness - Command Center</p>
                </div>
              </Link>
              <nav className="flex items-center gap-4">
                <Link href="/" className="card-elite py-2 px-4 hover:border-brand-red-primary transition-all">
                  <span className="text-brand-text-secondary text-sm">Dashboard</span>
                </Link>
                <div className="card-elite py-2 px-4 border-brand-red-primary">
                  <span className="text-brand-red-bright font-semibold">Agents</span>
                </div>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 container mx-auto px-6 py-8">
          {/* Page Title */}
          <div className="mb-8">
            <h2 className="text-4xl font-display text-brand-text-primary mb-2">Elite Agents Org Chart</h2>
            <p className="text-brand-text-secondary text-lg">Communication flow and reporting structure</p>
          </div>

          {/* Christian (Top Level) */}
          <div className="flex justify-center mb-12">
            <div className="card-elite border-brand-red-primary glow-soft max-w-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-red-primary to-brand-red-bright flex items-center justify-center glow-strong">
                  <span className="text-3xl">👑</span>
                </div>
                <div>
                  <h3 className="text-2xl font-display text-brand-text-primary">Christian Roach</h3>
                  <p className="text-brand-red-bright font-semibold">Business Owner / Head Coach</p>
                </div>
              </div>
              <p className="text-brand-text-secondary text-center">All agents ultimately report to Christian</p>
            </div>
          </div>

          {/* Connection Line */}
          <div className="flex justify-center mb-12">
            <div className="w-1 h-16 bg-gradient-to-b from-brand-red-primary to-transparent"></div>
          </div>

          {/* Hermes (Second Level - Central) */}
          <div className="flex justify-center mb-12">
            <div className="card-elite border-brand-red-primary glow-soft max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-brand-red-primary to-brand-red-bright flex items-center justify-center glow-strong">
                  <span className="text-3xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-2xl font-display text-brand-text-primary">Hermes</h3>
                  <p className="text-brand-red-bright font-semibold">Chief Intelligence Officer</p>
                </div>
              </div>
              <p className="text-brand-text-secondary text-center mb-4">
                Central command - handles lead capture, client nurturing, marketing intelligence, and coordinates all other agents
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="card-elite py-1 px-3 text-sm">📧 Lead Capture</span>
                <span className="card-elite py-1 px-3 text-sm">📊 Marketing</span>
                <span className="card-elite py-1 px-3 text-sm">💬 Client Nurture</span>
                <span className="card-elite py-1 px-3 text-sm">📅 Scheduling</span>
              </div>
            </div>
          </div>

          {/* Connection Lines */}
          <div className="flex justify-center mb-12">
            <div className="w-1 h-16 bg-gradient-to-b from-brand-red-primary to-transparent"></div>
          </div>

          {/* Third Level - All Other Agents */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {agents.filter(a => a.name !== 'Hermes').map((agent) => (
              <div key={agent.name} className="card-elite">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${agent.color} flex items-center justify-center`}>
                    <span className="text-2xl">{agent.emoji}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display text-brand-text-primary">{agent.name}</h3>
                    <p className="text-brand-red-bright text-sm font-semibold">{agent.role}</p>
                  </div>
                </div>
                <p className="text-brand-text-secondary text-sm mb-3">{agent.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-brand-text-secondary">Reports: <span className="text-brand-text-primary">{agent.reports}</span></span>
                  <span className="card-elite py-1 px-2 text-brand-text-secondary">{agent.channel}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Communication Flow Diagram */}
          <div className="card-elite">
            <h3 className="text-2xl font-display text-brand-text-primary mb-6">Communication Flow</h3>
            <div className="space-y-4">
              {/* Flow Item */}
              <div className="flex items-center gap-4 p-4 bg-brand-elevated rounded border border-brand-red-primary/20">
                <div className="w-8 h-8 rounded bg-brand-red-primary flex items-center justify-center text-brand-text-primary font-bold">1</div>
                <div className="flex-1">
                  <p className="text-brand-text-primary font-semibold">Lead Inquiry Arrives</p>
                  <p className="text-brand-text-secondary text-sm">PAR-Q form, Gmail, Instagram DM</p>
                </div>
                <div className="text-brand-red-bright font-display text-xl">→</div>
                <div className="w-32 text-center">
                  <p className="text-brand-text-primary font-semibold">Hermes</p>
                  <p className="text-brand-text-secondary text-sm">Capture & Qualify</p>
                </div>
              </div>

              {/* Flow Item */}
              <div className="flex items-center gap-4 p-4 bg-brand-elevated rounded border border-brand-red-primary/20">
                <div className="w-8 h-8 rounded bg-brand-red-primary flex items-center justify-center text-brand-text-primary font-bold">2</div>
                <div className="flex-1">
                  <p className="text-brand-text-primary font-semibold">Hot Lead Detected</p>
                  <p className="text-brand-text-secondary text-sm">Score 70+, phone number present</p>
                </div>
                <div className="text-brand-red-bright font-display text-xl">→</div>
                <div className="w-32 text-center">
                  <p className="text-brand-text-primary font-semibold">Kai Φ</p>
                  <p className="text-brand-text-secondary text-sm">Instant Alert</p>
                </div>
              </div>

              {/* Flow Item */}
              <div className="flex items-center gap-4 p-4 bg-brand-elevated rounded border border-brand-red-primary/20">
                <div className="w-8 h-8 rounded bg-brand-red-primary flex items-center justify-center text-brand-text-primary font-bold">3</div>
                <div className="flex-1">
                  <p className="text-brand-text-primary font-semibold">Content Needed</p>
                  <p className="text-brand-text-secondary text-sm">Instagram post, caption, visual</p>
                </div>
                <div className="text-brand-red-bright font-display text-xl">→</div>
                <div className="w-32 text-center">
                  <p className="text-brand-text-primary font-semibold">Mike Φ → Luna Φ</p>
                  <p className="text-brand-text-secondary text-sm">Create & Schedule</p>
                </div>
              </div>

              {/* Flow Item */}
              <div className="flex items-center gap-4 p-4 bg-brand-elevated rounded border border-brand-red-primary/20">
                <div className="w-8 h-8 rounded bg-brand-red-primary flex items-center justify-center text-brand-text-primary font-bold">4</div>
                <div className="flex-1">
                  <p className="text-brand-text-primary font-semibold">Client Check-in Due</p>
                  <p className="text-brand-text-secondary text-sm">5+ days no contact</p>
                </div>
                <div className="text-brand-red-bright font-display text-xl">→</div>
                <div className="w-32 text-center">
                  <p className="text-brand-text-primary font-semibold">Ruby Φ</p>
                  <p className="text-brand-text-secondary text-sm">Retention Outreach</p>
                </div>
              </div>

              {/* Flow Item */}
              <div className="flex items-center gap-4 p-4 bg-brand-elevated rounded border border-brand-red-primary/20">
                <div className="w-8 h-8 rounded bg-brand-red-primary flex items-center justify-center text-brand-text-primary font-bold">5</div>
                <div className="flex-1">
                  <p className="text-brand-text-primary font-semibold">Ready to Purchase</p>
                  <p className="text-brand-text-secondary text-sm">Lead qualified, budget confirmed</p>
                </div>
                <div className="text-brand-red-bright font-display text-xl">→</div>
                <div className="w-32 text-center">
                  <p className="text-brand-text-primary font-semibold">Christian</p>
                  <p className="text-brand-text-secondary text-sm">Final Close</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t border-brand-red-primary/20 mt-12 py-6 bg-brand-deep/50">
          <div className="container mx-auto px-6 text-center text-brand-text-secondary text-sm">
            <p>Elite Performance AI Dashboard • Christian Roach Fitness Coaching</p>
            <p className="mt-2">Powered by OpenClaw • <span className="text-brand-red-bright">⚡</span></p>
          </div>
        </footer>
      </div>
    </>
  );
}
