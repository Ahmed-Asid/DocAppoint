"use client";

import { Button } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { FaCalendarCheck } from "react-icons/fa6";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import { FaUserMd } from "react-icons/fa";

const HeroSection = () => {

    const sliderImages = [
        {
            id: 1,
            url: "/assets/doctor-consulting.jpg",
            alt: "Doctor consulting with patient",
        },
        {
            id: 2,
            url: "/assets/doctor-prescribing.jpg",
            alt: "doctor prescribing",
        },
        {
            id: 3,
            url: "/assets/operation-theater.jpg",
            alt: "Operation-theater",
        },
    ];

    return (
        <section className="relative bg-base-100 overflow-hidden px-4 sm:px-6 lg:px-8 py-12 lg:py-20 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div className="flex flex-col items-center lg:items-start gap-6 z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit font-medium text-sm">
                        <FaUserMd />
                        <span>Trusted Healthcare Professionals</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-base-content leading-tight">
                        Find & Book Your <br className="hidden md:block" />
                        <span className="text-primary">Doctor</span> in Minutes.
                    </h1>

                    <p className="text-lg text-base-content/70 max-w-lg">
                        Skip the waiting room. Browse verified specialists, read reviews, and schedule your appointments instantly through our secure platform.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mt-2">

                        <Button
                            as={Link}
                            href="/appointments"
                            color="primary"
                            size="lg"
                            className="font-semibold shadow-md"
                            endContent={<FaCalendarCheck />}
                        >
                            Book an Appointment
                        </Button>
                        <Button
                            as={Link}
                            href="/doctors"
                            variant="flat"
                            color="default"
                            size="lg"
                            className="font-semibold"
                        >
                            Browse Specialists
                        </Button>
                    </div>
                </div>

                <div className="w-full h-100 lg:h-125 rounded-2xl overflow-hidden shadow-2xl relative">
                    <Swiper
                        modules={[Autoplay, Pagination, EffectFade]}
                        effect="fade"
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        loop={true}
                        className="w-full h-full"
                    >
                        {sliderImages.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <div className="w-full h-full relative">

                                    <Image
                                        src={slide.url}
                                        alt={slide.alt}
                                        fill
                                        sizes=""
                                    />

                                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;