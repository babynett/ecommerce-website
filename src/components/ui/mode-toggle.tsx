"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";

export function ModeToggle() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <>
      <ToggleGroup
        type="single"
        value={isDarkMode ? "dark" : "light"}
        onValueChange={(value) => {
          if (value === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
          } else if (value === "light") {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
          }
        }}
        className="flex items-center justify-center gap-3 p-1"
      >
        {/* Example ToggleGroupItems */}
        <ToggleGroupItem
          value="light"
          aria-label="Light mode"
          className="hover:cursor-pointer"
        >
          <Sun className="w-5 h-5" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="dark"
          aria-label="Dark mode"
          className="hover:cursor-pointer"
        >
          <Moon className="w-5 h-5" />
        </ToggleGroupItem>
      </ToggleGroup>
    </>
  );
}
