"use client";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const path = usePathname();
  const pathnames = path.split("/").filter((x) => x);

  // Replace the first segment (/merchants) with "Home" for display
  if (pathnames[0] === "merchants") {
    pathnames[0] = "Home";
  }

  return (
    <nav className="flex mb-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          // Capitalize the first letter of each pathname segment
          const capitalizedPathname =
            pathname.charAt(0).toUpperCase() + pathname.slice(1);

          // Custom link for "Home" to route to /merchants
          const isHome = pathname === "Home";
          const homeRoute = "/merchants";

          return (
            <li key={index}>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                {isLast ? (
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                    {capitalizedPathname === "Apilinks"
                      ? "Api Links"
                      : capitalizedPathname}
                  </span>
                ) : isHome ? (
                  <Link
                    href={homeRoute}
                    className="ms-1 flex text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    <Home
                      size={16}
                      className="mr-2 justify-center items-center m-auto"
                    />
                    {capitalizedPathname}
                  </Link>
                ) : (
                  <Link
                    href={routeTo}
                    className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    {capitalizedPathname === "Apilinks"
                      ? "Api Links"
                      : capitalizedPathname}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
