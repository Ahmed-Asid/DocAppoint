import { getDocData } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, Chip } from "@heroui/react";
import {
    FaLocationDot,
    FaUserDoctor,
    FaArrowRight,
    FaStethoscope,
    FaStar
} from "react-icons/fa6";

const AppointmentsPage = async () => {
    const docs = await getDocData();

    return (
        <main className="min-h-screen bg-base-200/40 py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-base-200 pb-8 mb-10 gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold text-base-content tracking-tight md:text-4xl">
                            Our Available Specialists
                        </h1>
                        <p className="mt-2 text-base-content/70 text-lg">
                            Browse verified medical specialists and view their profiles to book a slot.
                        </p>
                    </div>

                    <Chip color="primary" variant="flat" size="lg" className="font-bold px-4 py-2 text-sm border border-primary/20">
                        {docs.length} Doctors Live
                    </Chip>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {docs.map((doc) => (
                        <Card key={doc.id} className="bg-base-100 rounded-3xl overflow-hidden border border-base-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                            <Card.Content className="p-0 flex flex-col h-full">

                                <div className="h-56 w-full relative bg-base-300">
                                    <Image
                                        src={doc.image}
                                        alt={doc.name}
                                        fill
                                        sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                                        className="object-cover object-top"
                                        priority={true}
                                    />

                                    <div className="absolute top-4 right-4 bg-base-100/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                        <FaStar className="text-warning text-sm" />
                                        <span className="font-bold text-sm text-base-content">{doc.rating}</span>
                                        <span className="text-xs text-base-content/60">({doc.reviews})</span>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col grow">
                                    <div className="flex items-center gap-2 text-primary font-bold text-xs tracking-wider uppercase mb-2">
                                        <FaUserDoctor className="text-sm" />
                                        <span className="line-clamp-1">{doc.specialty}</span>
                                    </div>

                                    <h2 className="text-xl font-bold text-base-content mb-4 line-clamp-1">
                                        {doc.name}
                                    </h2>

                                    <div className="text-sm text-base-content/80 mb-6 flex items-center gap-3">
                                        <FaLocationDot className="text-primary/70 w-4 h-4 shrink-0" />
                                        <span className="line-clamp-1">{doc.location}</span>
                                    </div>

                                    <div className="mt-auto pt-2">
                                        <Link href={`/appointments/${doc.id}`} className="block w-full">
                                            <Button
                                                color="primary"
                                                radius="xl"
                                                className="w-full font-bold shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 py-6 text-sm"
                                                endContent={<FaArrowRight className="text-xs" />}
                                            >
                                                View Details
                                            </Button>
                                        </Link>
                                    </div>
                                </div>

                            </Card.Content>
                        </Card>
                    ))}
                </div>

                {docs.length === 0 && (
                    <div className="text-center py-20 bg-base-100 rounded-3xl border border-dashed border-base-300">
                        <div className="text-5xl mb-4"><FaStethoscope /></div>
                        <h3 className="text-xl font-bold text-base-content">No available specialists listed</h3>
                        <p className="text-base-content/60 mt-1">Please check that your backend Express server script is active on port 5000.</p>
                    </div>
                )}
            </div>
        </main>
    );
};

export default AppointmentsPage;