import AboutSection from "@/components/section/AboutSection";
import BootcampsSection from "@/components/section/BootcampsSection";
import CertificateSection from "@/components/section/CertificateSection";
import ContactSection from "@/components/section/ContactSection";
import EduSection from "@/components/section/EduSection";
import HeroSection from "@/components/section/HeroSection";
import ProjectSection from "@/components/section/ProjectSection";
import SkillSection from "@/components/section/SkillSection";
import WorkSection from "@/components/section/WorkSection";

export default function Page() {
  
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <EduSection />
      <SkillSection />
      <ProjectSection />
      <BootcampsSection />
      <CertificateSection />
      <ContactSection />
    </main>
  );
}