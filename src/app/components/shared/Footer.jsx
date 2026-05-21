import Link from "next/link";
import { FaStethoscope, FaFacebook, FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-base-300 text-base-content border-t border-base-200">

            <div className="footer max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <div className="bg-primary text-primary-content p-2 rounded-lg">
                            <FaStethoscope className="text-lg" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">
                            Doc<span className="text-primary">Appoint</span>
                        </span>
                    </div>
                    <p className="text-base-content/70 text-sm max-w-xs mt-2 leading-relaxed">
                        Making quality healthcare accessible, reliable, and entirely hassle-free. Book your appointments with top verified professionals today.
                    </p>
                </div>

                <div>
                    <h6 className="footer-title text-base-content font-bold opacity-100 tracking-wide mb-3">For Patients</h6>
                    <div className="flex flex-col gap-2 text-sm text-base-content/70">
                        <Link href="/doctors" className="hover:text-primary hover:underline transition-all">Search for Doctors</Link>
                        <Link href="/login" className="hover:text-primary hover:underline transition-all">Patient Login</Link>
                        <Link href="/register" className="hover:text-primary hover:underline transition-all">Create an Account</Link>
                        <Link href="/appointments" className="hover:text-primary hover:underline transition-all">My Bookings</Link>
                    </div>
                </div>

                <div>
                    <h6 className="footer-title text-base-content font-bold opacity-100 tracking-wide mb-3">Specialties</h6>
                    <div className="flex flex-col gap-2 text-sm text-base-content/70">
                        <Link href="/doctors?specialty=cardiology" className="hover:text-primary hover:underline transition-all">Cardiology</Link>
                        <Link href="/doctors?specialty=neurology" className="hover:text-primary hover:underline transition-all">Neurology</Link>
                        <Link href="/doctors?specialty=pediatrics" className="hover:text-primary hover:underline transition-all">Pediatrics</Link>
                        <Link href="/doctors?specialty=dentistry" className="hover:text-primary hover:underline transition-all">Dentistry</Link>
                    </div>
                </div>

                <div>
                    <h6 className="footer-title text-base-content font-bold opacity-100 tracking-wide mb-3">Company</h6>
                    <div className="flex flex-col gap-2 text-sm text-base-content/70">
                        <Link href="/about" className="hover:text-primary hover:underline transition-all">About Us</Link>
                        <Link href="/contact" className="hover:text-primary hover:underline transition-all">Contact Support</Link>
                        <Link href="/privacy" className="hover:text-primary hover:underline transition-all">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary hover:underline transition-all">Terms of Service</Link>
                    </div>
                </div>

            </div>

            <div className="bg-base-300 border-t border-base-content/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

                    <p className="text-sm text-base-content/60 text-center sm:text-left">
                        &copy; {currentYear} DocAppoint. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4 text-lg text-base-content/75">
                        <Link href={'https://facebook.com'} target="_blank" className="hover:text-primary transition-colors">
                            <FaFacebook />
                        </Link>
                        <Link href={'https://twitter.com'} target="_blank" className="hover:text-primary transition-colors">
                            <FaXTwitter />
                        </Link>
                        <Link href={'https://linkedin.com'} target="_blank" className="hover:text-primary transition-colors">
                            <FaLinkedin />
                        </Link>
                        <Link href={'https://instagram.com'} target="_blank" className="hover:text-primary transition-colors">
                            <FaInstagram />
                        </Link>

                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;