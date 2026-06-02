'use client'

import Link from "next/link";
import { FaStethoscope } from "react-icons/fa6";
import NavLinks from "./NavLinks";
import { BiMenu } from "react-icons/bi";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    const id = session?.user.id;

    return (
        <header className="sticky top-0 z-50 w-full bg-base-100/90 backdrop-blur-md border-b border-base-200 shadow-sm">
            <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden -ml-2" aria-label="Menu">
                            <BiMenu size={30} />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-lg border border-base-200"
                        >
                            <NavLinks />
                        </ul>
                    </div>

                    <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <div className="bg-primary text-primary-content p-2 rounded-lg">
                            <FaStethoscope className="text-xl" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-base-content">
                            Doc<span className="text-primary">Appoint</span>
                        </span>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <NavLinks />
                    </ul>
                </div>

                <div className="navbar-end gap-3">
                    {isPending ? <div className="navbar-end"><span className="loading loading-spinner text-primary"></span></div> :
                        user ?
                            <>
                                <div className="avatar">
                                    <div className="w-10 h-10 rounded-full relative">
                                        <Image priority={true} src={user.image} alt="user" fill />
                                    </div>
                                </div>
                                <Link href={'/'}><div onClick={async () => await authClient.signOut()} className="font-semibold hover:text-red-500 active:scale-95">Log out</div></Link>
                            </>
                            :
                            <>
                                <Link href="/login" className="btn btn-ghost btn-sm sm:btn-md font-semibold hidden sm:inline-flex">
                                    Log in
                                </Link>
                                <Link href="/register" className="btn btn-primary btn-sm sm:btn-md font-semibold shadow-sm">
                                    Register
                                </Link>
                            </>
                    }

                </div>

            </div>
        </header>
    );
};

export default Navbar;