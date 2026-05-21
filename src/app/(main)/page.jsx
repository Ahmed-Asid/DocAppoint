import HeroSection from "../components/homepage/HeroSection";
import HowItWorks from "../components/homepage/HowItWorks";
import SpecialtiesSection from "../components/homepage/SpecialtiesSection";
import TopRatedDoc from "../components/homepage/TopRatedDoc";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <TopRatedDoc />
            <SpecialtiesSection />
            <HowItWorks />
        </div>
    );
}