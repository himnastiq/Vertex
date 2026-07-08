interface NavLinkItem {
    label: string;
    href: string;
}

const NAV_LINKS: NavLinkItem[] = [
    { label: "Product", href: "#product" },
    { label: "Solutions", href: "#solutions" },
    { label: "Pricing", href: "#pricing" },
    { label: "Company", href: "#company" },
];

function NavLink({ label, href, active = false }: NavLinkItem & { active?: boolean }) {
    return (
        <a
            href={href}
            className={`font-body-md text-body-md transition-editorial ${active ? "text-primary" : "text-secondary hover:text-primary"
                }`
            }
        >

            {label}
        </a >
    );
}

function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30">
            <div className="flex justify-between items-center px-margin-desktop py-4 max-w-container-max-width mx-auto">
                <div className="font-headline-md text-headline-md text-on-surface">Vertex</div>

                <div className="hidden md:flex gap-8">
                    {NAV_LINKS.map((link, i) => (
                        <NavLink key={link.label} {...link} active={i === 0} />
                    ))}
                </div>

                <button className="bg-primary text-on-primary px-6 py-2 font-body-md font-medium transition-editorial hover:scale-95 active:scale-90 rounded-none">
                    Request Access
                </button>
            </div>
        </nav>
    );
}

export default Navbar;