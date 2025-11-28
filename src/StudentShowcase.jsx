import React, { useMemo, useState, useEffect } from "react";
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
            // paper: "#",
            // code: "#",
            // poster: "#",
        },
        cover:
            "/research/jupiter.png",
    },
    {
        title: "Application of Graph Neural Networks for Optimization and\n" +
            "Design of Modern Subway Systems\n",
        role: "Co‑author",
        year: "2024",
        summary:
            "Used Graph Neural Networks to optimize subway system design, achieving fast and accurate efficiency predictions for complex transportation networks.",
        tags: ["Graph Neural Networks", "Optimization", "Transportation Networks", "PyTorch Geometric", "Deep Learning"],
        links: {
            paper: "/research/Graph Neural Network for Optimization.pdf",
            // code: "#",
            // poster: "#",
        },
        cover:
            "/research/subway.png",
    },
    // {
    //     title: "Chaos in Pendulum Lattices",
    //     role: "Independent Study",
    //     year: "2024",
    //     summary:
    //         "Explored sensitivity to initial conditions in coupled pendula; estimated Lyapunov exponents and mapped phase space.",
    //     tags: ["Chaos Theory", "Dynamical Systems", "Mathematica"],
    //     links: { paper: "#" },
    //     cover:
    //         "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1400&auto=format&fit=crop",
    // },
];

const ART = [
    {
        title: "Math Made (Digital)",
        medium: "VSCode",
        category: "Video",
        year: "2025",
        src: "/YoungArtsFinalVideo.mov",
        mediaType: "video",
        // poster: "/youngarts-poster.jpg", // optional
        posterFrom: "last-frame",
    },
    {
        title: "In Our Hands",
        medium: "iPhone 13",
        category: "Photography",
        year: "2024",
        src: "/photos/InOurHands.jpg",
    },
    {
        title: "City's Last Audience",
        medium: "iPhone 13",
        category: "Photography",
        year: "2024",
        src: "/photos/city-last-audience.jpg",
    },
    // {
    //     title: "Hall of the Glass Mountains",
    //     medium: "iPhone 13",
    //     category: "Photography",
    //     year: "2024",
    //     src: "/photos/FullSizeRender 2.jpeg",
    // },
    {
        title: "Hall of the Glass Mountains",
        medium: "iPhone 13",
        category: "Photography",
        year: "2024",
        src: "/photos/GlassMountainPass.jpeg",
    },
    {
        title: "The Depthless City",
        medium: "iPhone 13",
        category: "Photography",
        year: "2024",
        src: "/photos/TheDepthlessCity.jpeg",
    },
    // {
    //     title: "Photo 1",
    //     medium: "iPhone 13",
    //     category: "Photography",
    //     year: "2023",
    //     src: "/photos/IMG_4292 copy.jpeg",
    // },
    // {
    //     title: "Photo 2",
    //     medium: "iPhone 13",
    //     category: "Photography",
    //     year: "2023",
    //     src: "/photos/IMG_A0B7FB475AA3-1.jpeg",
    // },
    // {
    //     title: "Photo 3",
    //     medium: "iPhone 13",
    //     category: "Photography",
    //     year: "2023",
    //     src: "/photos/IMG_A98BA3EE5928-1.jpeg",
    // },
    {
        title: "Lighted Maze",
        medium: "iPhone 13",
        category: "Photography",
        year: "2024",
        src: "/photos/LightedMaze.jpeg",
    },
    {
        title: "Liminal Friend",
        medium: "iPhone 13",
        category: "Photography",
        year: "2024",
        src: "/photos/LiminalFriend.jpeg",
    },
    {
        title: "Murky Skies",
        medium: "iPhone 13",
        category: "Photography",
        year: "2023",
        src: "/photos/MurkySkies.jpeg",
    },
    {
        title: "The Last Sunset",
        medium: "iPhone 13",
        category: "Photography",
        year: "2023",
        src: "/photos/IMG_5EFD2569C60D-1.jpeg",
    },
    {
        title: "Owner Beware",
        medium: "iPhone 13",
        category: "Photography",
        year: "2023",
        src: "/photos/OwnerBeware.jpeg",
    },
    {
        title: "Prickly Bubbles",
        medium: "iPhone 13",
        category: "Photography",
        year: "2023",
        src: "/photos/PricklyBubbles.jpeg",
    },
    // {
    //     title: "Photo 4",
    //     medium: "iPhone 13",
    //     category: "Photography",
    //     year: "2023",
    //     src: "/photos/ScreenShot.png",
    // },
    {
        title: "Architect's Reflection 1",
        medium: "Acrylic Paint",
        category: "Drawing",
        year: "2025",
        src: "/drawing/7.JPG",
    },
    {
        title: "Architect's Reflection 2",
        medium: "Acyrlic Paint",
        category: "Drawing",
        year: "2025",
        src: "/drawing/8.JPG",
    },
    {
        title: "Thought for Food",
        medium: "Colored Pencil, Pen",
        category: "Drawing",
        year: "2024",
        src: "/drawing/10.JPG",
    },
    {
        title: "Roots of America",
        medium: "Pen",
        category: "Drawing",
        year: "2024",
        src: "/drawing/15.jpg",
    },
    {
        title: "Monument",
        medium: "Pencil",
        category: "Drawing",
        year: "2023",
        src: "/drawing/9.jpg",
    },
    {
        title: "King of the School Yard",
        medium: "Watercolor",
        category: "Drawing",
        year: "2023",
        src: "/drawing/16-1.jpeg",
    },
    {
        title: "Shades of Reality",
        medium: "Pencil",
        category: "Drawing",
        year: "2023",
        src: "/drawing/17.JPG",
    },
    // {
    //     title: "Skylines (Watercolor)",
    //     medium: "Watercolor on paper",
    //     category: "Traditional",
    //     year: "2024",
    //     src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
    // },
    // {
    //     title: "Metropolis (Vector)",
    //     medium: "Adobe Illustrator",
    //     category: "Digital",
    //     year: "2025",
    //     src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop",
    // },
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
                                src="/photos/ScreenShot.png"
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
                            Hi! I’m <span className="font-semibold">Andrew Jo</span>, a student who loves building
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

function VideoThumb({ item, className }) {
    const [thumb, setThumb] = useState(item.poster || null);

    useEffect(() => {
        let cancelled = false;
        if (item.poster || item.posterFrom !== "last-frame") return;
        const video = document.createElement("video");
        video.crossOrigin = "anonymous";
        video.preload = "auto";
        video.src = item.src;
        const onLoaded = () => {
            // Seek to near the end to avoid potential exact duration seek issues
            const t = Math.max(0, (video.duration || 0) - 0.1);
            // Some browsers require a play-pause before seeking for certain codecs; guard silently.
            const seek = () => {
                try { video.currentTime = t; } catch { /* ignore */ }
            };
            if (video.readyState >= 1) seek();
        };
        const onSeeked = () => {
            try {
                const canvas = document.createElement("canvas");
                canvas.width = video.videoWidth || 1280;
                canvas.height = video.videoHeight || 720;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
                if (!cancelled) setThumb(dataUrl);
            } catch {
                // ignore drawing errors; leave thumb null
            }
        };
        video.addEventListener("loadedmetadata", onLoaded, { once: true });
        video.addEventListener("seeked", onSeeked, { once: true });
        // iOS sometimes doesn't fire loadedmetadata if not appended; append offscreen briefly
        document.body.appendChild(video);
        // Clean up
        return () => {
            cancelled = true;
            video.removeEventListener("loadedmetadata", onLoaded);
            video.removeEventListener("seeked", onSeeked);
            if (video.parentNode) video.parentNode.removeChild(video);
        };
    }, [item]);

    if (thumb) {
        return <img src={thumb} alt={item.title} className={className} />;
    }
    // Fallback to a lightweight metadata-only video thumbnail if extraction hasn't finished
    return (
        <video
            src={item.src}
            className={className}
            muted
            playsInline
            loop
            preload="metadata"
            poster={item.poster}
        />
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
                            {a.mediaType === "video" ? (
                                <VideoThumb item={a} className="h-full w-full object-cover group-hover:scale-[1.02] transition" />
                            ) : (
                                <img src={a.src} alt={a.title} className="h-full w-full object-cover group-hover:scale-[1.02] transition" />
                            )}
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
                        {items[openIndex].mediaType === "video" ? (
                            <video
                                src={items[openIndex].src}
                                className="w-full h-auto rounded-xl shadow-2xl"
                                controls
                                autoPlay
                                playsInline
                                poster={items[openIndex].poster}
                            />
                        ) : (
                            <img
                                src={items[openIndex].src}
                                alt={items[openIndex].title}
                                className="w-full h-auto rounded-xl shadow-2xl"
                            />
                        )}
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
