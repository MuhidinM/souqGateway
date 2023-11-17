import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href="/" className="flex items-center md:w-28">
        <Image src="/images/logo.png" width={120} height={40} alt="img" />
      </Link>
    </div>
  );
};

export default Logo;
