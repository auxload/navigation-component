"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center  justify-center rounded-md     text-sm font-medium transition-colors hover:underline X hover:text-accent-foreground focus:underline focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:underline "
);
import Link from "next/link";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { data } from "./navConfig";
const Navigation = () => {
  return (
    <NavigationMenu className="flex-none block max-w-none">
      <NavigationMenuList className="flex-none block space-x-0">
        {data.map((obj) => {
          if (obj.subMenu) {
            return (
              <LinkItemMenu
                key={obj.label}
                label={obj.label}
                menu={obj.menu!}
              />
            );
          }
          return (
            <LinkItem key={obj.label} label={obj.label} path={obj.path!} />
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export const LinkItem = ({ path, label }: { path: string; label: string }) => {
  return (
    <NavigationMenuItem className="flex-none block">
      <Link href={path!} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            "w-full flex  justify-start py-6 rounded-none "
          )}
        >
          {label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};
export const LinkItemVariation = ({
  path,
  label,
}: {
  path: string;
  label: string;
}) => {
  return (
    <NavigationMenuItem className="flex-none block">
      <Link href={path!} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            "w-full flex hover:bg-transparent  justify-start py-6 rounded-none "
          )}
        >
          {label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

export const LinkItemMenu = ({
  label,
  menu,
}: {
  label: string;
  menu: { path: string; label: string }[];
}) => {
  return (
    <NavigationMenuItem>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            className={cn(
              navigationMenuTriggerStyle(),
              "justify-between rounded-none py-6"
            )}
          >
            {label}
          </AccordionTrigger>
          <AccordionContent className="flex   gap-4">
            <span className="w-[2px]  bg-accent "></span>
            <NavigationMenuList className="flex-none block space-x-0">
              {menu.map((item) => {
                return (
                  <LinkItemVariation
                    key={item.label}
                    label={item.label}
                    path={item.path}
                  />
                );
              })}
            </NavigationMenuList>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </NavigationMenuItem>
  );
};


const MobileNavigation = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent
          className="flex flex-col justify-between overflow-auto"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <Navigation />
          <div className="grid gap-2">
            <Button>Login</Button>
            <Button variant={"ghost"}>Sign In</Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavigation;
