import Link from "next/link";
import { FaHeartPulse, FaBrain, FaTooth, FaBaby, FaBone, FaEye } from "react-icons/fa6";

const SpecialtiesSection = () => {
    const specialties = [
        { id: 1, name: "Cardiology", icon: FaHeartPulse, color: "text-rose-500", bg: "bg-rose-500/10" },
        { id: 2, name: "Neurology", icon: FaBrain, color: "text-purple-500", bg: "bg-purple-500/10" },
        { id: 3, name: "Dentistry", icon: FaTooth, color: "text-blue-500", bg: "bg-blue-500/10" },
        { id: 4, name: "Pediatrics", icon: FaBaby, color: "text-green-500", bg: "bg-green-500/10" },
        { id: 5, name: "Orthopedics", icon: FaBone, color: "text-orange-500", bg: "bg-orange-500/10" },
        { id: 6, name: "Ophthalmology", icon: FaEye, color: "text-teal-500", bg: "bg-teal-500/10" },
    ];

    return (
        <section className="py-16 lg:py-24 bg-base-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-3">
                            Browse by Specialty
                        </h2>
                        <p className="text-base-content/70 text-lg max-w-xl">
                            Find experienced doctors across all specialties to get the exact care you need.
                        </p>
                    </div>
                    <Link href="/#" className="text-primary font-semibold hover:underline">
                        See All Specialties &rarr;
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {specialties.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.id}
                                href={''}
                                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-base-200 hover:bg-base-300 transition-colors border border-base-300 hover:border-primary/30 group cursor-pointer"
                            >
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${item.bg} group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className={`text-3xl ${item.color}`} />
                                </div>
                                <span className="font-semibold text-base-content group-hover:text-primary transition-colors">
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SpecialtiesSection;