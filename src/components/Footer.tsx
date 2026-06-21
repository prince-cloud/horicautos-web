import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { site, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="relative h-10 w-10 overflow-hidden rounded-lg bg-white">
              <Image src="/logo.jpg" alt="Horic Autos" fill className="object-cover" sizes="40px" />
            </span>
            <span className="text-lg font-bold tracking-tight">
              HORIC<span className="text-horic"> AUTOS</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-white/55">{site.description}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">Explore</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li><Link href="/inventory" className="hover:text-white">Inventory</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Book a Viewing</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-horic" /> {site.phoneDisplay}
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-horic" /> {site.email}
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin size={16} className="text-horic" /> {site.showroom.address}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">Follow</h4>
          <div className="mt-4 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-horic hover:text-white"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={whatsappLink("Hello Horic Autos, I'd like to know more.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-horic hover:text-white"
            >
              <Phone size={18} />
            </a>
          </div>
          <p className="mt-4 text-sm text-white/55">
            Showroom <span className="text-horic">{site.showroom.status}</span>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-white/40 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Imported. Inspected. Yours.</p>
        </div>
      </div>
    </footer>
  );
}
