const experiences = [
    {
        period: "oct 2024 -Jan 2025",
        role: "web Devloper",
        companty: "Team-Up",
        description: "As part of the team worked on various projects which helped to upgrade my skills",
        tech:["Javascript" , "React" , "TailwindCSS" , "Next.js"],
        current:false,
    },
     {
        period: "July 2025 - Jan 2026",
        role: "web devloper",
        companty: "Labmentrix",
        description: "Worked on projects which helped to upskill myself as a devloper and had an oppurtunity to work on amazing projects.",
        tech:["Javascript" , "React" , "TailwindCSS" , "Next.js" , "ExpreessJS"],
        current:false,
    },

]
export const Experience = () =>
{
    return (
    <section id="experience" className="py-32 relative overflow-hidden">
    <div className="absolute top 1/2 left-1/4 w-100 h-100 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>
    <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
             Carrer Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100
        text-secondary-foreground pt-50">Experience  that 
        <span className="font-serif italic font-normal text-white"> {""}speaks volume</span></h2>
        </div>
    </div>
    </section>
    );
};