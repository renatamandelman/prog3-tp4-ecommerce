import BrandingProcess from "@/components/BrandingProcess";
import ServicesContainer from "@/components/ServicesContainer";
import ServicesHero from "@/components/ServicesHero";

const branding = {
  title: "Branding",
  parag:
    "We craft brand identities that go beyond aesthetics — we create emotional connections. Our branding process builds a strong visual and strategic foundation that sets your business apart in a crowded market.",
  color: "bg-[#925E78]",
  secColor: "#AEAEAE",
  identityPackParags: [
    "Our Branding Identity Pack provides everything you need to launch or refresh your brand with confidence. From core brand elements to real-world applications, we ensure your identity is cohesive and impactful.",
    "We don’t just deliver files, we deliver a brand system you can grow with. Every element is tailored to your voice, values, and audience expectations.",
  ],
  identityPackList1: [
    "Logo design (primary & secondary)",
    "Color palette system",
    "Typography guidelines",
    "Iconography set",
    "Brand pattern or texture",
    "Imagery direction",
    "Brand voice & tone notes",
    "Do's and Don'ts usage guide",
  ],
  identityPackList2: [
    "Business card design",
    "Social media avatar & banners",
    "Presentation template (Google Slides / PowerPoint)",
    "Letterhead / Invoice template",
    "Email signature design",
    "Packaging mockups",
    "Brand launch visuals",
    "Style guide PDF",
  ],
  image1: "plantilla-manual.jpg", 
  image2: "plantilla-pitchdeck.png",
};

const brandingPage = () => {
  return (
    <div>
      <ServicesHero pageStyle={branding} />
      <div className="bg-[#E6D6C6]">
      <BrandingProcess color={branding.color}/>
      <ServicesContainer pageStyle={branding} />
      </div>
    </div>
  );
};

export default brandingPage;
