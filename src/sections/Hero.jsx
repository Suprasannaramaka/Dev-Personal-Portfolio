import { useMemo } from "react";
import { ArrowRight, ChevronDown, Github, Linkedin, Twitter , Download} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { Button } from "../components/Button";

const skills =
["JavaScript", "React.js","Next.js","Node.js","Mongo DB","SQL","Express.js"];
export const Hero = () => {
  const dots = useMemo(() => {
    return [...Array(30)].map((_, i) => ({
      id : {i} , 
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 pointer-events-none">
        {dots.map(dot => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
{/*content*/}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                 {/*Left Column - Text-content */}
                <div className="space-y-8">
                 <div className="animate-fade-in">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                     FullStack Devloper - React Specalist
                    </span>
                 </div>
                 {/*Headline*/}
                 <div className="space-y-4">
                    <h1 className="text-5xl md:text-5xl lg:text-5xl font-bold leading-tight animate-fade-in">Crafting <span>digital</span> experiences with <br/> 
                    <span className="font-serif italic font-normal text-white">precision</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                     Hi , I'm Ramaka.Suprasanna - A full-stack react.js devloper specializing in Javascript,
                     React,Redux,RestAPI,Next.js ,Node.js and Typescript.
                     I build scalble ,performant web applicatios that users love.<br/>Along with that I have Strong problem sloving as well as debugging skills which makes building websites a fun learning experience 
                     <br/>as well as it helps to grow as an devloper.
                    </p>
                 {/* CTAs*/}
                 <div className="flex flex-row gap-10 animate-fade-in animation-delay">
                    <Button size="lg">
                    Contact Me <ArrowRight className="w-2 h-3"/>
                    </Button>
                    <AnimatedBorderButton>
                       <Download className="w-5 h-5"/>
                        Download CV
                    </AnimatedBorderButton>
                    </div>
                    {/*Social Links*/}
                    <div className="flex items-start gap-4 animate-fade-in animation-delay">
                      <span className="text-sm text-muted-foreground flex gap-3.5">Follow:</span>
                      {[
                        {icon: Github , href:"#"},
                         {icon: Linkedin , href:"#"},
                          {icon: Twitter , href:"#"},
                      ].map((social , idx) =>(
                        <a
                        key={idx} 
                        href={social.href}
                        className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                          {<social.icon className="w-5 h-5"/>}</a>
                      ))}
                    </div>
                    {/* Right Column - Profile Image*/}
                    <div className="relative animate-fade-in animation-delay-400">
                     {/* Profile Image */}
                    <div className="relative max-w-md mx-auto">
                      <div className="absolute inset-0 rounded-3xl bg-linear-to-br  from-primary/30 vip transparent to-primary/10 blur-2xl animate-pulse"/>
                      <div className="relative glass rounded-3xl p-2 glow-border">
                        <img src="/profile-photo.jpg" alt="suprasanna"  className="w-full aspect-4/5 object-cover rounded-2xl"/>
                        {/*Floating Point */}
                        <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                            <span className="text-sm font-medium">Avalible for work</span>
                          </div>
                        </div>
                         {/* Stats Badge */}
                         <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                          <div className="text-2xl font-bold text-primary">9</div>
                          <div className="text-xs text-foreground">Months of Exp.</div>
                         </div>
                      </div>
                    </div>
                    </div>
                 </div>
                 </div>
                </div>
            </div>
            {/* Skills Section */}
            <div className="relative mt-20 animate-fade-in animate-delay-600">
              <p className="text-lg text-muted-foreground mb-6 text-center">Technologies that I work with</p>
              <div className="relative overflow-hidden">
                <div className="flex-animate-marquee">
                  {[...skills , ...skills].map((skills , idk) =>
                  (
                    <div key={idk} className="flex  shrink-0 px-8 py-4">
                      <span className="text-xl flex flex-row font-semibold text-muted-foreground/50  hover:text-muted-foreground/200">
                        {skills}
                        </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
          <a href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce"/>
          </a>
        </div>
  </section>
 )}