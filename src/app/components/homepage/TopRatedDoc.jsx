"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaLocationDot, FaUserDoctor } from "react-icons/fa6";

const TopRatedDoc = () => {

    const topDoctors = [
        {
            id: "doc-1",
            name: "Dr. Sarah Jenkins",
            specialty: "Cardiologist",
            rating: 4.9,
            reviews: 128,
            location: "HeartCare Center, NY",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
        },
        {
            id: "doc-2",
            name: "Dr. Marcus Chen",
            specialty: "Neurologist",
            rating: 4.8,
            reviews: 95,
            location: "Neuro Spine Institute",
            image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
        },
        {
            id: "doc-3",
            name: "Dr. Emily Rodriguez",
            specialty: "Pediatrician",
            rating: 5.0,
            reviews: 210,
            location: "Kids Health Clinic",
            image: "https://images.unsplash.com/photo-1594824436951-7f12bc1a4f02?q=80&w=800&auto=format&fit=crop",
        },
    ];

    return (
        <section className="bg-base-200/50 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
                        Our Top Rated Doctors
                    </h2>
                    <p className="text-base-content/70 max-w-2xl mx-auto text-lg">
                        Book appointments with our highest-rated specialists, trusted by thousands of patients for their exceptional care.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topDoctors.map((doc) => (
                        <div key={doc.id} className="bg-base-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col border border-base-200">

                            <div className="h-60 w-full relative bg-base-200">
                                <Image
                                    src={doc.image}
                                    alt={doc.name}
                                    fill={true}
                                    sizes=""
                                />
                                <div className="absolute top-4 right-4 bg-base-100/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                    <FaStar className="text-warning text-sm" />
                                    <span className="font-bold text-sm text-base-content">{doc.rating}</span>
                                    <span className="text-xs text-base-content/60">({doc.reviews})</span>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col grow">
                                <div className="flex items-center gap-2 text-primary font-medium text-sm mb-2">
                                    <FaUserDoctor />
                                    <span className="line-clamp-1">{doc.specialty}</span>
                                </div>

                                <h3 className="text-xl font-bold text-base-content mb-2 line-clamp-1">
                                    {doc.name}
                                </h3>

                                <div className="flex items-center gap-2 text-base-content/70 text-sm mb-6">
                                    <FaLocationDot className="text-base-content/50" />
                                    <span className="line-clamp-1">{doc.location}</span>
                                </div>

                                <div className="mt-auto pt-4 border-t border-base-200">
                                    <Button
                                        as={Link}
                                        href={`/doctors/${doc.id}`}
                                        color="primary"
                                        variant="flat"
                                        className="w-full font-semibold"
                                    >
                                        View Details
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TopRatedDoc;