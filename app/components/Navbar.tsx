'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Membership', path: '/membership' },
    { name: 'Contact', path: '/contact' }
]

export default function Navbar() {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md">
            <nav className="w-full flex items-center justify-between px-8 md:px-16 py-4">
                {/* Logo */}
                <Link href='/' className="text-2xl font-bold tracking-wide text-white" onClick={() => setMenuOpen(false)}>ARMOUR GYM</Link>

                {/* NAV LINKS */}
                <ul className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link href={item.path} className={`text-sm font-medium transition ${pathname === item.path ? 'text-red-500' : 'text-gray-300 hover:text-white'}`}>{item.name}</Link>
                        </li>
                    ))}
                </ul>

                {/* CTA BUTTON */}
                <Link href="/membership" className="hidden md:inline-block rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-700 transition">Join Now</Link>

                {/* HAMBURGER OPTION */}
                <button className='md:hidden text-white text-3xl' onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? '✕' : '☰'}</button>
            </nav>

            {/* MOBILE MENU */}
            {menuOpen && (
                <div className="md:hidden bg-black border-t border-gray-800">
                    <ul className='flex flex-col px-6 py-4 space-y-4'>
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link href={item.path} onClick={() => setMenuOpen(false)} className={`block text-lg font-medium transition ${pathname === item.path ? 'text-red-500' : 'text-gray-300 hover:text-white'}`}>{item.name}</Link>
                            </li>
                        ))}
                        {/* MOBILE CTA BUTTON */}
                        <Link href="/membership" onClick={() => setMenuOpen(false)} className='mt-4 inline-block rounded-full bg-red-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-red-700 transition'>Join Now</Link>
                    </ul>
                </div>
            )}
        </header>
    )
}