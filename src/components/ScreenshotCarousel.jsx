import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ScreenshotCarousel() {
    const screenshots = [
        "/leadbuzz_full_1.png",
        "/leadbuzz_dashboard.png",
        "/leadbuzz_add_lead.png",
        "/leadbuzz_staff.png"
    ];

    return (
        <section className="py-20 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
                Product Screenshots
            </h2>

            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                speed={700}
                className="rounded-xl"
            >
                {screenshots.map((src, i) => (
                    <SwiperSlide key={i}>
                        <div className="bg-white p-6 rounded-xl shadow-lg flex items-center justify-center">
                            <img
                                src={src}
                                alt={`Screenshot ${i}`}
                                className="w-auto h-[420px] md:h-[480px] object-contain mx-auto"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
