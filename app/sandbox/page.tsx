"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const SandboxPage = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <section className="">
      <div className="max-w-screen-xl px-4 py-8 mx-auto mt-32 lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight lg:text-7xl text-primary dark:text-primary">
            Coming Soon
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
            Something exciting is on its way!
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Stay tuned for updates and be ready for the big reveal.
          </p>
          <Button
            onClick={handleGoBack}
            className="bg-cyan-500 text-white hover:bg-cyan-600"
          >
            Go Back
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SandboxPage;
