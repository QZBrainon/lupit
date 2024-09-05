import React from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <div className="container mx-auto w-full flex justify-between items-center py-6 gap-4">
      <a href="/" className="text-xl font-bold">
        Lupit Challenge
      </a>
      <DarkModeToggle />
    </div>
  );
}
