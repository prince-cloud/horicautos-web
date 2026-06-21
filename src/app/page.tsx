import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Globe2, Tag, Headset, ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { CarCard } from "@/components/CarCard";
import { BrandMarquee } from "@/components/BrandMarquee";
import { featuredCars } from "@/lib/cars";
import { site } from "@/lib/site";

const valueProps = [
  {
    icon: Globe2,
    title: "Global Sourcing",
    body: "We hunt down the right car from trusted markets worldwide and handle the entire import process for you.",
  },
  {
    icon: ShieldCheck,
    title: "Inspected & Verified",
    body: "Every vehicle is mechanically inspected and history-checked before it reaches you. No surprises.",
  },
  {
    icon: Tag,
    title: "Transparent Pricing",
    body: "Clear, all-in pricing with no hidden fees. You know exactly what you pay and what you get.",
  },
  {
    icon: Headset,
    title: "Concierge Service",
    body: "From first message to delivery, one dedicated team guides you over WhatsApp, call, or in person.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Brands marquee */}
      <section className="border-b border-white/10 py-12">
        <Reveal>
          <p className="text-center text-sm font-medium uppercase tracking-widest text-white/40">
            Brands we source
          </p>
        </Reveal>
        <div className="mt-8">
          <BrandMarquee />
        </div>
      </section>

      {/* Featured inventory */}
      <section className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-horic">
                Featured
              </p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                This week&apos;s standout cars
              </h2>
            </div>
            <Link
              href="/inventory"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
            >
              View full inventory
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCars.map((car, i) => (
            <Reveal key={car.slug} delay={i * 0.08}>
              <CarCard car={car} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Horic */}
      <section className="border-y border-white/10 bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-horic">
                Why Horic Autos
              </p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                A smarter way to buy an imported car
              </h2>
              <p className="mt-4 text-white/60">
                Buying a car shouldn&apos;t be a gamble. We built Horic Autos to
                make importing premium vehicles simple, safe and genuinely
                enjoyable.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-background p-6 transition-colors hover:border-horic/40">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-horic/10 text-horic">
                    <v.icon size={24} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom coming soon */}
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=2000"
              alt="Horic Autos showroom"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
            <div className="relative grid gap-6 p-10 sm:p-14 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-horic/40 bg-horic/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-horic">
                  {site.showroom.status}
                </span>
                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                  Our flagship showroom is on the way
                </h2>
                <p className="mt-4 max-w-md text-white/70">
                  {site.showroom.note} Be the first to know when we open our
                  doors in {site.showroom.address}.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-horic px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-horic-dark"
                  >
                    Book a Private Viewing
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/10"
                  >
                    Our Story
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
