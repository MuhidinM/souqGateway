"use client";
import Code from "@/components/Code";
import { useSession } from "next-auth/react";
import React from "react";

const Page = () => {
  const { data: session } = useSession();
  const codeString: string = `Client Id : ${session?.user?.name} 
Api Key : awsdfgtyu
Secret Key : awsdfgtyu`; //lets replace the client id and others
  return (
    <div>
      <Code codeString={codeString} language={"jsx"} title="Keys" />
    </div>
  );
};

export default Page;
