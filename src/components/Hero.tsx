"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2400"
        alt="Premium cars in a showroom"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/80 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-horic" />
          Premium Car Imports · Ghana
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Drive the <span className="text-gradient">extraordinary</span>.
          <br />
          Delivered by <span className="text-horic">Horic Autos</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-white/70"
        >
          {site.tagline} We source, import and hand-deliver premium vehicles —
          fully inspected and ready to own.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="/inventory"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-horic px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-horic-dark"
          >
            Explore Inventory
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/10"
          >
            Book a Viewing
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/10 pt-8"
        >
          {[
            { value: "100%", label: "Inspected on arrival" },
            { value: "Global", label: "Sourcing network" },
            { value: "Soon", label: "Flagship showroom" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold sm:text-3xl">{s.value}</p>
              <p className="text-sm text-white/55">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40"
      >
        <ChevronDown className="animate-bounce" />
      </motion.div>
    </section>
  );
}
