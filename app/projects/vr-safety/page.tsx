// import Image from 'next/image'
// import Link from 'next/link'

// export default function VRSafetyTrainingPage() {
//   return (
//     <main className="min-h-screen bg-background">
//       <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">

//         <Link
//           href="/#work"
//           className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
//         >
//           ← Back to projects
//         </Link>

//         <header className="mt-12 max-w-3xl">
//           <p className="font-mono text-sm text-muted-foreground">
//             Interaction Design · 2025
//           </p>

//           <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
//             VR Safety Training
//           </h1>

//           <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
//             A virtual reality safety-training application developed for
//             immersive hazard awareness and interaction across multiple
//             training environments.
//           </p>

//           <div className="mt-6 flex flex-wrap gap-2">
//             {['Unity', 'C#', 'VR', 'Oculus Quest 2'].map((tag) => (
//               <span
//                 key={tag}
//                 className="rounded border border-border px-3 py-1.5 font-mono text-xs text-foreground/80"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </header>

//         <section className="mt-12">
//           <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border">
//             <Image
//               src="/projects/Hazard.png"
//               alt="VR safety training hazard environment"
//               fill
//               priority
//               className="object-cover"
//             />
//           </div>
//         </section>

//         <section className="mt-20 grid gap-10 md:grid-cols-[1fr_2fr]">
//           <div>
//             <p className="font-mono text-sm text-muted-foreground">
//               01 / Overview
//             </p>

//             <h2 className="mt-2 text-3xl font-semibold">
//               A multi-level VR training experience
//             </h2>
//           </div>

//           <div className="leading-relaxed text-muted-foreground">
//             <p>
//               The project transformed a safety-training concept into a VR
//               experience with multiple rooms, hazards and interaction
//               scenarios.
//             </p>

//             <p className="mt-4">
//               The final prototype included six training environments, a lobby,
//               level navigation, room transitions and interactive hazards.
//             </p>
//           </div>
//         </section>

//         <section className="mt-20">
//           <p className="font-mono text-sm text-muted-foreground">
//             02 / Experience
//           </p>

//           <h2 className="mt-2 text-3xl font-semibold">
//             Training environments
//           </h2>

//           <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
//             The application was structured around multiple training levels,
//             each representing a different working environment.
//           </p>

//           <div className="relative mt-8 aspect-video overflow-hidden rounded-xl border border-border">
//             <Image
//               src="/projects/Rooms.png"
//               alt="Overview of the VR training environments"
//               fill
//               className="object-contain bg-background"
//             />
//           </div>
//         </section>

//         <section className="mt-20">
//           <p className="font-mono text-sm text-muted-foreground">
//             03 / Navigation
//           </p>

//           <h2 className="mt-2 text-3xl font-semibold">
//             Navigation and progress
//           </h2>

//           <div className="mt-8 grid gap-6 md:grid-cols-2">

//             <div className="overflow-hidden rounded-xl border border-border">
//               <div className="relative aspect-video">
//                 <Image
//                   src="/projects/Portal.png"
//                   alt="Portal used for VR room transitions"
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               <div className="p-6">
//                 <h3 className="font-semibold">Room transitions</h3>

//                 <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
//                   Portal-based navigation allowed users to move between
//                   different room variants within the training experience.
//                 </p>
//               </div>
//             </div>

//             <div className="overflow-hidden rounded-xl border border-border">
//               <div className="relative aspect-video">
//                 <Image
//                   src="/projects/Level.png"
//                   alt="VR level overview and progress display"
//                   fill
//                   className="object-contain bg-background"
//                 />
//               </div>

//               <div className="p-6">
//                 <h3 className="font-semibold">Level overview</h3>

//                 <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
//                   The level overview provides navigation through the training
//                   environments and keeps track of the user's progress.
//                 </p>
//               </div>
//             </div>

//           </div>
//         </section>

//         <section className="mt-20">
//           <p className="font-mono text-sm text-muted-foreground">
//             04 / Environment
//           </p>

//           <h2 className="mt-2 text-3xl font-semibold">
//             Interactive training environment
//           </h2>

//           <div className="relative mt-8 aspect-video overflow-hidden rounded-xl border border-border">
//             <Image
//               src="/projects/Manufacturing.png"
//               alt="VR manufacturing training environment"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </section>

//         <section className="mt-20 grid gap-10 md:grid-cols-[1fr_2fr]">
//           <div>
//             <p className="font-mono text-sm text-muted-foreground">
//               05 / Contribution
//             </p>

//             <h2 className="mt-2 text-3xl font-semibold">
//               Technical implementation
//             </h2>
//           </div>

//           <ul className="space-y-4 text-muted-foreground">
//             <li>
//               • Developed interaction flows across multiple VR training rooms.
//             </li>

//             <li>
//               • Implemented hazard interactions using Oculus Quest 2
//               capabilities.
//             </li>

//             <li>
//               • Supported reusable hazard placement across multiple rooms.
//             </li>

//             <li>
//               • Implemented room transitions and preserved room state when
//               changing levels.
//             </li>

//             <li>
//               • Added configurable room and hazard setups.
//             </li>
//           </ul>
//         </section>

//         <div className="mt-20 border-t border-border pt-8">
//           <Link
//             href="/#work"
//             className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
//           >
//             ← Back to selected projects
//           </Link>
//         </div>

//       </div>
//     </main>
//   )
// }
import Image from 'next/image'
import Link from 'next/link'

const TAGS = ['Unity', 'C#', 'VR', 'Oculus Quest 2']

export default function VRSafetyTrainingPage() {
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
            INTERACTION DESIGN · 2025
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            VR Safety Training
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Turning a safety-training concept into an interactive VR
            experience with multiple environments, hazards, navigation and
            reusable interactions.
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
              src="/projects/Hazard.png"
              alt="VR safety training hazard environment"
              fill
              priority
              className="object-cover"
            />
          </div>

          <p className="mt-3 font-mono text-xs text-muted-foreground">
            VR Behavioral Safety Training · Oculus Quest 2
          </p>
        </section>

        {/* Project facts */}
        <section className="mt-16 grid border-y border-border md:grid-cols-3">
          <div className="border-b border-border py-6 md:border-b-0 md:border-r md:pr-8">
            <p className="font-mono text-xs text-muted-foreground">
              PLATFORM
            </p>
            <p className="mt-2 font-medium">Oculus Quest 2</p>
          </div>

          <div className="border-b border-border py-6 md:border-b-0 md:border-r md:px-8">
            <p className="font-mono text-xs text-muted-foreground">
              TECHNOLOGY
            </p>
            <p className="mt-2 font-medium">Unity · C#</p>
          </div>

          <div className="py-6 md:pl-8">
            <p className="font-mono text-xs text-muted-foreground">
              SCOPE
            </p>
            <p className="mt-2 font-medium">6 training levels</p>
          </div>
        </section>

        {/* 01 Experience */}
        <section className="mt-24">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-mono text-sm text-muted-foreground">
                01 / EXPERIENCE
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Six environments. One connected training experience.
              </h2>
            </div>

            <div className="max-w-2xl text-muted-foreground">
              <p className="leading-relaxed">
                The finished prototype was structured around six training
                levels covering different working environments, together with
                a lobby and navigation system.
              </p>

              <p className="mt-4 leading-relaxed">
                The environments included Office, Manufacturing, Logistics,
                Assembly, Maintenance and Electrical Safety.
              </p>
            </div>
          </div>

          <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl border border-border">
            <Image
              src="/projects/Rooms.png"
              alt="Overview of the VR safety training environments"
              fill
              className="object-contain bg-background"
            />
          </div>
        </section>

        {/* 02 Navigation */}
        <section className="mt-24">
          <div className="max-w-2xl">
            <p className="font-mono text-sm text-muted-foreground">
              02 / NAVIGATION
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Navigation and progress
            </h2>

            <p className="mt-5 leading-relaxed text-muted-foreground">
              Navigation was designed around room transitions and a level
              overview that helps users keep track of their current position
              and progress through the training experience.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {/* Portal */}
            <article className="overflow-hidden rounded-2xl border border-border bg-card/30">
              <div className="relative aspect-video">
                <Image
                  src="/projects/Portal.png"
                  alt="Portal used for navigation between VR room variants"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 md:p-7">
                <p className="font-mono text-xs text-muted-foreground">
                  ROOM TRANSITIONS
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  Portal-based navigation
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Portals allowed users to switch between different variants
                  of a training level.
                </p>
              </div>
            </article>

            {/* Level */}
            <article className="overflow-hidden rounded-2xl border border-border bg-card/30">
              <div className="relative aspect-video">
                <Image
                  src="/projects/Level.png"
                  alt="Level overview showing the VR training progression"
                  fill
                  className="object-contain bg-background"
                />
              </div>

              <div className="p-6 md:p-7">
                <p className="font-mono text-xs text-muted-foreground">
                  PROGRESS
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  Level overview
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  The level overview keeps track of the user's position and
                  progress across the training environments.
                </p>
              </div>
            </article>

          </div>
        </section>

        {/* 03 Interaction */}
        <section className="mt-24">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-mono text-sm text-muted-foreground">
                03 / INTERACTION
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Making hazards interactive
              </h2>
            </div>

            <div className="max-w-2xl text-muted-foreground">
              <p className="leading-relaxed">
                The interaction system was adapted for Oculus Quest 2,
                replacing the earlier focus-and-pinch approach with different
                interaction types for hazards.
              </p>

              <p className="mt-4 leading-relaxed">
                Hazards could also be reused across multiple rooms, making it
                easier to add, remove and reposition them without manually
                redesigning each environment.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="relative aspect-video overflow-hidden rounded-2xl border border-border">
              <Image
                src="/projects/Hazard.png"
                alt="Interactive hazard in the VR safety training environment"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-video overflow-hidden rounded-2xl border border-border">
              <Image
                src="/projects/Manufacturing.png"
                alt="VR manufacturing training environment"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </section>

        {/* 04 Implementation */}
        <section className="mt-24">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-mono text-sm text-muted-foreground">
                04 / IMPLEMENTATION
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Technical implementation
              </h2>
            </div>

            <div>
              <ul className="divide-y divide-border border-y border-border">
                <li className="py-5">
                  <p className="font-medium">
                    Multi-level VR structure
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Six training environments connected through a structured
                    navigation system.
                  </p>
                </li>

                <li className="py-5">
                  <p className="font-medium">
                    Reusable hazard interactions
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Hazards could be placed across multiple rooms without
                    manually rebuilding each environment.
                  </p>
                </li>

                <li className="py-5">
                  <p className="font-medium">
                    Room transitions
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Users could move between levels while room state was
                    preserved during transitions.
                  </p>
                </li>

                <li className="py-5">
                  <p className="font-medium">
                    Configurable environments
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Room configurations and additional hazards could be
                    customized and saved.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="mt-24 border-t border-border pt-10">
          <p className="font-mono text-xs text-muted-foreground">
            VR SAFETY TRAINING · 2025
          </p>

          <h2 className="mt-3 text-2xl font-semibold">
            A finished VR behavioral safety-training prototype.
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
