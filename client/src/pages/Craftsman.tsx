import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/With Ozzy_1763311856874.png";
import workshopImage from "@assets/Saw outside workshop_1763311856874.png";

export default function Craftsman() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative min-h-[60vh] md:min-h-[75vh] lg:min-h-screen flex items-end justify-center overflow-hidden pb-12 md:pb-16">
        <img 
          src={heroImage}
          alt="Peter with his dog Ozzy"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '60% center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white mb-6">
            The Craftsman
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Peter Gosling - A Life Built by Hand
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Peter Gosling is an English woodworker who has made the forests of Central Portugal 
              his home and workshop. For the past decade, he has lived in a traditional xisto 
              stone house just outside the small town of Góis, surrounded by the natural beauty 
              that inspires every piece he creates.
            </p>

            <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-12 mb-6">
              A Life Built by Hand
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              After relocating to Portugal ten years ago, Peter didn't just settle into retirement
              —he built it, quite literally. Next to his xisto home stands the workshop he 
              constructed himself, a space where decades of woodworking expertise meet the unhurried 
              rhythm of Portuguese rural life. Here, among the cork oaks and pine forests, Peter 
              continues the craft he has refined over a lifetime.
            </p>

            <div className="my-12 rounded-md overflow-hidden shadow-lg">
              <img 
                src={workshopImage} 
                alt="Peter working with wood at his handbuilt workshop"
                className="w-full h-auto"
              />
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-12 mb-6">
              Traditional Skills, Timeless Pieces
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Peter brings a level of precision and care to every shelf, every joint, every finish. 
              His work reflects the traditional values of the trade: quality over speed, durability 
              over disposability, and beauty found in honest craftsmanship. Each piece is made to 
              last generations, not seasons.
            </p>

            <Card className="my-12 bg-card border-card-border">
              <CardContent className="p-8">
                <blockquote className="text-xl italic text-muted-foreground border-l-4 border-primary pl-6">
                  "Living among the trees has deepened my connection to the materials. I understand 
                  wood not just as a resource, but as a living material with its own character and story."
                </blockquote>
                <p className="mt-4 text-right text-muted-foreground">— Peter Gosling</p>
              </CardContent>
            </Card>

            <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-12 mb-6">
              Working with the Forest
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Living among the trees has deepened Peter's connection to his materials. He understands 
              wood not just as a resource, but as a living material with its own character and story. 
              This respect for the forest shapes both what he makes and how he makes it, ensuring 
              that every piece honours the tree it came from.
            </p>

            <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-12 mb-6">
              Retirement Redefined
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              For Peter, retirement hasn't meant stopping—it's meant the freedom to create at his 
              own pace, guided by passion rather than deadlines. In his Portuguese workshop, he 
              continues to build functional, beautiful shelving that brings warmth and character 
              to homes, one carefully crafted piece at a time.
            </p>

            <div className="mt-12 pt-8 border-t text-center">
              <p className="text-xl text-muted-foreground mb-6">
                Ready to add Peter's craftsmanship to your home?
              </p>
              <Link href="/order">
                <Button size="lg" data-testid="button-order-from-craftsman">
                  Order Your Custom Shelf
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
