import { Link } from "wouter";
import { Mail, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Peter Gosling</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Handcrafted floating shelves from the forests of Central Portugal. 
              Traditional craftsmanship meets engineering precision.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <Link href="/" data-testid="link-footer-home">
                <span className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  Home
                </span>
              </Link>
              <Link href="/gallery" data-testid="link-footer-gallery">
                <span className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  Gallery
                </span>
              </Link>
              <Link href="/order" data-testid="link-footer-order">
                <span className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  Order Now
                </span>
              </Link>
              <Link href="/craftsman" data-testid="link-footer-craftsman">
                <span className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  The Craftsman
                </span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Our Commitment</h4>
            <div className="flex flex-col gap-3">
              <Link href="/sustainability" data-testid="link-footer-sustainability">
                <span className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  Sustainable Wood
                </span>
              </Link>
              <p className="text-muted-foreground text-sm">FSC/PEFC Certified</p>
              <p className="text-muted-foreground text-sm">European Sourcing</p>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:petergosling40@gmail.com" 
                className="flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors"
                data-testid="link-email"
              >
                <Mail className="w-4 h-4" />
                petergosling40@gmail.com
              </a>
              <a 
                href="tel:+351912825711" 
                className="flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors"
                data-testid="link-phone"
              >
                <Phone className="w-4 h-4" />
                +351 912 825 711
              </a>
              <a 
                href="https://wa.me/351912825711" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors"
                data-testid="link-whatsapp"
              >
                <SiWhatsapp className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Peter Gosling Woodwork. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
