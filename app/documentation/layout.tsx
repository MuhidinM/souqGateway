import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Sidebar from "./components/sidebar";

export const metadata: Metadata = {
  title: "Souq Payment Gateway",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <div className="mt-20 md:mt-20 md:flex md:px-24 pb-40">
        <div className="md:hidden">
          <Sidebar />
        </div>
        <div className="md:flex-1 md:ml-[160px]">{children}</div>
        <div className="hidden md:block md:flex-shrink-0 md:ml-0 md:mr-6">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}