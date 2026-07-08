interface FAQItemData {
    question: string;
    answer: string;
}

const FAQ_ITEMS: FAQItemData[] = [
    {
        question: "How does Vertex ensure data integrity?",
        answer: "Every transaction and data point within Vertex is processed through our proprietary 'Editorial Audit' protocol, creating a cryptographic trail of custody that is immutable and verifiable.",
    },
    {
        question: "Is it possible to export our configurations?",
        answer: "Yes. We believe in total data portability. All system configurations can be exported in clean JSON format at any time, ensuring no vendor lock-in.",
    },
    {
        question: "What is the onboarding timeline?",
        answer: "Standard accounts are ready instantly. Enterprise deployments typically take 2-4 weeks depending on the complexity of your existing infrastructure migration requirements.",
    },
];

function FAQAccordionItem({ question, answer }: FAQItemData) {
    return (
        <details className="group border-b border-outline-variant/30 py-6">
            <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-body-lg">
                {question}
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <p className="mt-4 text-secondary leading-relaxed font-body-md">
                {answer}
            </p>
        </details>
    );
}

export default function FAQ() {
    return (
        <section className="py-32 px-margin-desktop max-w-3xl mx-auto">
            <h2 className="font-headline-md text-headline-md mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-0 border-t border-outline-variant/30">
                {FAQ_ITEMS.map((item) => (
                    <FAQAccordionItem key={item.question} {...item} />
                ))}
            </div>
        </section>
    );
}
