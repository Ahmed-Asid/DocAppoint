import { FaMagnifyingGlass, FaCalendarDays, FaUserCheck } from "react-icons/fa6";

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: "Find a Doctor",
            description: "Search for doctors by specialty, location, or availability. Read verified patient reviews.",
            icon: FaMagnifyingGlass,
        },
        {
            id: 2,
            title: "Choose a Time",
            description: "View the doctor's real-time schedule and select a slot that fits perfectly into your day.",
            icon: FaCalendarDays,
        },
        {
            id: 3,
            title: "Book & Get Care",
            description: "Confirm your appointment securely. Receive reminders and manage everything from your dashboard.",
            icon: FaUserCheck,
        },
    ];

    return (
        <section className="py-16 lg:py-24 bg-base-200/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
                        How It Works
                    </h2>
                    <p className="text-base-content/70 max-w-2xl mx-auto text-lg">
                        Getting the healthcare you need has never been simpler. Just three easy steps.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">

                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-base-300 -z-10"></div>

                    {steps.map((step) => {
                        const Icon = step.icon;
                        return (
                            <div key={step.id} className="flex flex-col items-center text-center relative z-0">

                                <div className="absolute -top-5 w-8 h-8 rounded-full bg-base-100 border border-base-300 flex items-center justify-center font-bold text-base-content shadow-sm z-10">
                                    {step.id}
                                </div>

                                <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-primary-content shadow-lg mb-6 shadow-primary/20">
                                    <Icon className="text-4xl" />
                                </div>

                                <h3 className="text-xl font-bold text-base-content mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-base-content/70">
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default HowItWorks;