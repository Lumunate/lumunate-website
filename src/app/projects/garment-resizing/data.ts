export const GarmentResizingData = {
    header: {
        background: {
            kind: "video" as const,
            src: "/videos/koinfolio-bg.mp4",
            poster: "/images/koinfolio-poster.jpg",
        },
        title: "Garment Resizing",
        subtitle: "Automated Garment Sizing Tool",
        description:
            "The Automated Garment Sizing & Recommendation Tool delivers a production-ready, data-driven sizing experience designed to reduce uncertainty in apparel purchasing. Embedded directly within the website’s hero section, the tool translates body measurements into accurate size recommendations using manufacturer-defined garment charts. The result is a professional, trustworthy sizing solution that supports both individual customers and large teams while improving purchase confidence and operational efficiency.",
        meta: [
            { label: "Year", value: "2025" },
            {
                label: "Timeline",
                items: [
                    { label: "", value: "Under Development" },
                ],
            },
            { label: "End to End Users", value: "6,000+" },
        ],
    },

    challenges: {
        title: "Challenges",
        description:
            "Garment sizing is prone to inconsistency due to varied manufacturer charts, relaxed vs stretched measurements, and differing fit preferences. The client’s existing implementation was partially complete but relied on hard-coded logic, lacked robust validation, and did not support scalable manufacturer onboarding. The challenge was to consolidate sizing logic, refine the user experience, and deliver a production-ready system without compromising future extensibility.",
        imageSrc: "/case-studies/TCR-1.svg",
    },

    impact: {
        points: [
            "Improved sizing accuracy and confidence through manufacturer-aligned logic",
            " Reduced friction for both individual and bulk ordering workflows",
            "Delivered a production-ready tool embedded seamlessly into the website experience",
            "Established a scalable foundation for future manufacturer onboarding and productisation",
        ],
        services: ["ERP & SaaS Development", "Web Development", "UI/UX Design", "Cloud & Compliance Architecture"],
    },
    success: {
        story:
            "They were very easy to work with, were transparent about their process, well-organized and had great time management skills. In fact, often times they completed tasks faster than we agreed upon.",
        name: "// Derek Rourke - ",
        role: "CEO, XS Uniforms",
    },
};
