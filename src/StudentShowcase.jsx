import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

// --- SAMPLE DATA (edit me!) ---
const RESEARCH = [
    {
        title: "Turbulence Patterns on Jupiter",
        role: "Lead Researcher",
        year: "2025",
        summary:
            "Modeled shallow-water equations to study Great Red Spot longevity; replicated vortex shedding phenomena.",
        tags: ["Fluid Dynamics", "Numerical Methods", "Python"],
        links: {
            paper: "#",
            code: "#",
            poster: "#",
        },
        cover:
            "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1400&auto=format&fit=crop",
    },
    {
        title: "Lightweight ViT-LSTM for VQA 2.0",
        role: "Co‑author",
        year: "2025",
        summary:
            "Designed compact ViT encoder with LSTM decoder for visual question answering; achieved strong accuracy with low compute.",
        tags: ["Computer Vision", "Transformers", "PyTorch"],
        links: {
            paper: "#",
            code: "#",
            poster: "#",
        },
        cover:
            "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop",
    },
    {
        title: "Chaos in Pendulum Lattices",
        role: "Independent Study",
        year: "2024",
        summary:
            "Explored sensitivity to initial conditions in coupled pendula; estimated Lyapunov exponents and mapped phase space.",
        tags: ["Chaos Theory", "Dynamical Systems", "Mathematica"],
        links: { paper: "#" },
        cover:
            "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1400&auto=format&fit=crop",
    },
];

const ART = [
    {
        title: "Midnight Alley (Oil)",
        medium: "Oil on canvas",
        category: "Traditional",
        year: "2024",
        src: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=1400&auto=format&fit=crop",
    },
    {
        title: "Neon Dreams (Digital)",
        medium: "Procreate / iPad",
        category: "Digital",
        year: "2025",
        src: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1400&auto=format&fit=crop",
    },
    {
        title: "Quiet Library (Photo)",
        medium: "35mm film",
        category: "Photography",
        year: "2023",
        src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1400&auto=format&fit=crop",
    },
    {
        title: "Skylines (Watercolor)",
        medium: "Watercolor on paper",
        category: "Traditional",
        year: "2024",
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
    },
    {
        title: "Metropolis (Vector)",
        medium: "Adobe Illustrator",
        category: "Digital",
        year: "2025",
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop",
    },
];

// --- SMALL UTILITIES ---
const Badge = ({ children }) => (
    <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium">
    {children}
  </span>
);

const Section = ({ id, title, children }) => (
    <section id={id} className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
            <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-3xl font-bold tracking-tight mb-6"
            >
                {title}
            </motion.h2>
            {children}
        </div>
    </section>
);

const Card = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border shadow-sm overflow-hidden bg-white"
    >
        {children}
    </motion.div>
);

export default function StudentShowcase() {
    const [showResume, setShowResume] = useState(false);
    const [resumeUrl] = useState('/resume.pdf');
    const [artFilter, setArtFilter] = useState("All");
    const artCategories = useMemo(
        () => ["All", ...Array.from(new Set(ART.map((a) => a.category)))],
        []
    );

    const filteredArt = useMemo(
        () => (artFilter === "All" ? ART : ART.filter((a) => a.category === artFilter)),
        [artFilter]
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
            {/* NAV */}
            <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b">
                <div className="mx-auto max-w-6xl px-4 flex items-center justify-between h-14">
                    <a href="#home" className="font-semibold tracking-tight">Andrew Jo</a>
                    <nav className="hidden sm:flex gap-6 text-sm">
                        <a className="hover:opacity-70" href="#research">Research</a>
                        <a className="hover:opacity-70" href="#art">Art</a>
                        <a className="hover:opacity-70" href="#achievements">Achievements</a>
                        <a className="hover:opacity-70" href="#about">About</a>
                        <a className="hover:opacity-70" href="#contact">Contact</a>
                    </nav>
                    <button
                        onClick={() => setShowResume(true)}
                        className="text-sm rounded-xl border px-3 py-1.5 hover:shadow-sm"
                    >
                        Resume
                    </button>
                </div>
            </header>

            {/* HERO */}
            <section id="home" className="relative overflow-hidden">
                <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="grid gap-8 sm:grid-cols-2 items-center"
                    >
                        <div>
                            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                                Researcher • Artist • Student
                            </h1>
                            <p className="mt-4 text-base sm:text-lg text-slate-600">
                                I’m a high school student focused on <span className="font-medium">math, computer science, and visual arts</span>.
                                This is my portfolio with selected research projects and artwork.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <a href="#research" className="rounded-xl border px-4 py-2 text-sm font-medium hover:shadow">Explore Research</a>
                                <a href="#art" className="rounded-xl border px-4 py-2 text-sm font-medium hover:shadow">View Artworks</a>
                            </div>
                            <div className="mt-6 flex gap-2 text-xs text-slate-500">
                                <Badge>STEM</Badge>
                                <Badge>Creativity</Badge>
                                <Badge>Leadership</Badge>
                            </div>
                        </div>
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden border shadow-sm">
                            <img
                                alt="cover"
                                className="h-full w-full object-cover"
                                src="/andrew.jpg"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* RESEARCH */}
            <Section id="research" title="Research Projects">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {RESEARCH.map((r) => (
                        <Card key={r.title}>
                            <div className="aspect-[16/9] w-full overflow-hidden">
                                <img src={r.cover} alt="cover" className="h-full w-full object-cover" />
                            </div>
                            <div className="p-5">
                                <div className="flex items-center justify-between gap-2">
                                    <h3 className="text-lg font-semibold leading-snug">{r.title}</h3>
                                    <span className="text-xs text-slate-500">{r.year}</span>
                                </div>
                                <p className="mt-1 text-xs text-slate-500">{r.role}</p>
                                <p className="mt-3 text-sm text-slate-600">{r.summary}</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {r.tags.map((t) => (
                                        <Badge key={t}>{t}</Badge>
                                    ))}
                                </div>
                                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                                    {r.links.paper && (
                                        <a href={r.links.paper} className="underline underline-offset-4">Paper</a>
                                    )}
                                    {r.links.code && (
                                        <a href={r.links.code} className="underline underline-offset-4">Code</a>
                                    )}
                                    {r.links.poster && (
                                        <a href={r.links.poster} className="underline underline-offset-4">Poster</a>
                                    )}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* ART */}
            <Section id="art" title="Art Portfolio">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                    {artCategories.map((c) => (
                        <button
                            key={c}
                            onClick={() => setArtFilter(c)}
                            className={`rounded-xl border px-3 py-1 text-sm ${
                                c === artFilter ? "bg-slate-900 text-white" : "hover:shadow"
                            }`}
                        >
                            {c}
                        </button>
                    ))}
                </div>
                <Gallery items={filteredArt} />
            </Section>

            {/* ACHIEVEMENTS */}
            <Section id="achievements" title="Selected Achievements">
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                    {[
                        // "Regeneron STS Semifinalist (Top 300)",
                        "FIRST Robotics – Scouting Lead, Worlds qualifier",
                        "MIT Beaver Works – Dr. Bob Disruptive Engineering Award",
                        "AIME Qualifier",
                        "USACO Silver"
                    ].map((a) => (
                        <li key={a} className="rounded-2xl border bg-white p-4">
                            {a}
                        </li>
                    ))}
                </ul>
            </Section>

            {/* ABOUT */}
            <Section id="about" title="About Me">
                <div className="grid gap-6 sm:grid-cols-3">
                    <div className="sm:col-span-2">
                        <p className="text-slate-700 leading-7">
                            Hi! I’m <span className="font-semibold">Your Name</span>, a student who loves building
                            things at the intersection of science and art. I enjoy research in
                            <span className="font-medium"> computer vision, fluid dynamics, and dynamical systems</span> and I create
                            artwork in both traditional and digital mediums.
                        </p>
                        <p className="text-slate-700 leading-7 mt-3">
                            Outside the classroom, I lead clubs, compete in STEM contests, and mentor younger students.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
                            <Badge>Curiosity‑driven</Badge>
                            <Badge>Team‑oriented</Badge>
                            <Badge>Impact‑focused</Badge>
                        </div>
                    </div>
                    <div className="rounded-2xl border bg-white p-4">
                        <h4 className="font-semibold">Quick Facts</h4>
                        <dl className="mt-2 text-sm space-y-1">
                            <div className="flex justify-between"><dt>Location</dt><dd>Los Angeles, CA</dd></div>
                            <div className="flex justify-between"><dt>Graduation</dt><dd>Class of 2026</dd></div>
                            <div className="flex justify-between"><dt>Interests</dt><dd>AI, Math, Painting</dd></div>
                        </dl>
                    </div>
                </div>
            </Section>

            {/* CONTACT */}
            <Section id="contact" title="Contact">
                <div className="rounded-2xl border bg-white p-6">
                    <p className="text-sm text-slate-600">
                        I’m happy to share full papers, process journals, or discuss collaboration.
                        Email me at <a className="underline" href="mailto:you@example.com">you@example.com</a> or connect via
                        <a className="underline ml-1" href="#">LinkedIn</a> / <a className="underline" href="#">GitHub</a> / <a className="underline" href="#">Instagram</a>.
                    </p>
                </div>
            </Section>

            {/* FOOTER */}
            <footer className="py-10 text-center text-xs text-slate-500">
                © {new Date().getFullYear()} Your Name. All rights reserved.
            </footer>

            {/* Resume Modal */}
            {showResume && (
                <div
                    className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setShowResume(false)}
                >
                    <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border overflow-hidden" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between px-4 py-3 border-b">
                            <h3 className="font-semibold">Resume Preview</h3>
                            <div className="flex items-center gap-2">
                                <a
                                    href={resumeUrl}
                                    download
                                    className="text-sm rounded-xl border px-3 py-1.5 hover:shadow-sm"
                                >
                                    Download PDF
                                </a>
                                <button
                                    onClick={() => setShowResume(false)}
                                    className="text-sm rounded-xl border px-3 py-1.5 hover:shadow-sm"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                        <div className="h-[70vh] bg-slate-50">
                            <iframe
                                title="Resume"
                                src={`${resumeUrl}#view=FitH`}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function Gallery({ items }) {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((a, idx) => (
                    <motion.button
                        key={a.title}
                        onClick={() => setOpenIndex(idx)}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="group text-left rounded-2xl border bg-white overflow-hidden"
                    >
                        <div className="aspect-[4/3] overflow-hidden">
                            <img src={a.src} alt={a.title} className="h-full w-full object-cover group-hover:scale-[1.02] transition" />
                        </div>
                        <div className="p-4">
                            <h4 className="font-semibold text-sm">{a.title}</h4>
                            <p className="text-xs text-slate-500 mt-1">
                                {a.medium} • {a.year}
                            </p>
                        </div>
                    </motion.button>
                ))}
            </div>

            {/* Lightbox */}
            {openIndex !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setOpenIndex(null)}
                >
                    <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-end mb-2">
                            <button
                                onClick={() => setOpenIndex(null)}
                                className="rounded-full border px-3 py-1 text-white border-white/40"
                            >
                                Close
                            </button>
                        </div>
                        <img
                            src={items[openIndex].src}
                            alt={items[openIndex].title}
                            className="w-full h-auto rounded-xl shadow-2xl"
                        />
                        <div className="mt-3 text-center text-white">
                            <div className="font-semibold">{items[openIndex].title}</div>
                            <div className="text-sm opacity-90">
                                {items[openIndex].medium} • {items[openIndex].year}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
