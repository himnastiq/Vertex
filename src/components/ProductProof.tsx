interface SidebarNavItem {
    icon: string;
    label: string;
    isActive?: boolean;
}

const SIDEBAR_NAV_ITEMS: SidebarNavItem[] = [
    { icon: "analytics", label: "Dashboard", isActive: true },
    { icon: "layers", label: "Infrastructure" },
    { icon: "security", label: "Governance" },
];

interface ThroughputEntry {
    label: string;
    percentage: number;
}

const THROUGHPUT_DATA: ThroughputEntry[] = [
    { label: "Global Node A", percentage: 82 },
    { label: "Global Node B", percentage: 14 },
    { label: "Standby", percentage: 4 },
];

function ThroughputBar({ label, percentage }: ThroughputEntry) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between text-body-sm">
                <span>{label}</span>
                <span className="font-mono">{percentage}%</span>
            </div>
            <div className="h-1 w-full bg-outline-variant/30">
                <div className="h-full bg-on-surface" style={{ width: `${percentage}%` }} />
            </div>
        </div>
    );
}

export default function ProductProof() {
    return (
        <section id="product" className="py-32 bg-surface-container-low px-margin-desktop overflow-hidden">
            <div className="max-w-container-max-width mx-auto">
                <div className="mb-16 max-w-2xl">
                    <span className="font-label-caps text-label-caps text-primary border border-primary px-3 py-1 mb-4 inline-block">SYSTEM PROOF</span>
                    <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6">Designed for Focus.</h2>
                    <p className="font-body-lg text-body-lg text-secondary">A layout that respects the viewer's intelligence by prioritizing hierarchy over volume.</p>
                </div>
                <div className="bg-white editorial-border p-8 md:p-12 shadow-sm relative group overflow-hidden">
                    <div className="grid grid-cols-12 gap-8">
                        {/* Sidebar Fragment */}
                        <div className="hidden lg:block col-span-3 space-y-8 border-r border-outline-variant/30 pr-8">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-on-surface" />
                                <span className="font-bold">Vertex OS</span>
                            </div>
                            <nav className="space-y-4">
                                {SIDEBAR_NAV_ITEMS.map((item) => (
                                    <div
                                        key={item.label}
                                        className={`font-body-sm text-body-sm flex items-center gap-2 ${
                                            item.isActive ? "text-primary font-semibold" : "text-secondary"
                                        }`}
                                    >
                                        <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                                        {item.label}
                                    </div>
                                ))}
                            </nav>
                        </div>

                        {/* Dashboard Main */}
                        <div className="col-span-12 lg:col-span-9 space-y-8">
                            <div className="flex justify-between items-end border-b border-on-surface pb-4">
                                <h4 className="font-headline-md text-headline-md">System Overview</h4>
                                <div className="font-label-caps text-label-caps text-secondary">Q3 UPDATED 2M AGO</div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="editorial-border p-6 h-48 bg-surface-container-lowest">
                                        <div className="font-label-caps text-label-caps text-secondary mb-2">NETWORK VELOCITY</div>
                                        <div className="text-[32px] font-bold">1.84 <span className="text-body-sm font-normal text-secondary">ms</span></div>
                                        <div className="mt-4 h-16 w-full relative">
                                            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
                                            <div className="absolute bottom-0 w-full h-[2px] bg-primary" />
                                        </div>
                                    </div>
                                    <div className="editorial-border p-6 h-32 flex items-center justify-between">
                                        <div>
                                            <div className="font-label-caps text-label-caps text-secondary">UPTIME</div>
                                            <div className="text-headline-md font-bold">99.998%</div>
                                        </div>
                                        <span className="material-symbols-outlined text-primary">check_circle</span>
                                    </div>
                                </div>
                                <div className="editorial-border p-6 bg-surface-container-lowest">
                                    <div className="font-label-caps text-label-caps text-secondary mb-8">THROUGHPUT DISTRIBUTION</div>
                                    <div className="space-y-6">
                                        {THROUGHPUT_DATA.map((entry) => (
                                            <ThroughputBar key={entry.label} {...entry} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
