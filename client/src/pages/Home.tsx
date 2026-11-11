import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Trees, Ruler, Shield } from "lucide-react";
import heroImage from "@assets/Outside house_1763311856873.jpeg";
import workshopImage from "@assets/Drilling box_1763311856871.png";
import shelfProduct from "@assets/Gemini_Generated_Image_la47atla47atla47_1767365126618.jpeg";

export default function Home() {
  const features = [
    {
      icon: Ruler,
      title: "Precision Engineered",
      description: "Structurally engineered with expert joining techniques for superior durability and exact specifications"
    },
    {
      icon: Trees,
      title: "Sustainably Sourced",
      description: "FSC/PEFC certified European wood from responsibly managed forests"
    },
    {
      icon: Shield,
      title: "Built to Last",
      description: "Hidden bracket system designed for uncompromising strength and generations of use"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[60vh] md:min-h-[75vh] lg:min-h-screen flex items-end justify-center overflow-hidden pb-12 md:pb-16">
        <img 
          src={heroImage}
          alt="Peter's workshop in Portugal"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '60% center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white mb-6 leading-tight">
            Floating Shelves, Handcrafted in Portugal
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Where Traditional Craftsmanship Meets Engineering Precision
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/order">
              <Button 
                size="lg" 
                variant="default"
                className="text-lg px-8"
                data-testid="button-explore-shelves"
              >
                Explore Shelves
              </Button>
            </Link>
            <Link href="/craftsman">
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 backdrop-blur-md bg-white/20 border-white/30 text-white hover:bg-white/30"
                data-testid="button-meet-craftsman"
              >
                Meet the Craftsman
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
                Built to Last, Designed to Disappear
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                In a workshop built by hand in the forests of Central Portugal, Peter Gosling creates 
                floating shelves that are engineered to last generations. Each shelf combines decades 
                of fine woodworking expertise with robust structural design, crafted from sustainably 
                sourced European wood.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                These aren't mass-produced shelves. They're precision-built, individually finished 
                pieces that bring both beauty and strength to your home.
              </p>
              <Link href="/order">
                <Button size="lg" data-testid="button-order-custom">
                  Order Your Custom Shelf
                </Button>
              </Link>
            </div>
            <div className="rounded-md overflow-hidden shadow-lg">
              <img 
                src={workshopImage} 
                alt="Peter crafting shelves at his outdoor workshop in Portugal"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-center mb-16">
            What Makes Our Shelves <span className="whitespace-nowrap">Different</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="border-card-border">
                <CardContent className="pt-6">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-serif text-2xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-md overflow-hidden">
              <img 
                src={shelfProduct} 
                alt="Handcrafted floating shelf detail"
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
                Simple Installation, Serious Strength
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Despite the technical engineering beneath the surface, installation is refreshingly 
                simple: secure the hidden bracket to your wall, slide the shelf into place. Done.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Structurally engineered with expert joining techniques for superior durability
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Dimensionally precise to exact specifications
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Individually finished with a flawless, seamless exterior
                  </p>
                </div>
              </div>
              <Link href="/gallery">
                <Button variant="outline" size="lg" data-testid="button-view-gallery">
                  View Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
            Ready to bring lasting quality to your home?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Each shelf is made to order with the same care and attention to detail
          </p>
          <Link href="/order">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8"
              data-testid="button-order-cta"
            >
              Order Your Custom Shelf
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
