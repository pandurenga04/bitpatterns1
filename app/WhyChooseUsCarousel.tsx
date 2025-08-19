"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import SectionHeading from "@/components/section-heading";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

export default function WhyChooseUs() {
  const items = [
    {
      img: "/bp2.jpg",
      title: "Technical Excellence",
      desc: "Our team of expert developers ensures high-quality code and optimal performance.",
    },
    {
      img: "/bp1.jpg",
      title: "Client-Focused Approach",
      desc: "We prioritize your needs and work closely with you throughout the development process.",
    },
    {
      img: "/bp3.jpg",
      title: "Expert Teams",
      desc: "We leverage cutting-edge technologies to create forward-thinking digital products.",
    },
    {
      img: "/bp4.jpg",
      title: "Timely Delivery",
      desc: "We adhere to project timelines and ensure on-time delivery without compromising quality.",
    },
  ];

  return (
    <section className="py-20 bg-[#050b2c] relative">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title="Client Success Stories"
          subtitle="Delivering innovative solutions on time, every time — turning client visions into reality."
        />
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          speed={1200} // smooth transition speed
          autoplay={{
            delay: 2500, // slide every 2.5s (smooth + no freeze)
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-900/30 rounded-lg border border-gray-800 h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
