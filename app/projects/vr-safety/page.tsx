
import Image from 'next/image'
import Link from 'next/link'

export default function VRSafetyTrainingPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">

        {/* Back */}
        <Link
          href="/#work"
          className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to projects
        </Link>

        {/* Header */}
        <header className="mt-12 max-w-3xl">
          <p className="font-mono text-sm text-muted-foreground">
            Interaction Design · 2025
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
            VR Safety Training
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A virtual reality safety-training application developed for
            immersive hazard awareness and interaction across multiple
            training environments.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {['Unity', 'C#', 'VR', 'Oculus Quest 2'].map((tag) => (
              <span
                key={tag}
                className="rounded border border-border px-3 py-1.5 font-mono text-xs text-foreground/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Hero image */}
        <section className="mt-12">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border">
            <Image
              src="/projects/Hazard.png"
              alt="VR safety training hazard environment"
              fill
              priority
              className="object-cover"
            />
          </div>
        </section>

        {/* Overview */}
        <section className="mt-20 grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="font-mono text-sm text-muted-foreground">
              01 / Overview
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              A multi-level VR training experience
            </h2>
          </div>

          <div className="text-muted-foreground leading-relaxed">
            <p>
              The project transformed an existing safety-training concept into
              a VR experience with multiple rooms, hazards and interaction
              scenarios.
            </p>

            <p className="mt-4">
              The final prototype included six training environments, a lobby,
              level navigation, room transitions and interactive hazards.
            </p>
          </div>
        </section>

        {/* Rooms */}
        <section className="mt-20">
          <p className="font-mono text-sm text-muted-foreground">
            02 / Experience
          </p>

          <h2 className="mt-2 text-3xl font-semibold">
            Training environments
          </h2>

          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            The application was structured around multiple training levels,
            each representing a different working environment.
          </p>

          <div className="relative mt-8 aspect-video overflow-hidden rounded-xl border border-border">
            <Image
              src="/projects/Rooms.png"
              alt="Overview of the VR training environments"
              fill
              className="object-contain bg-background"
            />
          </div>
        </section>

        {/* Navigation */}
        <section className="mt-20">
          <p className="font-mono text-sm text-muted-foreground">
            03 / Navigation
          </p>

          <h2 className="mt-2 text-3xl font-semibold">
            Navigation and progress
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-border">
              <div className="relative aspect-video">
                <Image
                  src="/projects/Portal.png"
                  alt="Portal used for VR room transitions"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="font-semibold">Room transitions</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Portal-based navigation allowed users to move between
                  different room variants within the training experience.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border">
              <div className="relative aspect-video">
                <Image
                  src="/projects/Level.png"
                  alt="VR level overview and progress display"
                  fill
                  className="object-contain bg-background"
                />
              </div>

              <div className="p-6">
                <h3 className="font-semibold">Level overview</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  The level overview provides navigation through the training
                  environments and keeps track of the user's progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Environment example */}
        <section className="mt-20">
          <p className="font-mono text-sm text-muted-foreground">
            04 / Environment
          </p>

          <h2 className="mt-2 text-3xl font-semibold">
            Interactive training environment
          </h2>

          <div className="mt-8 relative aspect-video overflow-hidden rounded-xl border border-border">
            <Image
              src="/projects/Manufacturing.png"
              alt="VR manufacturing training environment"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Contribution */}
        <section className="mt-20 grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="font-mono text-sm text-muted-foreground">
              05 / Contribution
            </p>

            <h2 className="mt-2 text-3xl font-semibold">
              Technical implementation
            </h2>
          </div>

          <ul className="space-y-4 text-muted-foreground">
            <li>
              • Developed interaction flows across multiple VR training rooms.
            </li>
            <li>
              • Implemented hazard interactions using Oculus Quest 2
              capabilities.
            </li>
            <li>
              • Supported reusable hazard placement across multiple rooms.
            </li>
            <li>
              • Implemented room transitions and preserved room state when
              changing levels.
            </li>
            <li>
              • Added configurable room and hazard setups.
            </li>
          </ul>
        </section>

        {/* Footer */}
        <div className="mt-20 border-t border-border pt-8">
          <Link
            href="/#work"
            className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to selected projects
          </Link>
        </div>

      </div>
    </main>
  )
}
