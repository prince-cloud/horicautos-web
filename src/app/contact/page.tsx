import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { BookingForm } from "@/components/BookingForm";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Book a Viewing",
  description:
    "Book a viewing or test drive with Horic Autos, or reach us on WhatsApp and Instagram.",
};

export default function ContactPage() {
  const contacts = [
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: whatsappLink(`Hello ${site.name}!`) },
    { icon: Phone, label: "Phone", value: site.phoneDisplay, href: `tel:${site.phoneDisplay.replace(/\s/g, "")}` },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: InstagramIcon, label: "Instagram", value: site.instagramHandle, href: site.instagram },
  ];

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-28 lg:px-8">
      <header className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-horic">
          Get in touch
        </p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">
          Book a viewing or test drive
        </h1>
        <p className="mt-4 text-white/60">
          Tell us which car you&apos;re interested in and when you&apos;d like to
          see it. We&apos;ll confirm your booking and arrange everything — even
          before our showroom opens.
        </p>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Suspense fallback={<div className="rounded-2xl border border-white/10 bg-surface p-8 text-white/50">Loading form…</div>}>
          <BookingForm />
        </Suspense>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-surface p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Reach us directly
            </h2>
            <ul className="mt-4 space-y-3">
              {contacts.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-background px-4 py-3 transition-colors hover:border-horic/40"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-horic/10 text-horic">
                      <c.icon size={18} />
                    </span>
                    <span>
                      <span className="block text-xs text-white/45">{c.label}</span>
                      <span className="block text-sm font-medium">{c.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-surface p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Showroom
            </h2>
            <div className="mt-4 flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-horic/10 text-horic">
                <MapPin size={18} />
              </span>
              <div>
                <p className="font-medium">{site.showroom.address}</p>
                <p className="mt-1 text-sm text-horic">{site.showroom.status}</p>
                <p className="mt-2 text-sm text-white/55">{site.showroom.note}</p>
              </div>
            </div>
            <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
              <iframe
                title="Horic Autos location"
                src="https://www.google.com/maps?q=Accra%2C%20Ghana&output=embed"
                className="h-48 w-full grayscale"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
