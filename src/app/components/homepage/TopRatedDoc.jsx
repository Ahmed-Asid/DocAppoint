import { getDocData } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaLocationDot, FaUserDoctor } from "react-icons/fa6";

const TopRatedDoc = async () => {

    const docs = await getDocData();

    const topThreeDocs = docs.sort((a, b) => b.rating - a.rating).slice(0, 3);

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
                    {topThreeDocs.map((doc) => (
                        <div key={doc.id} className="bg-base-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col border border-base-200">

                            <div className="relative w-full h-72 md:h-56 lg:h-64">
                                <Image
                                    src={doc.image}
                                    alt={doc.name}
                                    fill
                                    sizes="(max-width: 480px) 100vw, (max-width: 480px) 50vw, 33vw"
                                    className="object-cover object-top"
                                    priority
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
                                    <Link
                                        href={`/appointments/${doc.id}`}
                                        className="btn btn-primary btn-flat w-full font-semibold normal-case rounded-xl transition-all flex items-center justify-center bg-primary/10 text-primary hover:bg-primary hover:text-primary-content py-3"
                                    >
                                        View Details
                                    </Link>
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