'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = () => {
    const pathname = usePathname();
    return (
        <>
            <li><Link href={'/'} className={`font-medium text-sm ${pathname === '/' && 'text-[#2563eb] active:scale-95 '}`}>Home</Link></li>
            <li><Link href={'/appointments'} className={`font-medium text-sm ${pathname === '/appointments' && 'text-[#2563eb] active:scale-95 '}`}>All Appointments</Link></li>
            <li><Link href={'/dashboard'} className={`font-medium text-sm ${pathname === '/dashboard' && 'text-[#2563eb] active:scale-95 '}`}>Dashboard</Link></li>
        </>
    );
};

export default NavLinks;