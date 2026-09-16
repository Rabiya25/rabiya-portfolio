import Image from 'next/image'
import Link from 'next/link'

const TAGS = [
  'Embedded Systems',
  'C/C++',
  'Bluetooth',
  'Sensors',
  'Servo Motors',
]

export default function SoilInspectionPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">

        {/* Back */}
        <Link
          href="/#work"
          className="inline-flex font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to projects
        </Link>

        {/* Hero */}
        <header className="mt-14 max-w-4xl">
          <p className="font-mono text-sm text-muted-foreground">
            REALTIME SYSTEMS · WS23/24
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            Soil Moisture
            <br />
            Inspection Robot
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            A robotic prototype designed to measure soil moisture and transmit
            sensor data in real time, combining remote control, embedded
            sensing and a servo-driven inspection arm.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {TAGS.map((tag) => (
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
        <section className="mt-14">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border">
            <Image
              src="/projects/soil-robot-hero.png"
              alt="Soil moisture inspection robot prototype"
              fill
              priority
              className="object-cover"
            />
          </div>

          <p className="mt-3 font-mono text-xs text-muted-foreground">
            Soil Moisture Inspection Robot · Realtime Systems
          </p>
        </section>

        {/* Project facts */}
        <section className="mt-16 grid border-y border-border md:grid-cols-3">
          <div className="border-b border-border py-6 md:border-b-0 md:border-r md:pr-8">
            <p className="font-mono text-xs text-muted-foreground">
              PROJECT
            </p>
            <p className="mt-2 font-medium">
              Realtime Systems · WS23/24
            </p>
          </div>

          <div className="border-b border-border py-6 md:border-b-0 md:border-r md:px-8">
            <p className="font-mono text-xs text-muted-foreground">
              SYSTEM
            </p>
            <p className="mt-2 font-medium">
              Remote-controlled robot
            </p>
          </div>

          <div className="py-6 md:pl-8">
            <p className="font-mono text-xs text-muted-foreground">
              CORE
            </p>
            <p className="mt-2 font-medium">
              Soil moisture sensing
            </p>
          </div>
        </section>

        {/* 01 Concept */}
        <section className="mt-24">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-mono text-sm text-muted-foreground">
                01 / CONCEPT
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                From soil measurement to real-time data
              </h2>
            </div>

            <div className="max-w-2xl text-muted-foreground">
              <p className="leading-relaxed">
                The project explored the idea of a robot that could take soil
                measurements and provide farmers with real-time data.
              </p>

              <p className="mt-4 leading-relaxed">
                The prototype focused on demonstrating the core functionality
                of this concept while providing a basis for further design and
                feature iterations.
              </p>
            </div>
          </div>
        </section>

        {/* 02 System */}
        <section className="mt-24">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-mono text-sm text-muted-foreground">
                02 / SYSTEM
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                A mobile robot with an articulated sensor arm
              </h2>
            </div>

            <div className="max-w-2xl">
              <ul className="divide-y divide-border border-y border-border">
                <li className="py-5">
                  <p className="font-medium">
                    Remote control
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    The robot could be controlled from a phone through a
                    Bluetooth connection, including forward, backward, left
                    and right movement.
                  </p>
                </li>

                <li className="py-5">
                  <p className="font-medium">
                    Robot arm
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    A servo-driven arm moved the soil sensor up and down so it
                    could be positioned into the soil.
                  </p>
                </li>

                <li className="py-5">
                  <p className="font-medium">
                    Soil sensing
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    The soil moisture sensor measured different moisture
                    levels and transmitted the resulting value to the
                    connected device.
                  </p>
                </li>

                <li className="py-5">
                  <p className="font-medium">
                    Three servo motors
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Multiple servo motors were used to make the inspection arm
                    more flexible.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 03 Hardware */}
        <section className="mt-24">
          <div className="max-w-2xl">
            <p className="font-mono text-sm text-muted-foreground">
              03 / HARDWARE
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Hardware and custom components
            </h2>

            <p className="mt-5 leading-relaxed text-muted-foreground">
              The prototype combined off-the-shelf electronics with custom
              3D-printed components designed specifically for the robot arm.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border">
            <div className="relative aspect-video">
              <Image
                src="/projects/soil-components.png"
                alt="Components used in the soil moisture inspection robot"
                fill
                className="object-contain bg-background"
              />
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              'Soil moisture sensor',
              'Bluetooth module',
              'Servo motors',
              'Output module',
              'Connecting wires',
              'Custom 3D parts',
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-border px-4 py-3 font-mono text-xs text-muted-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* 04 Workflow */}
        <section className="mt-24">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-mono text-sm text-muted-foreground">
                04 / WORKFLOW
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                From first movement to final prototype
              </h2>
            </div>

            <div>
              <ol className="border-y border-border">
                {[
                  'Assemble the robot and test basic movement',
                  'Research and test the soil moisture sensor',
                  'Test the servo motors',
                  'Design the robot arm',
                  'Model custom parts with Fusion 360',
                  '3D print the arm components',
                  'Assemble the arm and attach it to the robot',
                  'Adjust arm angles and test the sensor',
                  'Program the final microcontroller code',
                ].map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-5 border-b border-border py-4 last:border-b-0"
                  >
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="text-sm text-muted-foreground">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 05 Prototype */}
        <section className="mt-24">
          <p className="font-mono text-sm text-muted-foreground">
            05 / PROTOTYPE
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            The finished prototype
          </h2>

          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            The prototype combines the mobile robot platform, Bluetooth
            control, sensor system and articulated arm into one working
            demonstration.
          </p>

          <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl border border-border">
            <Image
              src="/projects/soil-robot-showcase.png"
              alt="Finished soil moisture inspection robot prototype"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* 06 Challenges */}
        <section className="mt-24">
          <div className="grid gap-8 md:grid-cols-2">

            <div>
              <p className="font-mono text-sm text-muted-foreground">
                06 / CHALLENGES
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                What we learned from the prototype
              </h2>

              <p className="mt-5 leading-relaxed text-muted-foreground">
                Building the physical prototype exposed several mechanical
                and electrical limitations that would need to be addressed in
                a future iteration.
              </p>
            </div>

            <div>
              <ul className="divide-y divide-border border-y border-border">
                <li className="py-5">
                  <p className="font-medium">
                    Structural durability
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Some 3D-printed parts were breaking apart.
                  </p>
                </li>

                <li className="py-5">
                  <p className="font-medium">
                    Sensor insertion force
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    The arm could not provide enough force to insert the
                    sensor into hard soil.
                  </p>
                </li>

                <li className="py-5">
                  <p className="font-medium">
                    Servo stability
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    The servo motors experienced jitter when powered by the
                    battery.
                  </p>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* Future */}
        <section className="mt-16">
          <div className="rounded-2xl border border-border p-8 md:p-10">
            <p className="font-mono text-xs text-muted-foreground">
              NEXT ITERATION
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              Improving the sensing mechanism
            </h3>

            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Future ideas included reinforcing and redesigning the arm,
              introducing a vertical slider for direct sensor movement, and
              adding additional sensors to enable autonomous movement through
              a field.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="mt-24 border-t border-border pt-10">
          <p className="font-mono text-xs text-muted-foreground">
            SOIL MOISTURE INSPECTION ROBOT · WS23/24
          </p>

          <h2 className="mt-3 text-2xl font-semibold">
            A physical prototype connecting sensing, control and mechanical
            design.
          </h2>

          <Link
            href="/#work"
            className="mt-8 inline-flex font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to selected projects
          </Link>
        </section>

      </div>
    </main>
  )
}
