import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground py-20 border-t border-border mt-auto">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-3xl font-serif text-primary mb-6">VISIT SOCOTRA</h3>
          <p className="text-muted-foreground leading-relaxed max-w-sm">
            Experience the raw beauty of the Indian Ocean's most isolated archipelago. We provide luxury, sustainable expeditions for the modern explorer.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-serif mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-muted-foreground uppercase tracking-wider">
            <li><Link href="/expeditions" className="hover:text-primary transition-colors">Expeditions</Link></li>
            <li><Link href="/journal" className="hover:text-primary transition-colors">Journal</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-serif mb-6">Legal</h4>
          <ul className="space-y-4 text-sm text-muted-foreground uppercase tracking-wider">
            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Visit Socotra. All rights reserved.</p>
      </div>
    </footer>
  );
}
