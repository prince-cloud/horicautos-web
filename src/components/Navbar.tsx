"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/inventory", label: "Inventory" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "glass border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative h-10 w-10 overflow-hidden rounded-lg bg-white">
            <Image src="/logo.jpg" alt="Horic Autos" fill className="object-cover" sizes="40px" priority />
          </span>
          <span className="text-lg font-bold tracking-tight">
            HORIC<span className="text-horic"> AUTOS</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-sm font-medium transition-colors hover:text-white ${
                    active ? "text-white" : "text-white/60"
                  }`}
                >
                  {l.label}
                  {active && <span className="mt-1 block h-0.5 w-full bg-horic" />}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/60 transition-colors hover:text-white"
          >
            <InstagramIcon size={20} />
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-horic px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-horic-dark hover:shadow-lg"
          >
            Book a Viewing
          </Link>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-white/10 md:hidden">
          <ul className="flex flex-col px-5 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block border-b border-white/5 py-3 text-base font-medium text-white/80"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href="/contact"
                className="block rounded-full bg-horic px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Book a Viewing
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
