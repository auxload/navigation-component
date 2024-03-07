import React from "react";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import { Button } from "../ui/button";

const NavBar = () => {
  return (
    <header>
      <div className="container h-[4rem] flex justify-between items-center">
        <span>Logo</span>
        <MobileNavigation />
        <Navigation />
        <div className="md:flex gap-2 hidden">
            <Button size={"sm"}>Login</Button>
            <Button variant={"ghost"}>Sign In</Button>
          </div>
      </div>
    </header>
  );
};

export default NavBar;
