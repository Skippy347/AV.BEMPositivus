import { HeroSection, ServicesSection } from "./sections";

export function MainPage(): React.ReactElement {
  return (
    <main className="content">
      <HeroSection />
      <ServicesSection />
    </main>
  );
}
