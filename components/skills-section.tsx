const SKILL_GROUPS = [
  {
    title: 'XR & 3D',
    items: [
      'Unity',
      'OpenXR',
      'XR Interaction Toolkit',
      'Magic Leap 2',
      'AR/VR Development',
      'Real-Time 3D',
      '3D Visualization',
      'Digital Twin',
    ],
  },
  {
    title: 'LANGUAGES',
    items: ['C#', '.NET', 'Python'],
  },
  {
    title: 'DATA & AUTOMATION',
    items: [
      'pandas',
      'Selenium',
      'BeautifulSoup',
      'CSV / JSON Pipelines',
      'Jupyter / Google Colab',
    ],
  },
  {
    title: '3D ASSETS & CONTENT',
    items: [
      'GLB / glTF',
      'CAD Integration',
      'Runtime Asset Loading',
      'Interaction Design',
    ],
  },
  {
    title: 'TOOLING & PRACTICES',
    items: ['Git', 'Visual Studio', 'Usability', 'QA & Process Optimization'],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="font-mono text-sm text-muted-foreground">04 / Skills</p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-balance md:text-5xl">
          Tools I reach for
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-xs tracking-widest text-muted-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-foreground"
                  >
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
