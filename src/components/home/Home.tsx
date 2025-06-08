"use client";
import React from "react";

import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
const Home = () => {
  return (
    <>
      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg ">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          Welcome to Apaping N' Biz
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20">
          Why u in ma bizniz?
        </p>
      </div>
      {/* Divider for the side menu */}
      {""}
      <div className="flex gap-4 mt-4">
        {[
          "Top pick 1",
          "Top pick 2",
          "Top pick 3",
          "Top pick 4",
          "Top pick 5",
          "Top pick 6",
        ].map((topPick) => (
          <Card key={topPick}>{topPick}</Card>
        ))}
      </div>

      {/* <SideMenu></SideMenu> */}
    </>
  );
};

export default Home;
