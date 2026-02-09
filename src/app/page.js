import Hero from "@/app/pages/Hero/Hero";
import SkillsSection from "@/app/pages/Skills/Skills";
import EducationLoader from "@/components/EducationLoader";
export default function Home() {
    return (
        <>
            <Hero />
            <SkillsSection />
            <section id="experience" className="min-h-screen flex items-center justify-center text-white">
                <h2 className="text-3xl font-bold">Experience Section (Coming Soon)</h2>
            </section>
            <section id="education" className="min-h-screen">
                <EducationLoader />
            </section>
            <section id="projects" className="min-h-screen flex items-center justify-center text-white">
                <h2 className="text-3xl font-bold">Projects Section (Coming Soon)</h2>
            </section>
            <section id="contact" className="min-h-screen flex items-center justify-center text-white">
                <h2 className="text-3xl font-bold">Contact Section (Coming Soon)</h2>
            </section>
        </>
    );
}
