import ServicesHero from "@/components/services/ServicesHero";
import ServicesIntro from "@/components/services/ServicesIntro";
import ServicesSection from "@/components/services/ServicesSection";
import WhyBrandHaus from "@/components/services/WhyBrandHaus";
import ServicesProcess from "@/components/services/ServicesProcess";
import ServicesCTA from "@/components/services/ServicesCTA";

const services = [
  {
    number: "001 / 005",
    title: "Bespoke Web Design & App Building",
    description:
      "Custom-built digital experiences designed to perform, scale and convert. Built with clarity, precision and long-term growth in mind.",
    bullets: [
      "Custom website design",
      "App and product UI",
      "Responsive front-end development",
      "Lead capture and enquiry flows",
      "Scalable modern builds",
    ],
    cta: "Enquire About Web",
    image: "/images/services/web.jpg",
  },
  {
    number: "002 / 005",
    title: "Strategic Branding & Visual Identity",
    description:
      "Brand systems built to create clarity, consistency and stronger positioning across every digital and physical touchpoint.",
    bullets: [
      "Visual identity systems",
      "Logo direction",
      "Typography systems",
      "Colour systems",
      "Positioning and brand clarity",
    ],
    cta: "Enquire About Branding",
    image: "/images/services/branding.jpg",
  },
  {
    number: "003 / 005",
    title: "SEO",
    description:
      "Search-focused structure and content designed to improve visibility, strengthen discoverability and bring in the right traffic.",
    bullets: [
      "On-page SEO foundations",
      "SEO-ready structure",
      "Content optimisation",
      "Technical improvements",
      "Local search visibility",
    ],
    cta: "Enquire About SEO",
    image: "/images/services/seo.jpg",
  },
  {
    number: "004 / 005",
    title: "Content Creation & Social Media Support",
    description:
      "Strategic content support designed to keep your brand visible, consistent and commercially effective across digital channels.",
    bullets: [
      "Content planning",
      "Campaign creative",
      "Branded social assets",
      "Creative direction",
      "Ongoing content support",
    ],
    cta: "Enquire About Content",
    image: "/images/services/content.jpg",
  },
  {
    number: "005 / 005",
    title: "High-End Production & Photography",
    description:
      "Premium visual production that elevates your brand presence through strong imagery, refined storytelling and polished execution.",
    bullets: [
      "Photography",
      "Videography",
      "Campaign visuals",
      "Product and service imagery",
      "Branded visual storytelling",
    ],
    cta: "Enquire About Production",
    image: "/images/services/production.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#FAF8F2] text-[#131316]">
      <ServicesHero />
      <ServicesIntro />

      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 md:px-10 lg:px-16">
        {services.map((service, index) => (
          <ServicesSection
            key={service.number}
            number={service.number}
            title={service.title}
            description={service.description}
            bullets={service.bullets}
            cta={service.cta}
            image={service.image}
            reverse={index % 2 === 1}
          />
        ))}
      </section>

      <WhyBrandHaus />
      <ServicesProcess />
      <ServicesCTA />
    </main>
  );
}