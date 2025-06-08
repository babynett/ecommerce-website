"use client";
import React from "react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { HoverCard, HoverCardTrigger } from "@radix-ui/react-hover-card";

const Footer = () => {
  const placeholders = ["Entah yow email cuz"];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  const footerLinks = [
    {
      name: "Sign up for our newsletter",
      description: ["Lorem Lorem Lorem"],
    },
    {
      name: "Help and Services",
      description: ["How does it work?", "FAQs", "Contact"],
    },
    {
      name: "FAQs",
      description: ["Why?", "How?", "Watdahil"],
    },
    {
      name: "Locations",
      description: ["Bahay ko", "Bahay niya", "Bahay nila"],
    },
  ];
  return (
    <>
      <div className="px-30 pt-10">
        {" "}
        <div></div>
        <Card className="lg:px-40 py-20 flex gap-10">
          <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-4xl dark:text-slate-300">
            {"Get discounts instantly".split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </Card>
        {/* below the card */}
        {""}
        <div className="flex text-lg ">
          {footerLinks.map((footerLink) => (
            <div className="flex-1 flex-col flex py-10 px-5">
              <HoverCard key={footerLink.name}>
                <HoverCardTrigger className="cursor-pointer font-semibold mb-2">
                  {footerLink.name}
                </HoverCardTrigger>
                <div className="flex flex-col space-y-1 text-sm text-gray-500">
                  {footerLink.description.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                  <p></p>
                </div>
              </HoverCard>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
