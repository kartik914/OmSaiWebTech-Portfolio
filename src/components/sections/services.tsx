"use client";
import React from "react";
import Link from "next/link";

import services, { Services } from "@/data/services";
import { cn } from "@/lib/utils";

const ServicesSection = () => {
  return (
    <section id="services" className="max-w-7xl mx-auto md:h-[130vh]">
      <Link href={"#services"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-32"
          )}
        >
          Services
        </h2>
      </Link>
      <div className="grid gap-8 grid-cols-1 p-4 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};
const ServiceCard = ({ service }: { service: Services }) => {
  return (
    <div className="flex items-center justify-center bg-transparent group/modal-btn">
      <div
        className="relative w-[400px] h-auto border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white/50 dark:bg-gray-900/50 backdrop-blur-3xl hover:shadow-lg transition-all duration-300"
        style={{ aspectRatio: "3/2" }}
      >
        <div className="flex flex-col h-full items-center justify-center p-6">
          <div className="text-6xl mb-4 text-blue-600 dark:text-blue-400">{service.icon}</div>
          <div className="text-lg font-semibold text-center mb-2">{service.title}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400 text-center">{service.description}</div>
        </div>
      </div>
    </div>
  );
};
export default ServicesSection;

// const ServiceContents = ({ service }: { service: Services }) => {
//   return (
//     <>
//       <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
//         {service.title}
//       </h4>
//       <div className="flex flex-col items-center justify-center text-center">
//         <div className="text-6xl mb-6 text-blue-600 dark:text-blue-400">{service.icon}</div>
//         <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">{service.description}</p>
//       </div>
//     </>
//   );
// };
