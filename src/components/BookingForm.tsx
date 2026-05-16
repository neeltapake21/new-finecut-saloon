"use client";

import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { servicesData } from "./ServicePriceList";

type FormData = {
  name: string;
  service: string;
  date: string;
  time: string;
};

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const url = generateWhatsAppLink(data);
    // Open in a new tab
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Flatten services for dropdown
  const allServices = servicesData.flatMap(group => group.items.map(item => item.name));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-surface p-10 border border-outline-variant/10">
      <div>
        <label className="block text-label-sm text-secondary-fixed uppercase tracking-widest mb-2" htmlFor="name">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          {...register("name", { required: "Name is required" })}
          className="w-full bg-transparent border-0 border-b border-secondary-fixed-dim focus:border-primary focus:ring-0 text-on-surface text-body-lg px-0 py-2 transition-colors outline-none"
        />
        {errors.name && <span className="text-error text-sm mt-1">{errors.name.message}</span>}
      </div>

      <div>
        <label className="block text-label-sm text-secondary-fixed uppercase tracking-widest mb-2" htmlFor="service">
          Service
        </label>
        <select
          id="service"
          {...register("service", { required: "Please select a service" })}
          className="w-full bg-transparent border-0 border-b border-secondary-fixed-dim focus:border-primary focus:ring-0 text-on-surface text-body-lg px-0 py-2 transition-colors outline-none"
        >
          <option value="" className="bg-surface text-on-surface">Select a service</option>
          {allServices.map((service, idx) => (
            <option key={idx} value={service} className="bg-surface text-on-surface">
              {service}
            </option>
          ))}
        </select>
        {errors.service && <span className="text-error text-sm mt-1">{errors.service.message}</span>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className="block text-label-sm text-secondary-fixed uppercase tracking-widest mb-2" htmlFor="date">
            Date
          </label>
          <input
            id="date"
            type="date"
            {...register("date", { required: "Date is required" })}
            className="w-full bg-transparent border-0 border-b border-secondary-fixed-dim focus:border-primary focus:ring-0 text-on-surface text-body-lg px-0 py-2 transition-colors outline-none dark:[color-scheme:dark]"
          />
          {errors.date && <span className="text-error text-sm mt-1">{errors.date.message}</span>}
        </div>
        <div>
          <label className="block text-label-sm text-secondary-fixed uppercase tracking-widest mb-2" htmlFor="time">
            Time
          </label>
          <input
            id="time"
            type="time"
            {...register("time", { required: "Time is required" })}
            className="w-full bg-transparent border-0 border-b border-secondary-fixed-dim focus:border-primary focus:ring-0 text-on-surface text-body-lg px-0 py-2 transition-colors outline-none dark:[color-scheme:dark]"
          />
          {errors.time && <span className="text-error text-sm mt-1">{errors.time.message}</span>}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-on-primary text-label-md px-8 py-4 uppercase tracking-widest hover:bg-primary-fixed transition-colors mt-8 flex justify-center items-center gap-2 shadow-[0_0_15px_rgba(242,202,80,0.15)] hover:shadow-[0_0_25px_rgba(242,202,80,0.3)] transform hover:scale-[1.01]"
      >
        <Send size={18} /> Book via WhatsApp
      </button>
    </form>
  );
}
