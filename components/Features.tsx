import { features } from "@/constants";
import React from "react";

const Features = () => {
  return (
    <section className="bg-white md:px-36 dark:bg-gray-900">
      <div className="px-4 py-8 mx-auto sm:py-16 lg:px-6">
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {features.map((feature) => (
            <div key={feature.title}>
              <div className="flex items-center bg-gray-100 dark:bg-gray-800 justify-center w-10 h-10 mx-auto mb-4 rounded-full md:mx-0 lg:h-12 lg:w-12">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-center md:text-left dark:text-white">
                {feature.title}
              </h3>
              <p className="text-center text-gray-500 dark:text-gray-400 md:text-left">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
