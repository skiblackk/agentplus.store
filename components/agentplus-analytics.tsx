"use client"

import { FeatureCarousel } from "@/components/ui/animated-feature-carousel";

export function AgentPlusAnalytics() {
    const images = {
        alt: "AgentPlus Platform Screenshot",
        step1img1: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1740&auto=format&fit=crop", // Omnichannel
        step1img2: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1740&auto=format&fit=crop",
        step2img1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop", // AI Training
        step2img2: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1740&auto=format&fit=crop",
        step3img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1740&auto=format&fit=crop", // Lead Qual
        step4img: "https://images.unsplash.com/photo-1521791136364-798a7bc0d262?q=80&w=1740&auto=format&fit=crop", // Handover
    };

    return (
        <section id="metrics" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
                        Live AI Intelligence
                    </h2>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                        See how AgentPlus orchestrates your business communications with surgical precision.
                    </p>
                </div>
                <FeatureCarousel image={images} />
            </div>
        </section>
    );
}
