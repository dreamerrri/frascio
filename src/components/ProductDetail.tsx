import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FLOOR_PRODUCTS } from "./Productcard";
import { ImageCarousel } from "./ImageCarousel";

export default function ProductDetail() {
  const { productName } = useParams<{ productName: string }>();
  const product = FLOOR_PRODUCTS.find((p) => p.name.toLowerCase() === productName?.toLowerCase());
  
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageInView = useInView(imageRef, { once: true, margin: "-100px" });
  const textInView = useInView(textRef, { once: true, margin: "-100px" });

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-['Space Grotesk'] font-semibold text-[42px] text-foreground mb-4">
            Product not found
          </h1>
          <Link to="/#catalog">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Catalog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 py-6">
          <Link to="/#catalog">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Catalog
            </Button>
          </Link>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -50 }}
            animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ImageCarousel images={product.images} productName={product.name} />
          </motion.div>

          {/* Product Info */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: 50 }}
            animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pt-4"
          >
            <span className="inline-block w-2 h-2 rounded-sm bg-[#3fbfc7] shadow-[0_0_6px_rgba(63,191,199,0.7)]" />
            <Badge className="ml-2">Floor-Mounted Range</Badge>
            
            <p className="font-['IBM Plex Mono'] text-[12px] tracking-[0.08em] text-muted-foreground mt-6 mb-2">
              {product.sku}
            </p>
            
            <h1 className="font-['Space Grotesk'] font-semibold text-[48px] md:text-[56px] leading-[1.08] tracking-[-0.01em] text-foreground mb-6">
              {product.name}
            </h1>
            
            <p className="font-['Inter'] text-[16px] leading-[1.7] text-muted-foreground mb-8">
              {product.desc}
            </p>

            {/* Specifications */}
            <div className="mb-8">
              <h3 className="font-['Space Grotesk'] font-semibold text-[20px] text-foreground mb-4">
                Specifications
              </h3>
              <div className="space-y-3">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between py-3 border-b border-border">
                    <span className="font-['Inter'] text-[14px] text-muted-foreground">
                      {spec.label}
                    </span>
                    <span className="font-['IBM Plex Mono'] text-[14px] text-foreground">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-10">
              <h3 className="font-['Space Grotesk'] font-semibold text-[20px] text-foreground mb-4">
                Key Features
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="font-['Inter'] text-[13px]">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Button size="lg" className="font-['IBM Plex Mono'] text-[11px] tracking-[0.08em] uppercase">
              Request Quote
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Additional Details Section */}
      <section className="bg-card py-16 md:py-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-['Space Grotesk'] font-semibold text-[36px] leading-[1.1] tracking-[-0.01em] text-foreground mb-6">
              Engineering Excellence
            </h2>
            <div className="space-y-4 font-['Inter'] text-[15px] leading-[1.75] text-muted-foreground">
              <p>
                Every Frascio floor-mounted smart toilet represents the pinnacle of bathroom innovation. 
                Crafted with precision engineering and premium materials, these units combine cutting-edge 
                technology with timeless design principles.
              </p>
              <p>
                The illuminated control dial serves as the centerpiece of our design philosophy — intuitive, 
                elegant, and universally accessible across all models. Each product in the floor-mounted range 
                shares this DNA while offering unique features tailored to different lifestyles and preferences.
              </p>
              <p>
                From UV sterilization and AI voice control to aromatherapy and ambient lighting, our smart 
                toilets transform daily routines into moments of luxury and comfort.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}