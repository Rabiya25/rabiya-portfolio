import { ArrowUpRight } from 'lucide-react'

const PROJECTS = [
  {
    title: 'VR Safety Training',
    meta: 'Interaction Design · 2025',
    description:
      'Converted an AR safety concept into a VR training application and expanded interaction flows across multiple rooms for more complete training scenarios.',
    tags: ['Unity', 'VR', 'C#'],
  },
  {
    title: 'Kumo Library',
    meta: 'Cloud & DevOps · 2024',
    description:
      'Designed a microservices-based system with deployment workflows and CI/CD pipelines that reduced deployment errors by 40%.',
    tags: ['AWS', 'Terraform', 'Docker', 'CI/CD'],
  },
  {
    title: 'Soil Moisture Inspection Robot',
    meta: 'Embedded Systems · 2023',
    description:
      'Built a real-time prototype with 95% moisture detection accuracy that reduced inspection time by 50%.',
    tags: ['Embedded', 'Real-Time Control'],
  },
]

export function WorkSection() {
  return (
    <section id="work" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-sm text-muted-foreground">01 / Work</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Selected projects
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-muted-foreground md:text-right">
            A few projects that show how I approach interactive systems,
            deployment workflows, and real-time applications.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col bg-background p-8 transition-colors hover:bg-card"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-muted-foreground">
                    {project.meta}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
              </div>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded border border-border px-2.5 py-1 font-mono text-xs text-foreground/80"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
