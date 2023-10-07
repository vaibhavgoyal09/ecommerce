import React from "react";
import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "./ui/navigation-menu";
import Link from "next/link";

function NavBar() {
  return (
    <div className="w-full bg-gray-800 px-8 py-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent></NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
            <NavigationMenuContent></NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/blog" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blogs
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about-us" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default NavBar;
