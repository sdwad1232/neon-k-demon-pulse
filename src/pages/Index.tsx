import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DailyMessage from "@/components/DailyMessage";
import ContentSections from "@/components/ContentSections";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <DailyMessage />
        <ContentSections />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
