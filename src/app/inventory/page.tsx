import type { Metadata } from "next";
import { InventoryExplorer } from "@/components/InventoryExplorer";

export const metadata: Metadata = {
  title: "Inventory",
  description:
    "Browse premium imported cars available now at Horic Autos. Filter by make, body type and price.",
};

export default function InventoryPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-28 lg:px-8">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-horic">
          Inventory
        </p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Find your next car</h1>
        <p className="mt-4 max-w-2xl text-white/60">
          Every vehicle below is hand-picked, imported and inspected by Horic
          Autos. Tap any car to see full specs and reserve a viewing.
        </p>
      </header>

      <InventoryExplorer />
    </div>
  );
}
