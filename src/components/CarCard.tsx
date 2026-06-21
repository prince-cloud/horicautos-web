import Link from "next/link";
import Image from "next/image";
import { Gauge, Fuel, Calendar } from "lucide-react";
import { type Car, formatPrice, formatKm } from "@/lib/cars";

const statusStyles: Record<Car["status"], string> = {
  Available: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Reserved: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  Incoming: "bg-sky-500/15 text-sky-400 border-sky-500/30",
};

export function CarCard({ car }: { car: Car }) {
  return (
    <Link
      href={`/inventory/${car.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-horic/50 hover:shadow-2xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={car.images[0]}
          alt={`${car.make} ${car.model}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span
          className={`absolute left-3 top-3 rounded-full border px-2.5 py-1 text-xs font-semibold ${statusStyles[car.status]}`}
        >
          {car.status}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white/80 backdrop-blur">
          {car.bodyType}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wider text-horic">{car.make}</p>
            <h3 className="truncate text-lg font-bold leading-tight">{car.model}</h3>
          </div>
          <p className="shrink-0 whitespace-nowrap text-right text-base font-bold sm:text-lg">{formatPrice(car.price)}</p>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/5 pt-4 text-xs text-white/60">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-white/40" /> {car.year}
          </span>
          <span className="flex items-center gap-1.5">
            <Gauge size={14} className="text-white/40" /> {formatKm(car.mileageKm)}
          </span>
          <span className="flex items-center gap-1.5">
            <Fuel size={14} className="text-white/40" /> {car.fuel}
          </span>
        </div>

        <span className="mt-5 text-sm font-semibold text-white/80 transition-colors group-hover:text-horic">
          View details →
        </span>
      </div>
    </Link>
  );
}
