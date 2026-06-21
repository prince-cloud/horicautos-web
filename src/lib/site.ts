/**
 * Central business config for Horic Autos.
 * ✏️  EDIT THESE VALUES — they flow through the whole site.
 */
export const site = {
  name: "Horic Autos",
  tagline: "Imported. Inspected. Yours.",
  description:
    "Horic Autos imports and sells premium vehicles. Hand-picked cars, transparent deals, and a showroom experience built for you.",

  // WhatsApp number in international format, digits only (no +, spaces or dashes).
  whatsappNumber: "233548000393",

  // ✏️ Replace with the real email when ready.
  phoneDisplay: "+233 54 800 0393",
  email: "info@horicautos.com",

  instagram: "https://www.instagram.com/horicautos/",
  instagramHandle: "@horicautos",

  // ✏️ Showroom details (showroom "opening soon").
  showroom: {
    status: "Opening Soon",
    address: "Accra, Ghana",
    note: "Our flagship showroom is on its way. Book a private viewing in the meantime.",
  },
} as const;

/** Build a pre-filled WhatsApp chat link. */
export function whatsappLink(message?: string) {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${site.whatsappNumber}${text}`;
}
