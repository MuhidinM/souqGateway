"use client";
import React from "react";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "@radix-ui/react-tabs";
import Steps from "../components/Steps";

const page = () => {
  return (
    <div>
      <div className="flex items-center justify-between space-2 m-4">
        <h2 className="text-3xl font-bold tracking-tight mr-16">Setting</h2>
      </div>
      <Tabs defaultValue="kyc" className="space-y-4 max-w-2xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="kyc">KYC</TabsTrigger>
          <TabsTrigger value="configuration">Configuration</TabsTrigger>
          {/* <TabsTrigger value="bnpl">BNPL</TabsTrigger>
          <TabsTrigger value="rbf">RBF</TabsTrigger> */}
        </TabsList>
        <TabsContent value="kyc" className="space-y-4">
          <Steps />
        </TabsContent>
        <TabsContent value="configuration" className="space-y-4">
          configuration
        </TabsContent>
        {/* <TabsContent value="bnpl" className="space-y-4">
          bnpl
        </TabsContent>
        <TabsContent value="rbf" className="space-y-4">
          rbf
        </TabsContent> */}
      </Tabs>
    </div>
  );
};

export default page;
