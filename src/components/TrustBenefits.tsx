interface Company {
    label: string;
}

const COMPANIES: Company[] = [
    { label: "Stripe" },
    { label: "Linear" },
    { label: "Vercel" },
    { label: "Scale" },
    { label: "Mercury" },
];

interface BenefitCardProps {
    title: string;
    description: string;
}

const BENEFITS: BenefitCardProps[] = [
    {
        title: "Uncompromising Clarity",
        description:
            "Eliminate ambiguity with a disciplined interface designed for rapid data ingestion. No decorative noise, only pure signal.",
    },
    {
        title: "Deep Credibility",
        description:
            "Data integrity verified through exhaustive audit trails. Trust your insights with enterprise-grade provenance tracking.",
    },
    {
        title: "Architectural Stability",
        description:
            "A robust foundation built on 12-column logic and strict baseline rhythms. Scalability is woven into the core infrastructure.",
    },
];

function BenefitCard({ title, description }: BenefitCardProps) {
    return (
        <div className="space-y-6 group">
            <div className="h-1 w-12 bg-primary group-hover:w-full transition-all duration-500" />
            <h3 className="font-headline-md text-headline-md">{title}</h3>
            <p className="font-body-md text-body-md text-secondary leading-relaxed">
                {description}
            </p>
        </div>
    );
}

export default function TrustBenefits() {
    return (
        <>
            {/* Trust Section */}
            <section id="solutions" className="py-16 px-margin-desktop border-t border-b border-outline-variant/30 bg-surface">
                <div className="max-w-container-max-width mx-auto">
                    <p className="font-label-caps text-label-caps text-secondary text-center mb-10">TRUSTED BY INDUSTRY ARCHITECTS</p>
                    <div className="flex flex-wrap justify-center items-center gap-16 opacity-40 grayscale transition-all">
                        {COMPANIES.map((company) => (
                            <span key={company.label} className="font-headline-md text-headline-md font-bold tracking-tighter">
                                {company.label}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-32 px-margin-desktop max-w-container-max-width mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {BENEFITS.map((benefit) => (
                        <BenefitCard key={benefit.title} {...benefit} />
                    ))}
                </div>
            </section>
        </>
    );
}
