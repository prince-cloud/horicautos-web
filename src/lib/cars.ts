/**
 * Car inventory for Horic Autos.
 *
 * ✏️  TO ADD A REAL CAR: copy one entry, change the values, and point the
 * `images` array at your own photo URLs (or files you drop in /public).
 * The images below are high-quality placeholders — swap them for the real
 * cars from the Horic Autos stock.
 */

export type BodyType =
  | "Sedan"
  | "Coupe"
  | "SUV"
  | "Sports"
  | "Wagon";

export type Car = {
  slug: string;
  make: string;
  model: string;
  year: number;
  price: number; // in GHS (Ghana Cedis)
  bodyType: BodyType;
  mileageKm: number;
  fuel: "Petrol" | "Diesel" | "Hybrid" | "Electric";
  transmission: "Automatic" | "Manual";
  drivetrain: "RWD" | "AWD" | "FWD";
  power: string; // e.g. "503 hp"
  topSpeed: string; // e.g. "250 km/h"
  acceleration: string; // 0-100 km/h
  color: string;
  featured: boolean;
  status: "Available" | "Reserved" | "Incoming";
  images: string[];
  description: string;
  highlights: string[];
};

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`;

export const cars: Car[] = [
  {
    slug: "porsche-panamera-2022",
    make: "Porsche",
    model: "Panamera",
    year: 2022,
    price: 1450000,
    bodyType: "Sedan",
    mileageKm: 18400,
    fuel: "Petrol",
    transmission: "Automatic",
    drivetrain: "AWD",
    power: "443 hp",
    topSpeed: "270 km/h",
    acceleration: "4.2s",
    color: "Jet Black",
    featured: true,
    status: "Available",
    images: [img("1503376780353-7e6692767b70"), img("1606664515524-ed2f786a0bd6")],
    description:
      "A grand tourer that blends executive comfort with genuine sports-car pace. This Panamera arrives fully inspected with a clean import history.",
    highlights: ["Adaptive air suspension", "Panoramic roof", "Full leather interior", "Bose surround sound"],
  },
  {
    slug: "ferrari-laferrari-2021",
    make: "Ferrari",
    model: "LaFerrari",
    year: 2021,
    price: 4200000,
    bodyType: "Sports",
    mileageKm: 4200,
    fuel: "Hybrid",
    transmission: "Automatic",
    drivetrain: "RWD",
    power: "950 hp",
    topSpeed: "350 km/h",
    acceleration: "2.4s",
    color: "Rosso Corsa",
    featured: true,
    status: "Available",
    images: [img("1583121274602-3e2820c69888"), img("1503376780353-7e6692767b70")],
    description:
      "The flagship of the collection. A hybrid hypercar with breathtaking presence and a showroom-fresh finish, ready for its next owner.",
    highlights: ["Carbon-fibre monocoque", "HY-KERS hybrid system", "Track-ready aero", "Bespoke interior"],
  },
  {
    slug: "mclaren-720s-2021",
    make: "McLaren",
    model: "720S",
    year: 2021,
    price: 3600000,
    bodyType: "Sports",
    mileageKm: 9100,
    fuel: "Petrol",
    transmission: "Automatic",
    drivetrain: "RWD",
    power: "710 hp",
    topSpeed: "341 km/h",
    acceleration: "2.9s",
    color: "Silica White",
    featured: true,
    status: "Available",
    images: [img("1542362567-b07e54358753"), img("1583121274602-3e2820c69888")],
    description:
      "Lightweight, ferociously fast and surprisingly usable. The 720S delivers supercar drama with everyday composure.",
    highlights: ["Dihedral doors", "Proactive chassis control", "Carbon-ceramic brakes", "Track telemetry"],
  },
  {
    slug: "bmw-m5-competition-2021",
    make: "BMW",
    model: "M5 Competition",
    year: 2021,
    price: 1320000,
    bodyType: "Sedan",
    mileageKm: 22500,
    fuel: "Petrol",
    transmission: "Automatic",
    drivetrain: "AWD",
    power: "617 hp",
    topSpeed: "305 km/h",
    acceleration: "3.3s",
    color: "Alpine White",
    featured: false,
    status: "Available",
    images: [img("1555215695-3004980ad54e"), img("1606664515524-ed2f786a0bd6")],
    description:
      "The definitive super-saloon. Four doors, all-wheel drive traction and a twin-turbo V8 that rewrites the rules.",
    highlights: ["M xDrive AWD", "Carbon roof", "M Sport exhaust", "Merino leather"],
  },
  {
    slug: "mercedes-amg-gt-2020",
    make: "Mercedes-AMG",
    model: "GT",
    year: 2020,
    price: 1950000,
    bodyType: "Coupe",
    mileageKm: 15700,
    fuel: "Petrol",
    transmission: "Automatic",
    drivetrain: "RWD",
    power: "523 hp",
    topSpeed: "315 km/h",
    acceleration: "3.6s",
    color: "Solar Beam",
    featured: false,
    status: "Available",
    images: [img("1605559424843-9e4c228bf1c2"), img("1618843479313-40f8afb4b4d8")],
    description:
      "Hand-built AMG performance wrapped in one of the most beautiful silhouettes on the road. A true driver's GT.",
    highlights: ["AMG 4.0L V8 Biturbo", "Race-Track package", "AMG Ride Control", "Burmester audio"],
  },
  {
    slug: "mercedes-amg-gtr-2019",
    make: "Mercedes-AMG",
    model: "GT R",
    year: 2019,
    price: 2350000,
    bodyType: "Coupe",
    mileageKm: 12900,
    fuel: "Petrol",
    transmission: "Automatic",
    drivetrain: "RWD",
    power: "577 hp",
    topSpeed: "318 km/h",
    acceleration: "3.5s",
    color: "Selenite Grey Magno",
    featured: false,
    status: "Incoming",
    images: [img("1618843479313-40f8afb4b4d8"), img("1605559424843-9e4c228bf1c2")],
    description:
      "The 'Beast of the Green Hell'. A track-bred AMG with active aero and adjustable everything. Currently in transit.",
    highlights: ["Active rear-wheel steering", "9-stage traction control", "Carbon-fibre torque tube", "Manual coilovers"],
  },
  {
    slug: "ford-mustang-gt-2020",
    make: "Ford",
    model: "Mustang GT",
    year: 2020,
    price: 690000,
    bodyType: "Coupe",
    mileageKm: 31200,
    fuel: "Petrol",
    transmission: "Manual",
    drivetrain: "RWD",
    power: "460 hp",
    topSpeed: "250 km/h",
    acceleration: "4.3s",
    color: "Magnetic Grey",
    featured: false,
    status: "Available",
    images: [img("1494976388531-d1058494cdd8"), img("1552519507-da3b142c6e3d")],
    description:
      "American muscle with a soundtrack to match. A 5.0L V8 Mustang GT with a tasteful spec and full service history.",
    highlights: ["5.0L Coyote V8", "6-speed manual", "Performance pack", "Active valve exhaust"],
  },
  {
    slug: "chevrolet-camaro-ss-2019",
    make: "Chevrolet",
    model: "Camaro SS",
    year: 2019,
    price: 620000,
    bodyType: "Coupe",
    mileageKm: 27800,
    fuel: "Petrol",
    transmission: "Automatic",
    drivetrain: "RWD",
    power: "455 hp",
    topSpeed: "250 km/h",
    acceleration: "4.0s",
    color: "Riverside Blue",
    featured: false,
    status: "Available",
    images: [img("1552519507-da3b142c6e3d"), img("1494976388531-d1058494cdd8")],
    description:
      "A sharp-handling muscle coupe with a naturally aspirated V8 and aggressive looks. Imported and ready to register.",
    highlights: ["6.2L LT1 V8", "Magnetic Ride Control", "Brembo brakes", "Heads-up display"],
  },
  {
    slug: "ferrari-458-speciale-2015",
    make: "Ferrari",
    model: "458 Speciale",
    year: 2015,
    price: 6100000,
    bodyType: "Sports",
    mileageKm: 8600,
    fuel: "Petrol",
    transmission: "Automatic",
    drivetrain: "RWD",
    power: "597 hp",
    topSpeed: "325 km/h",
    acceleration: "3.0s",
    color: "Giallo Modena",
    featured: false,
    status: "Reserved",
    images: [img("1503736334956-4c8f8e92946d"), img("1583121274602-3e2820c69888")],
    description:
      "A modern classic and one of the last great naturally aspirated Ferraris. A collector-grade Speciale, currently reserved.",
    highlights: ["4.5L NA V8", "Side-slip control", "Carbon-ceramic brakes", "Lightweight build"],
  },
  {
    slug: "toyota-rav4-2021",
    make: "Toyota",
    model: "RAV4 XLE",
    year: 2021,
    price: 480000,
    bodyType: "SUV",
    mileageKm: 38900,
    fuel: "Hybrid",
    transmission: "Automatic",
    drivetrain: "AWD",
    power: "219 hp",
    topSpeed: "180 km/h",
    acceleration: "8.1s",
    color: "Silver Sky",
    featured: false,
    status: "Available",
    images: [img("1617469767053-d3b523a0b982"), img("1555215695-3004980ad54e")],
    description:
      "The dependable, efficient family SUV that does it all. A low-mileage hybrid RAV4 — practical, economical and import-fresh.",
    highlights: ["AWD hybrid drivetrain", "Toyota Safety Sense", "Apple CarPlay / Android Auto", "Spacious cargo"],
  },
];

export function getCar(slug: string): Car | undefined {
  return cars.find((c) => c.slug === slug);
}

export const featuredCars = cars.filter((c) => c.featured);

export const makes = Array.from(new Set(cars.map((c) => c.make))).sort();
export const bodyTypes = Array.from(new Set(cars.map((c) => c.bodyType))).sort();

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatKm(km: number) {
  return new Intl.NumberFormat("en-US").format(km) + " km";
}
