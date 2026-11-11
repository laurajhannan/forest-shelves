import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Trees, Shield, MapPin, CheckCircle2 } from "lucide-react";
import forestHero from "@assets/generated_images/Portuguese_forest_hero_image_76a7c095.png";

export default function Sustainability() {
  const woodTypes = [
    {
      name: "Portuguese Maritime Pine",
      description: "Sustainably managed from local plantations right here in Portugal, supporting local forestry and reducing transportation emissions"
    },
    {
      name: "Poplar (Choupo)",
      description: "Premium European wood chosen for exceptional straightness and natural beauty"
    },
    {
      name: "Beech (Faia)",
      description: "Graded first-choice quality, straight, stable, and free from knots that could compromise strength"
    }
  ];

  const qualityCriteria = [
    "Straightness – ensuring your shelves remain level and true",
    "Clear grain – free from knots and defects",
    "Stability – resistant to warping over time",
    "Workability – precision-cut and finished without splitting"
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src={forestHero}
          alt="Portuguese forest"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white mb-6">
            Our Sustainable Wood
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Quality timber. Zero compromise. No guilt.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
              Wood You Can Feel Good About
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every shelf is crafted from responsibly sourced, premium-grade solid wood from 
              European forests managed with care for future generations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-card-border">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-serif text-2xl font-semibold mb-3">
                  FSC & PEFC Certified
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  All our wood carries Forest Stewardship Council (FSC) or Programme for the 
                  Endorsement of Forest Certification (PEFC) certification, guaranteeing it 
                  comes from responsibly managed forests
                </p>
              </CardContent>
            </Card>

            <Card className="border-card-border">
              <CardContent className="pt-6">
                <MapPin className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-serif text-2xl font-semibold mb-3">
                  European Sourcing
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We exclusively source from European suppliers who adhere to the EU's strict 
                  forestry regulations, ensuring no illegal logging in our supply chain
                </p>
              </CardContent>
            </Card>

            <Card className="border-card-border">
              <CardContent className="pt-6">
                <Trees className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-serif text-2xl font-semibold mb-3">
                  Local When Possible
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our Portuguese Maritime Pine comes from managed plantations right here in 
                  Portugal, supporting local forestry and reducing transportation emissions
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card rounded-md p-8 md:p-12 mb-16 border border-card-border">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-8">
              The Wood We Use
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We carefully select our shelf wood based on three essential criteria: quality, 
              workability, and environmental responsibility. Our shelves are crafted from premium 
              European woods, each species chosen for its exceptional straightness, 
              resistance to splitting, and natural beauty.
            </p>

            <div className="space-y-6">
              {woodTypes.map((wood) => (
                <div key={wood.name} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">{wood.name}</h4>
                    <p className="text-muted-foreground">{wood.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground mt-8 italic">
              All our timber is graded as first-choice quality, meaning you receive boards that 
              are straight, stable, and free from knots that could compromise strength or appearance.
            </p>
          </div>

          <div className="bg-background rounded-md p-8 md:p-12 border">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
              Quality That Lasts
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Each piece of wood is hand-selected for:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {qualityCriteria.map((criterion) => (
                <div key={criterion} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{criterion}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't compromise on quality. Every board is inspected before it becomes part 
              of your home. When you choose our shelves, you're choosing furniture that respects 
              both craftsmanship and the environment. It's wood you can feel good about.
            </p>
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-muted-foreground mb-6">
              Ready to bring sustainable quality to your home?
            </p>
            <Link href="/order">
              <Button size="lg" data-testid="button-order-from-sustainability">
                Order Your Custom Shelf
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
