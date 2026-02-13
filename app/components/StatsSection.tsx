'use client'

import ScrollReveal from './ScrollReveal'
import { useEffect, useRef, useState } from 'react'

function Stat({ value, label }: { value: number; label: string }) {
    const [count, setCount] = useState(0)
    const ref = useRef<HTMLDivElement | null>(null)
    const hasAnimated = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true

                    let start = 0
                    const duration = 1500
                    const startTime = performance.now()

                    const animate = (currentTime: number) => {
                        const elapsed = currentTime - startTime
                        const progress = Math.min(elapsed / duration, 1)
                        const easeOut = 1 - Math.pow(1 - progress, 3)

                        setCount(Math.floor(easeOut * value))

                        if (progress < 1) {
                            requestAnimationFrame(animate)
                        }
                    }

                    requestAnimationFrame(animate)
                }
            },
            { threshold: 0.5 }
        )

        if (ref.current) observer.observe(ref.current)

        return () => {
            if (ref.current) observer.unobserve(ref.current)
        }
    }, [value])

    return (
        <div ref={ref}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-red-500">
                {count}+
            </h2>
            <p className="mt-3 text-gray-400 text-lg">{label}</p>
        </div>
    )
}

export default function StatsSection() {
    return (
        <section className="bg-black py-20 px-6">
            <ScrollReveal>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <Stat value={1200} label="Active Members" />
                        <Stat value={25} label="Expert Trainers" />
                        <Stat value={8} label="Years of Excellence" />
                    </div>
                </div>
            </ScrollReveal>
        </section>
    )
}