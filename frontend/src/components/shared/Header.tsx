"use client";

import { authValidate } from "@/actions/auth.action";
import { publicNavbarItems } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
export function Header() {
  const [user, setUser] = useState<Record<string, any> | null>(null);

  const pathname = usePathname();

  const navItems = publicNavbarItems;

  useEffect(() => {
    const checkAuth = async () => {
      const res = await authValidate();
      setUser(res?.data);
    };
    checkAuth();
  }, []);

  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto bg-white dark:bg-black border-b py-2">
      <div className="flex items-center justify-between w-full md:max-w-3xl mx-4 ">
        <nav className="flex justify-center items-center">
          {navItems.map((link) => (
            <Button asChild variant="ghost" size={null} key={link.title}>
              <Link
                key={link.title}
                aria-label={link.title}
                href={link.url}
                className={cn(
                  "relative block me-2 py-2 md:px-4 px-2 font-semibold",
                  {
                    "bg-neutral-100 dark:bg-neutral-800": pathname === link.url,
                    "hover:bg-neutral-100 dark:hover:bg-neutral-800":
                      pathname !== link.url,
                  }
                )}
              >
                {link.title}
              </Link>
            </Button>
          ))}
        </nav>

        {user?.email && (
          <Button asChild variant="ghost" size={null}>
            <Link
              href="/dashboard"
              className={cn(
                "relative block me-2 py-2 md:px-4 px-2 font-semibold"
              )}
            >
              Dashboard
            </Link>
          </Button>
        )}
      </div>
    </header>
  );
}
