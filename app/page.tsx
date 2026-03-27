import { FeaturedGuests } from "@/components/featured-guests";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <SiteNavbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturedGuests />
      </main>
      <SiteFooter />
    </div>
  );
}
