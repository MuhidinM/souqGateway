"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
const FourOhFour = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };

  return (
    <section className="">
      <div className="max-w-screen-xl px-4 py-8 mx-auto mt-32 lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <h1 className="mb-4 font-extrabold tracking-tight text-7xl lg:text-9xl text-cyan-500 dark:text-cyan-500">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
            Something&apos;s missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can&apos;t find that page. You&apos;ll find lots to
            explore on the home page.{" "}
          </p>
          <Button onClick={handleGoBack} className="">
            Go Back
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FourOhFour;
