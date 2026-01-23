import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ServiceImg01 from "@/public/img/LP/new/offshore-repair.jpg";
import ServiceImg02 from "@/public/img/LP/new/yatches.jpg";
import ServiceImg03 from "@/public/img/LP/new/navalvessel.jpg";
import ServiceImg04 from "@/public/img/LP/new/merchant-ships.jpg";
import Image from "next/image";

const vessels = [
  {
    id: 1,
    title: "OFFSHORE VESSELS",
    image: ServiceImg01,
    description:
      "OSV drydocking and repair form a key part of our ship repair services. Dubai serves as a central hub for the Middle East offshore fleet, and with over four decades of experience, Grandweld is one of the most established ship repair yards in the UAE. This strong foundation has positioned us as a trusted offshore vessel repair specialist, with thousands of successful drydockings completed over the years.",
  },
  {
    id: 2,
    title: "YACHTS",
    image: ServiceImg02,
    description:
      "Dubai is home to many high-net-worth individuals, and we have extensive experience in superyacht repair and upgrade services. Dubai Maritime City is a key UAE drydock for yacht repair, while the Jadaf Dubai Shipyard is another important drydock where we carry out yacht repairs. Our wide range of high-quality services ensures yachts are maintained to the highest standards.",
  },
  {
    id: 3,
    title: "NAVAL VESSELS",
    image: ServiceImg03,
    description:
      "We have decades of experience delivering ship repair services for advanced naval fleets and are recognised as one of the most trusted shipyards in Dubai. This expertise has earned the confidence of multiple international governments. Operating from our Dubai shipyard, we provide reliable repair solutions for a wide range of navy vessels across the region.",
  },
  {
    id: 4,
    title: "MERCHANT SHIPS",
    image: ServiceImg04,
    description:
      "Our collaboration with Dubai Maritime City enables highly competitive and efficient ship repair services. The large synchro-lift drydock in Dubai handles vessels up to 6,000 tonnes and 130 metres in length, supporting oil tankers, container ships, bulk carriers, ferries, and other merchant vessels at cost-effective tariffs.",
  },
];

export default function VesselsWeRepair() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Vessels We Repair
        </h2>

        {/* Swiper */}
        <div
          className="grid grid-cols-1  md:grid-cols-4 gap-3"
        >
          {vessels.map((item) => (
            <div key={item.id}>
              <div className="h-full shadow-lg bg-white flex flex-col">

                {/* Image */}
                <div className="h-[220px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Content */}
         <div className="relative p-6 flex-1 bg-[url('/img/LP/list-bg-02.png')] bg-cover bg-center">
                  <h3 className="text-black text-lg font-bold mb-3 uppercase">
                    {item.title}
                  </h3>
                  <p className="text-black text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
