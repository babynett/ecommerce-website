"use-client";
import { HoverCard, HoverCardTrigger } from "@radix-ui/react-hover-card";
import React from "react";

const SideMenu = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col text-lg ">
        {[
          "Popular Products",
          "Explore Now",
          "Women's Apparel",
          "Men's Apparel",
          "Kid's Apparel",
        ].map((category) => (
          <HoverCard key={category}>
            <HoverCardTrigger>{category}</HoverCardTrigger>
          </HoverCard>
        ))}
      </div>
    </>
  );
};

export default SideMenu;
