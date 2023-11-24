import React from "react";

const Footer = () => {
  return (
    <div>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex justify-center mt-2">
        © {new Date().getFullYear()}{" "}
        <a className="hover:underline">CoopBank</a>
      </span>
    </div>
  );
};

export default Footer;
