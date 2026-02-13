import ScrollReveal from '../components/ScrollReveal'

export default function MembershipPage() {
    return (
        <main className="bg-black text-white min-h-screen py-24 px-6">
            {/* HEADING */}
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold">
                    Choose Your <span className="text-red-500">Membership</span>
                </h1>
                <p className="mt-4 text-gray-400 text-lg">
                    Flexible plans designed for every fitness level
                </p>
            </div>

            {/* PRICING CARDS */}
            <ScrollReveal>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {/* BASIC PLAN */}
                    <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-red-500 transition transform hover:-translate-y-2 duration-300">
                        <h2 className="text-2xl font-bold">Basic</h2>
                        <p className="mt-4 text-4xl font-extrabold text-red-500">
                            ₹999<span className="text-base text-gray-400">/month</span>
                        </p>
                        <ul className="mt-6 space-y-3 text-gray-400">
                            <li>✔ Access to gym equipment</li>
                            <li>✔ Locker facility</li>
                            <li>✔ Free fitness assessment</li>
                        </ul>
                        <button className="mt-8 w-full rounded-full bg-red-600 py-3 font-semibold hover:bg-red-700 transition">
                            Join Basic
                        </button>
                    </div>
                    {/* PRO PLAN (HIGHLIGHTED) */}
                    <div className="bg-zinc-900 p-8 rounded-2xl border-2 border-red-500 scale-105 shadow-lg shadow-red-500/20">
                        <h2 className="text-2xl font-bold">Pro</h2>
                        <p className="mt-4 text-4xl font-extrabold text-red-500">
                            ₹1999<span className="text-base text-gray-400">/month</span>
                        </p>
                        <ul className="mt-6 space-y-3 text-gray-300">
                            <li>✔ Everything in Basic</li>
                            <li>✔ Personal trainer guidance</li>
                            <li>✔ Diet consultation</li>
                            <li>✔ Group classes access</li>
                        </ul>
                        <button className="mt-8 w-full rounded-full bg-red-600 py-3 font-semibold hover:bg-red-700 transition">
                            Join Pro
                        </button>
                    </div>

                    {/* ELITE PLAN */}
                    <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-red-500 transition transform hover:-translate-y-2 duration-300">
                        <h2 className="text-2xl font-bold">Elite</h2>
                        <p className="mt-4 text-4xl font-extrabold text-red-500">
                            ₹2999<span className="text-base text-gray-400">/month</span>
                        </p>
                        <ul className="mt-6 space-y-3 text-gray-400">
                            <li>✔ Everything in Pro</li>
                            <li>✔ Dedicated personal trainer</li>
                            <li>✔ Customized diet plan</li>
                            <li>✔ Priority support</li>
                        </ul>
                        <button className="mt-8 w-full rounded-full bg-red-600 py-3 font-semibold hover:bg-red-700 transition">
                            Join Elite
                        </button>
                    </div>
                </div>
            </ScrollReveal>
        </main>
    )
}