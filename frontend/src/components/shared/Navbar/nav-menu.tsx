import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { useEffect, useState } from "react";

export const NavMenu = (props: NavigationMenuProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = sessionStorage.getItem("authToken");
      setIsLoggedIn(!!token);
    };

    checkAuth();

    const handleStorageChange = () => checkAuth();
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-end font-medium ">
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="hover:border-b-2 md:hover:border-none hover:text-[#00CED1] hover:border-[#00CED1] hover:bg-transparent transition duration-300 ease-in-out"
          >
            <Link href="/#about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="hover:border-b-2 md:hover:border-none hover:text-[#00CED1] hover:border-[#00CED1] hover:bg-transparent transition duration-300 ease-in-out"
          >
            <Link href="/#projects">Projects</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="hover:border-b-2 md:hover:border-none hover:text-[#00CED1] hover:border-[#00CED1] hover:bg-transparent transition duration-300 ease-in-out"
          >
            <Link href="/#blogs">Blogs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="hover:border-b-2 md:hover:border-none hover:text-[#00CED1] hover:border-[#00CED1] hover:bg-transparent transition duration-300 ease-in-out"
          >
            <Link href="/#contact">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {isLoggedIn && (
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="hover:border-b-2 md:hover:border-none hover:text-[#00CED1] hover:border-[#00CED1] hover:bg-transparent transition duration-300 ease-in-out"
            >
              <Link href="/dashboard">Dashboard</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
