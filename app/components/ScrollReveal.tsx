'use client'

import { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({
    children,
}: {
    children: React.ReactNode
}) {
    const ref = useRef<HTMLDivElement | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (ref.current) observer.observe(ref.current)

        return () => {
            if (ref.current) observer.unobserve(ref.current)
        }
    }, [])

    return (
        <div ref={ref} className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {children}
        </div>
    )
}
