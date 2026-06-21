/* Auto-scrolling, infinite right-to-left marquee of car brand logos. */

const brands = [
  { name: "Mercedes-Benz", file: "mercedes" },
  { name: "BMW", file: "bmw" },
  { name: "Porsche", file: "porsche" },
  { name: "Ferrari", file: "ferrari" },
  { name: "Audi", file: "audi" },
  { name: "Lamborghini", file: "lamborghini" },
  { name: "McLaren", file: "mclaren" },
  { name: "Bentley", file: "bentley" },
  { name: "Maserati", file: "maserati" },
  { name: "Bugatti", file: "bugatti" },
  { name: "Toyota", file: "toyota" },
  { name: "Ford", file: "ford" },
  { name: "Chevrolet", file: "chevrolet" },
  { name: "Nissan", file: "nissan" },
  { name: "Volkswagen", file: "volkswagen" },
  { name: "Jeep", file: "jeep" },
  { name: "Volvo", file: "volvo" },
];

export function BrandMarquee() {
  // Render the list twice so translateX(-50%) loops seamlessly.
  const loop = [...brands, ...brands];

  return (
    <div className="marquee-group marquee-mask overflow-hidden">
      <ul className="animate-marquee flex items-center gap-16 py-2 sm:gap-24">
        {loop.map((b, i) => (
          <li key={`${b.file}-${i}`} className="shrink-0" aria-hidden={i >= brands.length}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/brands/${b.file}.svg`}
              alt={b.name}
              title={b.name}
              className="h-8 w-auto opacity-45 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-10"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
