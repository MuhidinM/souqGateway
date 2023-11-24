import { Feature } from "@/types/types";
import {
  Blocks,
  Cable,
  DraftingCompass,
  FastForward,
  Scale,
  ShieldCheck,
  ArrowLeftRight,
  BadgeDollarSign,
  BadgeHelp,
  Banknote,
  CalendarCheck,
  FileText,
  Globe,
  LayoutDashboard,
  Store,
  TabletSmartphone,
} from "lucide-react";
import { SideBarItem } from "@/types/types";

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

export const sideBar: SideBarItem[] = [
  {
    name: "dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard />,
    hide: false, // set the hidden value to true if you want to. U can use different var for different purposes.
    path: "/merchants",
    active: "/merchants",
  },
  {
    name: "accounts",
    label: "Accounts",
    icon: <BadgeDollarSign />,
    hide: false,
    path: "/merchants/accounts",
    active: "/merchants/accounts",
  },
  {
    name: "transactions",
    label: "Transactions",
    icon: <ArrowLeftRight />,
    hide: false,
    path: "/merchants/transactions",
    active: "/merchants/transactions",
  },
  {
    name: "apilinks",
    label: "Api Links",
    icon: <Cable />,
    hide: false,
    path: "/merchants/apilinks",
    active: "/merchants/apilinks",
  },
  {
    name: "inventory",
    label: "Inventory",
    icon: <Store />,
    hide: false,
    path: "/merchants/inventory",
    active: "/merchants/inventory",
  },
  {
    name: "loanList",
    label: "Loan List",
    icon: <Banknote />,
    hide: false,
    path: "/merchants/loanList",
    active: "/merchants/loanList",
  },
  {
    name: "event",
    label: "Event",
    icon: <CalendarCheck />,
    hide: false,
    path: "/merchants/event",
    active: "/merchants/event",
  },
  {
    name: "report",
    label: "Report",
    icon: <FileText />,
    hide: false,
    path: "/merchants/report",
    active: "/merchants/report",
  },
  {
    name: "domains",
    label: "Domains",
    icon: <Globe />,
    hide: false,
    path: "/merchants/domains",
    active: "/merchants/domains",
  },
  {
    name: "devices",
    label: "Devices",
    icon: <TabletSmartphone />,
    hide: false,
    path: "/merchants/devices",
    active: "/merchants/devices",
  },
  {
    name: "help",
    label: "Help",
    icon: <BadgeHelp />,
    hide: false,
    path: "/merchants/help",
    active: "/merchants/help",
  },
];
