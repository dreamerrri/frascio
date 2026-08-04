import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Header from "./Header";
import { Footer } from "./Footer";
import section2Bg from "../imports/Images/section2.png";
import contactUsPic from "../imports/Images/ContactUsPic.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Contact() {
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const infoInView = useInView(infoRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header */}
      <div 
        className="border-b border-border relative bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${section2Bg})`,
          minHeight: "400px"
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-[1240px] mx-auto px-6 md:px-12 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <span className="inline-block w-2 h-2 rounded-sm bg-[#3fbfc7] shadow-[0_0_6px_rgba(63,191,199,0.7)]" />
              <Badge className="ml-2 bg-white/20 text-white border-white/30 backdrop-blur-sm">Get in Touch</Badge>
            </div>
            
            <h1 className="font-['Space Grotesk'] font-semibold text-[48px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-white mb-6">
              Begin Your <span className="text-[#3fbfc7]">Project</span>
            </h1>
            
            <p className="font-['Inter'] text-[16px] leading-[1.7] text-white/90 max-w-2xl">
              Have questions about our smart sanitary solutions? Our team of specialists is here to help you find the perfect fit for your space.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-20">
          
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <h2 className="font-['Space Grotesk'] font-semibold text-[28px] text-foreground mb-6">
              Send us a message
            </h2>
            
            <form className="space-y-6">
              <motion.div variants={itemVariants}>
                <label className="block font-['IBM Plex Mono'] text-[11px] tracking-[0.08em] uppercase text-muted-foreground mb-2">
                  Full Name
                </label>
                <Input 
                  placeholder="Your name" 
                  className="font-['Inter'] text-[15px]"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label className="block font-['IBM Plex Mono'] text-[11px] tracking-[0.08em] uppercase text-muted-foreground mb-2">
                  Email Address
                </label>
                <Input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="font-['Inter'] text-[15px]"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label className="block font-['IBM Plex Mono'] text-[11px] tracking-[0.08em] uppercase text-muted-foreground mb-2">
                  Phone Number
                </label>
                <Input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000" 
                  className="font-['Inter'] text-[15px]"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label className="block font-['IBM Plex Mono'] text-[11px] tracking-[0.08em] uppercase text-muted-foreground mb-2">
                  Subject
                </label>
                <Input 
                  placeholder="How can we help?" 
                  className="font-['Inter'] text-[15px]"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label className="block font-['IBM Plex Mono'] text-[11px] tracking-[0.08em] uppercase text-muted-foreground mb-2">
                  Message
                </label>
                <textarea 
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-['Inter'] text-[15px] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#3fbfc7] focus:border-transparent resize-none"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Button size="lg" className="font-['IBM Plex Mono'] text-[11px] tracking-[0.08em] uppercase w-full">
                  Send Message
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            ref={infoRef}
            initial={{ opacity: 0, x: 50 }}
            animate={infoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-['Space Grotesk'] font-semibold text-[28px] text-foreground mb-6">
                Contact Information
              </h2>
              <p className="font-['Inter'] text-[15px] leading-[1.75] text-muted-foreground">
                Reach out to our team directly through any of these channels. We typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#3fbfc7]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-[#3fbfc7]" />
                </div>
                <div>
                  <h3 className="font-['Space Grotesk'] font-semibold text-[18px] text-foreground mb-1">
                    Email
                  </h3>
                  <p className="font-['Inter'] text-[15px] text-muted-foreground">
                    info@frascio.com
                  </p>
                  <p className="font-['Inter'] text-[15px] text-muted-foreground">
                    support@frascio.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#3fbfc7]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-[#3fbfc7]" />
                </div>
                <div>
                  <h3 className="font-['Space Grotesk'] font-semibold text-[18px] text-foreground mb-1">
                    Phone
                  </h3>
                  <p className="font-['Inter'] text-[15px] text-muted-foreground">
                    +1 (555) 123-4567
                  </p>
                  <p className="font-['IBM Plex Mono'] text-[12px] text-muted-foreground mt-1">
                    Mon-Fri 9am-6pm EST
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <div className="rounded-lg overflow-hidden relative">
                <img 
                  src={contactUsPic} 
                  alt="Frascio Headquarters Location" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="flex items-start gap-3 ">
                    <div className="w-10 h-10 rounded-lg bg-[#3fbfc7]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-[#3fbfc7]" />
                    </div>
                    <div>
                      <h3 className="font-['Space Grotesk'] font-semibold text-[16px] text-foreground mb-1">
                        Headquarters
                      </h3>
                      <p className="font-['Inter'] text-[14px] text-muted-foreground">
                        123 Design District
                      </p>
                      <p className="font-['Inter'] text-[14px] text-muted-foreground">
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
