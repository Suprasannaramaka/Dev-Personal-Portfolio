import { Mail , Phone , MapPin , Send } from "lucide-react";
import {useState} from "react";
import { Button } from "../components/Button";
const contactInfo = [
    {
      icon:  Mail,
      label: "Email",
      value: "ramakasuprasanna6@gmail.com",
      href:"mailto:ramakasuprasanna6@gmail.com"
    },
    {
        icon: Phone,
        label: "Phone",
        value: " +91 7989467140",
        href: "tel: +917989467140",
    },
    {
       icon: MapPin,
       label: "Location",
       value: "Karimnagar, Telangana,India",
       href: "#",
    },
];


export const Contact = () =>
{
    const[formData , setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const handleSubmit = async(e) =>
    {
        e.preventDefault();
    }
    return (
    <section id="contact" className="py-32 relative overflow-hidden">
  <div className="absolute top-0 left-0  w-full h-full">
   <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
    </div>
    <div className="container mx-auto px-6 relative z-10">
    { /*Section Header*/}
    <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate">
            Get in Touch
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade">
            Let's build {""}
            <span className="font-serif italic font-normal text-white">
                something great.
            </span>
        </h2>
        <p className="text-muted-foreground animate-fade-in animation-delay-200">
        Have a project in mind ? or just want to say hi? My inbox is alway open.I will try my best to get back to you.Send me a message and let's connect!!
        </p>
    </div>
    {/* Contact Info Items */}
    <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animate-delay-300">
           <form className="space-y-6" onSubmit={handleSubmit}/>
           <div>
            <label htmlFor="name"  className="block text-sm font-medium mb-2">Name</label>
            <input id="name" 
            type="text" 
            required 
            placeholder="Your Name..."  
            value={formData.name} onChange = {(e) => setFormData({...formData , name:e.target.value})}
            className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary"/>
           </div>
           <div>
            <label htmlFor="email"   className="block text-sm font-medium mb-2">Email</label>
            <input id="email"
             required
            value={formData.email} 
            onChange = {(e) => setFormData({...formData , email:e.target.value})}
            placeholder="name@email.com..."  type="email"  className="w-full px-4 py-3 bg-surface rounded-xl border-primary focus:ring-1 focus:ring-primary outline-none transition-all"/>
           </div>
           <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
            rows={5}
             required 
            value={formData.message} 
            onChange={(e) => setFormData({...formData , message:e.target.value})}
             placeholder="Your Message..." 
             className="w-full px-4 py-3 bg-surface rounded-xl border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"/>
           </div>
          <Button className="w-full" type="submit" size="lg">Send Message <Send/></Button>
        </div>
    </div>
    </div>
    </section>
);
};