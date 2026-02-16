import {Code2 , Lightbulb , Rocket , Users } from "lucide-react";

const highlights = [
    {
        icon:Code2,
        title: "Clean Code",
        description: "Writing maintainable, scalable code that stands the test of time.",
    },
     {
        icon: Rocket,
        title: "Performance",
        description: "Optimizing speed and delivering lighting-fast user experience.",
    },
     {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life.",
    },
     {
        icon: Lightbulb,
        title: "Innovation",
        description: "Staying ahead with latest technologies and best practices.",
    },
];
export const About = () =>
{
    return( 
    <section id="about" classNmae="py-32 relative overflow-hideen">
     <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
{/* Left Section */}
<div className="space-y-8">
<div className="animate-fade-in">
<span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
</div>
<h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100
        text-secondary-foreground pt-50">Building the future,
        <span className="font-serif italic font-normal text-white">one component at a time.
    </span>
    </h2>
       <div className="space-y-4 pb-5 text-muted-foreground animate-fade-in animation-delay-200">
        <p>
       I'm a passionate  web  devloper with over 9 months of experience crafting digital products 
       that make difference.My journey started with a curiosity for how things work on the web , and it 
       has evolved into a deep expertise in mordern frontend technologies.I specalise in React,Next.js and Typescript , building everything from sleek landing pages 
         to complex enterprise applications.My approach combines technical excellence  with keen 
         eye for design and user Experience.
         When I'm not coding , you'll find me exploring new technologies, contributing  to 
         open-source projects,or sharing knowledge with the devloper community.
        </p>
       </div>
       <div className="glass rounded-2xl p-5  glow-border animate-fade-in animation-delay-300">
        <p className="text-lg font-medium italic text-foreground">
            "My mission is to create digital experiences that are not just functional, 
            but truly delightful - products that users love to use and devlopers love to maintain."
        </p>
       </div>
    </div>
    {/* Right Column */}
     <div className="grid sm:grid-cols-2 gap-6">
        {highlights.map((item , idx) => (
            <div key={idx} className="glass p-6 rounded-2xl animate-fade-in"
               style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                <div className="w-12 h-12 rounde-xl bg-primary/10 flex items-center justify-center  mb-4 hover:bg-primary/20">
                <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg  font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
        ))}
     </div>
     </div>
     </div>
    </section>
    )
}