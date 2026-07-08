import HeroScene from "../components/Three/HeroScene";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center px-margin-desktop max-w-container-max-width mx-auto overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center w-full h-full">
                <div className="lg:col-span-6 z-10">
                    <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8">
                        The Standard for <br />Product Excellence.
                    </h1>
                    <p className="font-body-lg text-body-lg text-secondary max-w-xl mb-12">
                        Built for high-performance teams who demand editorial precision in every pixel. Vertex delivers the clarity required for complex decision-making.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-primary text-white px-10 py-4 font-body-md font-semibold transition-editorial hover:brightness-110 active:scale-[0.98]">
                            Request Access
                        </button>
                        <button className="border border-on-surface text-on-surface px-10 py-4 font-body-md font-semibold transition-editorial hover:bg-on-surface hover:text-white active:scale-[0.98]">
                            Watch Demo
                        </button>
                    </div>
                </div>

                <div className="hidden lg:flex lg:col-span-6 h-full items-center justify-center relative z-0">
                    <div className="w-full aspect-square max-w-[550px] relative">
                        <HeroScene />
                    </div>
                </div>
            </div>
        </section>
    );
}