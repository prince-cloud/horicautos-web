"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Send } from "lucide-react";
import { whatsappLink, site } from "@/lib/site";

export function BookingForm() {
  const params = useSearchParams();
  const presetCar = params.get("car") ?? "";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    car: presetCar,
    date: "",
    message: "",
  });

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hello ${site.name}, I'd like to book a viewing / test drive.`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.car && `Car: ${form.car}`,
      form.date && `Preferred date: ${form.date}`,
      form.message && `Message: ${form.message}`,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  const field =
    "w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-horic placeholder:text-white/30";
  const label = "mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/45";

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-surface p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">Full name</label>
          <input id="name" required value={form.name} onChange={update("name")} className={field} placeholder="Your name" />
        </div>
        <div>
          <label className={label} htmlFor="phone">Phone / WhatsApp</label>
          <input id="phone" required value={form.phone} onChange={update("phone")} className={field} placeholder="+233 …" />
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="car">Car of interest</label>
          <input id="car" value={form.car} onChange={update("car")} className={field} placeholder="e.g. BMW M5 Competition" />
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="date">Preferred viewing date</label>
          <input id="date" type="date" value={form.date} onChange={update("date")} className={field} />
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="message">Message (optional)</label>
          <textarea id="message" rows={4} value={form.message} onChange={update("message")} className={field} placeholder="Anything we should know?" />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-horic px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-horic-dark sm:w-auto"
      >
        <Send size={17} /> Send via WhatsApp
      </button>
      <p className="mt-3 text-xs text-white/40">
        This opens WhatsApp with your details pre-filled — just hit send and our team will confirm your booking.
      </p>
    </form>
  );
}
