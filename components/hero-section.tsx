import { Mail, ArrowUpRight } from 'lucide-react'

const FACTS = [
  { label: 'FOCUS', value: 'XR Systems' },
  { label: 'CORE STACK', value: 'Unity + C#' },
  { label: 'STRENGTH', value: '3D Visualization' },
  { label: 'DOMAIN', value: 'Technical Apps' },
]

export function HeroSection() {
  return (
    <section id="top" className="bg-grid">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
        <div>
          <p className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px] shadow-accent" />
            XR · AR · UNITY · VISUALIZATION
          </p>
          <h1 className="mt-6 bg-gradient-to-r from-accent via-foreground to-accent-2 bg-clip-text text-6xl font-bold tracking-tight text-balance text-transparent md:text-7xl">
            Rabiya Basri
          </h1>
          <p className="mt-6 max-w-md text-lg text-pretty text-foreground/90">
            Software engineer specializing in XR visualization and real-time 3D
            applications, with a focus on Unity and C#.
          </p>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            I build interactive tools for complex technical domains, including
            AR/VR visualization, data pipelines, runtime asset loading, and
            usability-focused development. Most of my recent work has been at
            Siemens Healthineers, along with hands-on VR training and deployment
            projects.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-mono text-sm text-accent-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              Contact me
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-foreground/40"
            >
              View projects
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/rabiya-basri-a4a38326b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center rounded-md border border-border px-3 py-2.5 font-mono text-sm font-semibold text-foreground transition-colors hover:border-foreground/40"
            >
              in
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-border">
          <img
            src="/images/rabiya.jpg"
            alt="Rabiya Basri"
            className="aspect-[4/5] w-full object-cover object-top"
          />
          <div className="grid grid-cols-2">
            {FACTS.map((fact, i) => (
              <div
                key={fact.label}
                className={`border-border p-5 ${i % 2 === 0 ? 'border-r' : ''} ${i < 2 ? 'border-b' : ''}`}
              >
                <p className="font-mono text-xs tracking-widest text-muted-foreground">
                  {fact.label}
                </p>
                <p className="mt-1 font-medium text-foreground">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
