"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuSimpleTrigger,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";
import SearchBar from "./SearchBar";
import Link from "next/link";
// import { usePathname } from "next/navigation";

const NavBar = () => {
  // const pathname = usePathname();
  return (
    <div>
      <div className="flex items-center justify-between px-20 py-5 z-50 relative">
        <NavigationMenuItem>BIG ICON</NavigationMenuItem>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuSimpleTrigger>
                <Link href="/">Login</Link>
              </NavigationMenuSimpleTrigger>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuSimpleTrigger>
                <Link href="/home">Home</Link>
              </NavigationMenuSimpleTrigger>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Product 1</NavigationMenuLink>
                <NavigationMenuLink>Product 2</NavigationMenuLink>
                <NavigationMenuLink>Product 3</NavigationMenuLink>
                <NavigationMenuLink>Product 4</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>About The Shop</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Mission & Vision</NavigationMenuLink>
                <NavigationMenuLink>Who's the owner?</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuSimpleTrigger>
                Contact Us
              </NavigationMenuSimpleTrigger>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuSimpleTrigger>Privacy</NavigationMenuSimpleTrigger>
            </NavigationMenuItem>

            <NavigationMenuItem>
              {/* Toggle button for light/dark mode */}
              <ModeToggle></ModeToggle>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search box */}
        <SearchBar></SearchBar>
      </div>
    </div>
  );
};

export default NavBar;
