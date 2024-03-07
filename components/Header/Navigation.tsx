"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { data } from "./navConfig";
import Link from "next/link";
const Navigation = () => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {data.map((obj) => {
          if (obj.subMenu) {
            return (
              <NavigationMenuItem key={obj.label}>
                <NavigationMenuTrigger>{obj.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 w-[400px]  ">
                    {obj.menu?.map((item) => {
                      return (
                        <NavigationMenuItem key={item.label}>
                          <Link href={item.path!} legacyBehavior passHref>
                            <NavigationMenuLink
                              className={navigationMenuTriggerStyle()}
                            >
                              {item.label}
                            </NavigationMenuLink>
                          </Link>
                        </NavigationMenuItem>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }
          return (
            <NavigationMenuItem key={obj.label}>
              <Link href={obj.path!} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {obj.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
