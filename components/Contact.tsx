"use client";
import { Mail, Phone, MapPin, Github, MessageCircle, Instagram } from "lucide-react";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Get In Touch
        </h2>
      </div>
      <div className="flex flex-col gap-4 lg:px-6 mb-8">
        <h2 className="lg:block hidden text-5xl font-bold lg:text-start">
          Get In Touch
        </h2>
        <p className="lg:text-lg lg:text-start text-muted-foreground">
          If you&#39;re considering my contribution, have a question, or just want to say hi, 
          I&#39;d love to hear from you! Feel free to reach out through any of these channels.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-4 lg:px-6 mb-4">
        <a
          href="https://mail.google.com/mail/u/0/#search/amirxonkidirbayev0%40gmail.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer w-full"
        >
          <Button variant={"default"} className="w-full h-full">
            <div className="flex flex-row items-center">
              <Mail className="dark:text-white text-muted h-6 w-6" />
              <p className="ml-3 text-2xl dark:text-white text-muted">
                Say hello
              </p>
            </div>
          </Button>
        </a>
      </div>
      

      <div className="mt-8 lg:px-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>amirxonkidirbayev0@gmail.com</span>  
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />  
              <span>+998 (93) 772 18-47</span>  
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> 
              <span>Kungrad, Uzbekistan</span>  
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Social Media</h3>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/kidirbayevamirxon/" target="_blank" rel="noopener"> 
              <Instagram className="h-6 w-6" /> 
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener"> 
              <Github className="h-6 w-6" />  
            </a>
            <a href="https://t.me/yourusername" target="_blank" rel="noopener"> 
              <MessageCircle className="h-6 w-6" /> 
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}