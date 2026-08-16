const EXPERIENCE = [
  {
    period: 'MAY 2026 TO AUG 2026',
    role: 'Working Student, Software Engineering',
    company: 'Siemens Healthineers',
    points: [
      'Engineered C#/.NET and Unity applications for interactive 3D visualization and engineering component management.',
      'Automated Collimator-Tube mapping with JSON persistence, runtime component association, and state management.',
      'Redesigned measurement-based filtering logic to improve application usability and engineering data visualization.',
      'Implemented and debugged model loading, dynamic selection, configuration management, and runtime state handling.',
    ],
    stack: 'C# · .NET · Unity · JSON',
  },
  {
    period: 'OCT 2025 TO MAR 2026',
    role: "Master's Thesis: Industrial XR & 3D Visualization",
    company: 'Siemens Healthineers',
    points: [
      'Developed a Unity/C# industrial visualization framework for interactive radiation leakage analysis.',
      'Integrated engineering measurement data, CAD-derived 3D models, GLB assets, and JSON into real-time 3D workflows.',
      'Implemented interactive filtering, threshold visualization, runtime asset loading, and 3D interaction.',
      'Integrated OpenXR, XR Interaction Toolkit, and Magic Leap 2 for immersive XR visualization.',
    ],
    stack: 'Unity · C# · OpenXR · Magic Leap 2',
  },
  {
    period: 'JAN 2025 TO AUG 2025',
    role: 'Working Student, Software Engineering',
    company: 'Siemens Healthineers',
    points: [
      'Optimized Unity data-processing workflows, reducing execution time from 1-5 minutes to 1-2 seconds.',
      'Developed reusable Unity/C# components for interactive engineering visualization and Digital Twin workflows.',
      'Integrated CAD-derived 3D models, GLB assets, and engineering datasets into Unity applications.',
      'Supported debugging, testing, validation, performance optimization, and deployment across software releases.',
    ],
    stack: 'Unity · C# · GLB · Performance Optimization',
  },
  {
    period: 'JUN 2024 TO NOV 2024',
    role: 'Software Engineering Intern',
    company: 'Siemens Healthineers',
    points: [
      'Developed Unity/C# industrial AR applications for interactive 3D engineering visualization.',
      'Implemented object interaction, manipulation, UI systems, and runtime 3D workflows.',
      'Integrated and optimized 3D assets and rendering for improved application performance.',
      'Collaborated using Git and Visual Studio to develop, debug, and validate software features.',
    ],
    stack: 'Unity · C# · AR · Git',
  },
  {
    period: 'OCT 2023 TO FEB 2024',
    role: 'Student Assistant, Data Mining',
    company: 'Technical University of Munich',
    points: [
      'Developed Python automation workflows for large-scale data collection using Selenium and BeautifulSoup.',
      'Processed and analyzed structured datasets using pandas, Jupyter, and Google Colab.',
      'Automated repetitive data mining and processing workflows to improve research efficiency.',
    ],
    stack: 'Python · Selenium · pandas · BeautifulSoup',
  },
  {
    period: 'FEB 2021 TO FEB 2023',
    role: 'Platform Experience Associate',
    company: 'Accenture',
    points: [
      'Analyzed high-volume platform data and investigated complex operational issues.',
      'Applied structured quality assurance, platform safety, and issue-resolution processes.',
      'Improved workflow efficiency through process optimization and collaborated with international teams.',
    ],
    stack: 'Data Analysis · QA · Platform Safety · Process Optimization',
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="font-mono text-sm text-muted-foreground">
          03 / Experience
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-balance md:text-5xl">
          Where I&apos;ve worked
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCE.map((job) => (
            <article
              key={`${job.role}-${job.period}`}
              className="flex flex-col rounded-xl border border-border bg-card/40 p-6"
            >
              <p className="font-mono text-xs tracking-widest text-muted-foreground">
                {job.period}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {job.role}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {job.company}
              </p>
              <ul className="mt-5 space-y-3">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-border pt-4 font-mono text-xs text-muted-foreground">
                {job.stack}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
