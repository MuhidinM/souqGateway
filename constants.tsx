import { Feature } from "@/types/types";
import {
  Blocks,
  Cable,
  DraftingCompass,
  FastForward,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { usePathname } from "next/navigation";
// export const menuItems: MenuItem[] = [
//   { title: "Home", url: "/" },
//   { title: "Documentation", url: "/documentation" },
//   { title: "Sandbox", url: "/sandbox" },
// ];

export const features: Feature[] = [
  {
    title: "Easy",
    description:
      "Souqpass is one of the most convenient ways to accept online payments as it allows customers to complete their payment with a single click.",
    icon: <DraftingCompass className="text-cyan-500" />,
  },
  {
    title: "Secure and Reliable",
    description:
      "Providing Secure Payment Processing is only a fraction of our offerings: We provide a whole array of services that covers all needs to facilitate and streamline online payments.",
    icon: <ShieldCheck className="text-cyan-500" />,
  },
  {
    title: "Fast",
    description:
      "Souqpass is a fast transaction system that allows you to trade in real time. Your customers can buy anything from your ecommerce.",
    icon: <FastForward className="text-cyan-500" />,
  },
  {
    title: "Integration",
    description:
      "It's easy to integrate into your online storefront and gives you access to several banking institutions, so you can increase sales and reduce customer service costs at the same time.",
    icon: <Blocks className="text-cyan-500" />,
  },
  {
    title: "Legal",
    description:
      "We have strict policies and procedures in place to ensure that our business practices are legally compliant.",
    icon: <Scale className="text-cyan-500" />,
  },
  {
    title: "Operations",
    description:
      "Souqpass offers fast and secure transactions, with extremely low fees. We also offer a variety of features that make it easy to recieve payment.",
    icon: <Cable className="text-cyan-500" />,
  },
];
