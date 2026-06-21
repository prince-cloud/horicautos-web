import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Gauge,
  Fuel,
  Cog,
  Zap,
  Wind,
  Timer,
  Palette,
  Check,
  CalendarCheck,
} from "lucide-react";
import { CarGallery } from "@/components/CarGallery";
import { cars, getCar, formatPrice, formatKm } from "@/lib/cars";
import { site, whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return cars.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const car = getCar(slug);
  if (!car) return { title: "Car not found" };
  return {
    title: `${car.year} ${car.make} ${car.model}`,
    description: car.description,
    openGraph: { images: [car.images[0]] },
  };
}

export default async function CarPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const car = getCar(slug);
  if (!car) notFound();

  const specs = [
    { icon: Calendar, label: "Year", value: String(car.year) },
    { icon: Gauge, label: "Mileage", value: formatKm(car.mileageKm) },
    { icon: Fuel, label: "Fuel", value: car.fuel },
    { icon: Cog, label: "Transmission", value: car.transmission },
    { icon: Zap, label: "Power", value: car.power },
    { icon: Wind, label: "Top Speed", value: car.topSpeed },
    { icon: Timer, label: "0–100 km/h", value: car.acceleration },
    { icon: Palette, label: "Colour", value: car.color },
  ];

  const inquiry = `Hello ${site.name}, I'm interested in the ${car.year} ${car.make} ${car.model} (${formatPrice(car.price)}). Is it available?`;
  const booking = `Hello ${site.name}, I'd like to book a viewing / test drive for the ${car.year} ${car.make} ${car.model}.`;

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-28 lg:px-8">
      <Link
        href="/inventory"
        className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
      >
        <ArrowLeft size={16} /> Back to inventory
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        {/* Gallery + description */}
        <div>
          <CarGallery images={car.images} alt={`${car.make} ${car.model}`} />

          <div className="mt-10">
            <h2 className="text-xl font-bold">Overview</h2>
            <p className="mt-3 leading-relaxed text-white/70">{car.description}</p>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold">Highlights</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {car.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 rounded-xl border border-white/10 bg-surface px-4 py-3 text-sm text-white/80">
                  <Check size={16} className="shrink-0 text-horic" /> {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sticky info panel */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-white/10 bg-surface p-6">
            <p className="text-sm font-medium uppercase tracking-wider text-horic">{car.make}</p>
            <h1 className="mt-1 text-3xl font-bold leading-tight">
              {car.model}
            </h1>
            <p className="mt-1 text-white/50">{car.year} · {car.bodyType} · {car.drivetrain}</p>

            <div className="mt-5 flex items-end justify-between border-y border-white/10 py-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40">Price</p>
                <p className="text-3xl font-bold">{formatPrice(car.price)}</p>
              </div>
              <span
                className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                  car.status === "Available"
                    ? "border-emerald-500/30 bg-emerald-500/15 text-emerald-400"
                    : car.status === "Reserved"
                    ? "border-amber-500/30 bg-amber-500/15 text-amber-400"
                    : "border-sky-500/30 bg-sky-500/15 text-sky-400"
                }`}
              >
                {car.status}
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={whatsappLink(inquiry)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-horic px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-horic-dark"
              >
                Inquire on WhatsApp
              </a>
              <Link
                href={`/contact?car=${encodeURIComponent(`${car.year} ${car.make} ${car.model}`)}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                <CalendarCheck size={17} /> Book a Test Drive
              </Link>
              <a
                href={whatsappLink(booking)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-xs text-white/45 hover:text-white/70"
              >
                or message us directly about a viewing
              </a>
            </div>
          </div>

          {/* Specs */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-surface p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Specifications
            </h2>
            <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-5">
              {specs.map((s) => (
                <div key={s.label}>
                  <dt className="flex items-center gap-1.5 text-xs text-white/45">
                    <s.icon size={14} /> {s.label}
                  </dt>
                  <dd className="mt-1 font-semibold">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Related */}
      <RelatedCars currentSlug={car.slug} />
    </div>
  );
}

function RelatedCars({ currentSlug }: { currentSlug: string }) {
  const related = cars.filter((c) => c.slug !== currentSlug).slice(0, 3);
  return (
    <section className="mt-20">
      <h2 className="text-2xl font-bold">You may also like</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((c) => (
          <Link
            key={c.slug}
            href={`/inventory/${c.slug}`}
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-surface p-5 transition-colors hover:border-horic/40"
          >
            <div>
              <p className="text-xs uppercase tracking-wider text-horic">{c.make}</p>
              <p className="font-semibold">{c.model}</p>
              <p className="text-sm text-white/50">{formatPrice(c.price)}</p>
            </div>
            <span className="text-white/40 transition-colors group-hover:text-horic">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
