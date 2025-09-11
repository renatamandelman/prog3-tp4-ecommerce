import ServicesHero from "@/components/ServicesHero";
import ServicesContainer from "@/components/ServicesContainer";

const uxui = {
  title: "UX/UI",
  parag:
    "Our UX/UI design services focus on crafting intuitive and delightful digital experiences. We transform complex ideas into seamless user journeys that drive engagement and conversion.",
  color: "bg-[#2F3430]",
  secColor: "#AEAEAE",
  identityPackParags: [
    "The UX/UI Identity Pack equips your product with user-centered design assets that enhance clarity, usability, and appeal. Every decision is backed by research and user psychology.",
    "From wireframes to polished interfaces, we ensure your digital product not only looks good but feels right. Ideal for apps, SaaS platforms, and websites.",
  ],
  identityPackList1: [
    "User journey map",
    "Wireframes (low & mid fidelity)",
    "Interactive prototype (Figma)",
    "UI design system",
    "Custom icon set",
    "Accessible color scheme",
    "Typography hierarchy",
    "Component library",
  ],
  identityPackList2: [
    "Mobile & desktop screens",
    "Login & onboarding flow",
    "Dashboard layout",
    "CTA & form styles",
    "Navigation patterns",
    "User feedback modals",
    "Error/empty states",
    "Handoff-ready Figma file",
  ],
};

const uxuiPage = () => {
  return (
    <div>
      <ServicesHero pageStyle={uxui} />
      <div className="bg-[#E6D6C6]">
        <ServicesContainer pageStyle={uxui} />
      </div>
    </div>
  );
};

export default uxuiPage;
