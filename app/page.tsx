export default function HomePage() {
    return (
        <main>
            {/* HERO SECTION */}
            <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black px-6">
                {/* BACKGROUND GLOW */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.15),transparent_60%)]" />

                {/* CONTENT */}
                <div className="relative z-10 max-w-4xl text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                        Forge Your <span className="text-red-500">Strongest</span> Body
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-300">
                        Premium training • Expert coaches • Real results  
                        <br className="hidden md:block" />
                        Welcome to Armour Gym Manjalpur
                    </p>

                    {/* BUTTONS */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/membership" className="rounded-full bg-red-600 px-8 py-3 text-base font-semibold text-white hover:bg-red-700 transition">
                            Join Now
                        </a>
                        <a href="/about" className="rounded-full border border-gray-500 px-8 py-3 text-base font-semibold text-white hover:border-white transition">
                            Learn More
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}