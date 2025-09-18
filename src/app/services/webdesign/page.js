import ServicesHero from "@/components/ServicesHero";
import ServicesContainer from "@/components/ServicesContainer";

const webDesign = {
  title: "Web Design",
  parag:
    "We design websites that are not only visually stunning but also performance-driven. From structure to styling, every element is crafted to improve user experience and brand perception.",
  color: "bg-[#F19A3E]",
  secColor: "#5C3001",
  identityPackParags: [
    "Our Web Design Identity Pack delivers a fully designed site layout tailored to your brand and business goals. It's your digital storefront  and we make it unforgettable.",
    "Every site we design is mobile-optimized, SEO-aware, and crafted with conversion in mind. You’ll walk away with a launch-ready design that sets the tone for your online presence."
  ],
  identityPackList1: [
    "Homepage design",
    "About & contact pages",
    "Services or product pages",
    "Blog or resources layout",
    "Mobile-responsive views",
    "Custom icons & illustrations",
    "Call-to-action sections",
    "Header & footer design"
  ],
  identityPackList2: [
    "Interactive wireframes",
    "UI components (buttons, forms, etc.)",
    "Visual hierarchy guide",
    "Navigation & menu UX",
    "Color & font system",
    "Hero sections & image placement",
    "SEO-ready HTML structure (optional)",
    "Developer handoff files"
  ]
};

const uxuiPage = () => {
  return (
    <div>
      <ServicesHero pageStyle={webDesign} />
      <div className="bg-[#E6D6C6]">
      <ServicesContainer pageStyle={webDesign} />
      </div>
    </div>
  );
};

export default uxuiPage;