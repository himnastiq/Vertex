interface Feature {
    label: string;
    included: boolean;
}

interface PricingTier {
    name: string;
    description: string;
    price: string;
    priceUnit?: string;
    features: Feature[];
    cta: string;
    highlighted?: boolean;
    badge?: string;
}

const PRICING_TIERS: PricingTier[] = [
    {
        name: "Starter",
        description: "Ideal for emerging teams.",
        price: "$0",
        priceUnit: "/mo",
        features: [
            { label: "3 Core Projects", included: true },
            { label: "Editorial Canvas", included: true },
            { label: "SSO Integration", included: false },
        ],
        cta: "Choose Starter",
    },
    {
        name: "Professional",
        description: "For high-performance organizations.",
        price: "$129",
        priceUnit: "/mo",
        features: [
            { label: "Unlimited Projects", included: true },
            { label: "Advanced Governance", included: true },
            { label: "Custom Taxonomy", included: true },
        ],
        cta: "Upgrade Now",
        highlighted: true,
        badge: "RECOMMENDED",
    },
    {
        name: "Enterprise",
        description: "Customized for scale.",
        price: "Custom",
        features: [
            { label: "Dedicated Architecture", included: true },
            { label: "White-glove Onboarding", included: true },
            { label: "Global Node Deployment", included: true },
        ],
        cta: "Contact Sales",
    },
];

function FeatureItem({ label, included, highlighted }: Feature & { highlighted?: boolean }) {
    return (
        <li className={`flex items-center gap-3 font-body-sm ${
            highlighted
                ? "text-white"
                : included ? "" : "text-secondary/50"
        }`}>
            <span className="material-symbols-outlined text-[18px]">
                {included ? "check" : "close"}
            </span>
            {label}
        </li>
    );
}

function PricingCard({ tier }: { tier: PricingTier }) {
    if (tier.highlighted) {
        return (
            <div className="editorial-border p-10 flex flex-col bg-on-surface text-white relative">
                {tier.badge && (
                    <div className="absolute top-0 right-10 bg-primary text-[10px] font-bold px-3 py-1 font-label-caps">
                        {tier.badge}
                    </div>
                )}
                <div className="mb-8">
                    <h4 className="font-headline-md text-headline-md mb-2 text-white">{tier.name}</h4>
                    <p className="font-body-sm text-body-sm text-surface-container-highest">{tier.description}</p>
                </div>
                <div className="mb-8">
                    <span className="text-[40px] font-bold">{tier.price}</span>
                    {tier.priceUnit && <span className="text-surface-container-highest">{tier.priceUnit}</span>}
                </div>
                <ul className="space-y-4 mb-12 flex-grow">
                    {tier.features.map((feature) => (
                        <FeatureItem key={feature.label} {...feature} highlighted />
                    ))}
                </ul>
                <button className="w-full bg-primary py-3 font-bold hover:brightness-110 transition-editorial">
                    {tier.cta}
                </button>
            </div>
        );
    }

    return (
        <div className="editorial-border p-10 flex flex-col transition-editorial hover:border-on-surface">
            <div className="mb-8">
                <h4 className="font-headline-md text-headline-md mb-2">{tier.name}</h4>
                <p className="font-body-sm text-body-sm text-secondary">{tier.description}</p>
            </div>
            <div className="mb-8">
                <span className="text-[40px] font-bold">{tier.price}</span>
                {tier.priceUnit && <span className="text-secondary">{tier.priceUnit}</span>}
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
                {tier.features.map((feature) => (
                    <FeatureItem key={feature.label} {...feature} />
                ))}
            </ul>
            <button className="w-full border border-on-surface py-3 font-bold hover:bg-on-surface hover:text-white transition-editorial">
                {tier.cta}
            </button>
        </div>
    );
}

export default function Pricing() {
    return (
        <section id="pricing" className="py-32 px-margin-desktop max-w-container-max-width mx-auto">
            <div className="text-center mb-20">
                <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4">Scalable Infrastructure</h2>
                <p className="font-body-md text-body-md text-secondary">Investment models designed for teams that value longevity.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {PRICING_TIERS.map((tier) => (
                    <PricingCard key={tier.name} tier={tier} />
                ))}
            </div>
        </section>
    );
}
