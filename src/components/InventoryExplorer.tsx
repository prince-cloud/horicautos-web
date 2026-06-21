"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { CarCard } from "@/components/CarCard";
import { cars, makes, bodyTypes } from "@/lib/cars";

type Sort = "featured" | "price-asc" | "price-desc" | "year-desc";

export function InventoryExplorer() {
  const [query, setQuery] = useState("");
  const [make, setMake] = useState("All");
  const [body, setBody] = useState("All");
  const [sort, setSort] = useState<Sort>("featured");

  const filtered = useMemo(() => {
    let list = cars.filter((c) => {
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        `${c.make} ${c.model} ${c.year} ${c.bodyType} ${c.color}`
          .toLowerCase()
          .includes(q);
      const matchesMake = make === "All" || c.make === make;
      const matchesBody = body === "All" || c.bodyType === body;
      return matchesQuery && matchesMake && matchesBody;
    });

    list = [...list].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "year-desc":
          return b.year - a.year;
        default:
          return Number(b.featured) - Number(a.featured) || b.price - a.price;
      }
    });

    return list;
  }, [query, make, body, sort]);

  const hasFilters = query || make !== "All" || body !== "All" || sort !== "featured";

  const reset = () => {
    setQuery("");
    setMake("All");
    setBody("All");
    setSort("featured");
  };

  const selectClass =
    "rounded-full border border-white/10 bg-surface px-4 py-2.5 text-sm text-white/80 outline-none transition-colors focus:border-horic";

  return (
    <div>
      {/* Controls */}
      <div className="relative z-30 mb-8 rounded-2xl border border-white/10 bg-surface p-4 lg:sticky lg:top-[84px] lg:bg-background/85 lg:backdrop-blur">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search make, model, colour…"
              className="w-full rounded-full border border-white/10 bg-surface py-2.5 pl-11 pr-4 text-sm outline-none transition-colors focus:border-horic"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="hidden items-center gap-2 text-white/40 sm:flex">
              <SlidersHorizontal size={16} />
            </div>
            <select value={make} onChange={(e) => setMake(e.target.value)} className={selectClass}>
              <option value="All">All Makes</option>
              {makes.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
            <select value={body} onChange={(e) => setBody(e.target.value)} className={selectClass}>
              <option value="All">All Types</option>
              {bodyTypes.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
            <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className={selectClass}>
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="year-desc">Newest Year</option>
            </select>
            {hasFilters && (
              <button
                onClick={reset}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-2.5 text-sm text-white/60 transition-colors hover:text-white"
              >
                <X size={15} /> Reset
              </button>
            )}
          </div>
        </div>
      </div>

      <p className="mb-6 text-sm text-white/50">
        Showing <span className="font-semibold text-white">{filtered.length}</span> of {cars.length} vehicles
      </p>

      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((car) => (
            <CarCard key={car.slug} car={car} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-white/15 py-20 text-center">
          <p className="text-lg font-semibold">No cars match your filters</p>
          <p className="mt-2 text-sm text-white/50">Try widening your search or reset the filters.</p>
          <button
            onClick={reset}
            className="mt-6 rounded-full bg-horic px-6 py-2.5 text-sm font-semibold text-white hover:bg-horic-dark"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
