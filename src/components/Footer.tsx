interface FooterLinkItem {
    label: string;
    href: string;
}

interface FooterColumn {
    title: string;
    links: FooterLinkItem[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
    {
        title: "RESOURCES",
        links: [
            { label: "Status", href: "#" },
            { label: "Contact", href: "#" },
            { label: "Security", href: "#" },
        ],
    },
    {
        title: "LEGAL",
        links: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
        ],
    },
];

const footerLinkClasses =
    "font-body-sm text-body-sm text-secondary hover:text-on-surface underline transition-all opacity-80 hover:opacity-100";

function FooterLinkColumn({ title, links }: FooterColumn) {
    return (
        <div className="space-y-4">
            <h5 className="font-label-caps text-label-caps text-on-surface">{title}</h5>
            <div className="flex flex-col gap-2">
                {links.map((link) => (
                    <a key={link.label} href={link.href} className={footerLinkClasses}>
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default function Footer() {
    return (
        <footer id="company" className="bg-surface border-t border-outline-variant">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter px-margin-desktop py-16 max-w-container-max-width mx-auto">
                <div className="space-y-6">
                    <div className="font-headline-md text-headline-md font-bold text-on-surface">Vertex</div>
                    <p className="font-body-sm text-body-sm text-secondary max-w-xs">
                        Architectural stability for the modern enterprise. Defined by precision, delivered with authority.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8 md:justify-items-end">
                    {FOOTER_COLUMNS.map((column) => (
                        <FooterLinkColumn key={column.title} {...column} />
                    ))}
                </div>
            </div>

            <div className="px-margin-desktop py-8 border-t border-outline-variant/30 max-w-container-max-width mx-auto">
                <p className="font-body-sm text-body-sm text-secondary opacity-60">
                    © 2026 Vertex Systems Inc. All rights reserved. Designed in New York.
                </p>
            </div>
        </footer>
    );
}