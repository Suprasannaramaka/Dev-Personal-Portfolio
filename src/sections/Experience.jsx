const   experiences = [
    {
        period:"Oct 2024 -Jan 2025",
        role: "web devloper",
        company:"Team-Up",
        description:"Leading frontend architecture for a suite of finetech products.Implemented",
        technologies:["Javascript","React","Redux","TailwindCSS","NextJS"],
        current: false,
    },
    {
        period:"Jul 2025 -Jan 2026",
        role: " Full-Stack devloper",
        company:"Labmentrix",
        description:"Build and maintained full-stack applications and deployed them",
        technologies:["Javascript","React","Redux","TailwindCSS","NextJS","ExpressJS","MONGODB"],
        current: false,
    },
];
export const Experience = () =>
{
    return (
    <section id="experience" className="py-32 relative overflow-hidden">
   <div className="absolute top-1/2 left-1/4 w-94 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>
   <div className="container mx-auto px-6 relative z-10">
     {/*Section Header*/}
     <div className="max-w-3xl mb-16">
        <span className="text-secondary-foreground font-medium tracking-wider uppercase animate-fade-in">Carrer Journey</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100
        text-secondary-foreground">Experience that {""}
        <span className="font-serif italic font-normal text-white">speaks volume.</span></h2>
     </div>
   </div>
    </section>
    );
};