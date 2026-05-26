import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingButtons } from "@/components/site/FloatingButtons";

type PageLayoutProps = {
  children: React.ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      {children}
      <Footer />
      <FloatingButtons />
    </div>
  );
}
