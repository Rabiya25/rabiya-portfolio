import { Mail, ArrowUpRight, MapPin } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="font-mono text-sm text-muted-foreground">05 / Contact</p>
        <h2 className="mt-3 text-5xl font-bold tracking-tight text-balance md:text-6xl">
          Get in touch.
        </h2>
        <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
          I&apos;m looking for software development, XR, Unity, and real-time 3D
          roles. If you want to talk about a project or a role, send me a
          message.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="mailto:rabiyabasri2025@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-mono text-sm text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" />
            rabiyabasri2025@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/rabiya-basri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-foreground/40"
          >
            LinkedIn
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-8 flex items-center gap-2 font-mono text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          Bayreuth, Germany
        </p>
      </div>
    </section>
  )
}
