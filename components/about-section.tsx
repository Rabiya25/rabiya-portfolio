const EDUCATION = [
  {
    degree: 'M.Sc. Software Engineering',
    place: 'Hochschule Heilbronn, Germany',
  },
  {
    degree: 'Bachelor of Computer Applications',
    place: 'The Oxford College of Science, Bangalore',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
        <div>
          <p className="font-mono text-sm text-muted-foreground">02 / About</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Turning complex workflows into interactive 3D.
          </h2>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            I am currently completing an M.Sc. in Software Engineering at
            Hochschule Heilbronn. My work focuses on turning structured data and
            complex workflows into understandable, interactive 3D systems.
          </p>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            I am especially interested in XR applications that solve real
            problems in healthcare, training, visualization, and engineering. I
            like building tools where good interaction design and technical
            correctness both matter.
          </p>
        </div>

        <div className="lg:pt-14">
          <p className="font-mono text-xs tracking-widest text-muted-foreground">
            EDUCATION
          </p>
          <ul className="mt-6 space-y-6">
            {EDUCATION.map((item) => (
              <li key={item.degree} className="border-l border-border pl-5">
                <p className="font-medium text-foreground">{item.degree}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.place}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
