import { Button } from "@/components/ui/button";
import Link from "next/link";

function Banner() {
  return (
    <div
      id="marketing-banner"
      className="flex flex-col justify-between w-full p-4 bg-white border border-gray-100 rounded-lg shadow-sm md:flex-row lg:max-w-7xl left-1/2 top-6 dark:bg-gray-700 dark:border-gray-600"
    >
      <div className="flex flex-col items-center mb-3 mr-4 md:items-center md:flex-row md:mb-0">
        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
          To access additional features, please provide more information about
          yourself.{" "}
        </p>
      </div>
      <div className="flex items-center flex-shrink-0">
        <Link href="/merchants/setting">
          <Button>Go to Setting</Button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
