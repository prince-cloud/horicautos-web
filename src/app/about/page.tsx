import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Ship, Search, ShieldCheck, KeyRound, Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Horic Autos imports and sells premium vehicles with transparency and care. Learn our story and how we work.",
};

const steps = [
  { icon: Search, title: "Source", body: "Tell us your dream car and budget. We scour trusted global markets to find the best match." },
  { icon: Ship, title: "Import", body: "We handle shipping, clearing and documentation end-to-end, with full transparency on cost." },
  { icon: ShieldCheck, title: "Inspect", body: "On arrival, every car is mechanically inspected and detailed to showroom standard." },
  { icon: KeyRound, title: "Deliver", body: "We complete registration and hand over the keys — ready for the road." },
];

export default function AboutPage() {
  return (
    <div className="pt-28">
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-horic">
                About Horic Autos
              </p>
              <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
                Built on trust, driven by passion
              </h1>
              <p className="mt-5 text-white/70">
                Horic Autos began with a simple belief: buying an imported car
                should feel exciting, not risky. What started as one
                businessman&apos;s passion for sourcing exceptional vehicles has
                grown into a dedicated import-and-sales service for drivers who
                want quality without the guesswork.
              </p>
              <p className="mt-4 text-white/70">
                We personally source, import and inspect every car we sell — and
                we&apos;re proud to be opening our flagship showroom in{" "}
                {site.showroom.address} soon.
              </p>
              <div className="mt-8 flex gap-3">
                <Link
                  href="/inventory"
                  className="rounded-full bg-horic px-6 py-3 text-sm font-semibold text-white hover:bg-horic-dark"
                >
                  Browse Cars
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=80&w=1600"
                alt="A premium car sourced by Horic Autos"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="mt-24 border-y border-white/10 bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">How we work</h2>
            <p className="mt-3 max-w-xl text-white/60">
              Four clear steps from your first message to your keys in hand.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-background p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-horic/10 text-horic">
                      <s.icon size={24} />
                    </div>
                    <span className="text-4xl font-black text-white/10">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-4xl px-5 py-24 text-center lg:px-8">
        <Reveal>
          <Quote className="mx-auto text-horic" size={40} />
          <p className="mt-6 text-2xl font-semibold leading-snug sm:text-3xl">
            &ldquo;Every car we deliver carries my name. That&apos;s why each one
            is sourced and inspected like it&apos;s my own.&rdquo;
          </p>
          <p className="mt-6 text-sm uppercase tracking-widest text-white/50">
            — Horic Autos
          </p>
        </Reveal>
      </section>
    </div>
  );
}
