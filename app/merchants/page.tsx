"use client";
import React from "react";
import Banner from "./components/Banner";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "@radix-ui/react-tabs";
import Overview from "./components/Overview";

const page = () => {
  return (
    <div>
      <div className="flex items-center justify-between space-2 mb-4">
        <Banner />
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="pp">Payment Processor</TabsTrigger>
          <TabsTrigger value="bnpl">BNPL</TabsTrigger>
          <TabsTrigger value="rbf">RBF</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Overview />
        </TabsContent>
        <TabsContent value="pp" className="space-y-4">
          pp
        </TabsContent>
        <TabsContent value="bnpl" className="space-y-4">
          bnpl
        </TabsContent>
        <TabsContent value="rbf" className="space-y-4">
          rbf
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
