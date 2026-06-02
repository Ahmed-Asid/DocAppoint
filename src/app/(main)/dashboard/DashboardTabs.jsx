'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";


const DashBoardTabs = () => {

    const pathname = usePathname();

    return (
        <>
            <nav className="w-fit mx-auto mt-5">
                <ul className="flex gap-3">
                    <li><Link href="/dashboard" className={`p-2 font-semibold ${pathname === '/dashboard' ? 'text-blue-500 border-b-2 border-blue' : 'text-gray-400'}`}>My Appointments</Link></li>
                    <li><Link href="/dashboard/profile" className={`p-2 font-semibold ${pathname === '/dashboard/profile' ? 'text-blue-500 border-b-2 border-blue' : 'text-gray-400'}`}>Profile</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default DashBoardTabs;