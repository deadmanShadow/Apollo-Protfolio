import { publicNavbarItems } from "@/constants";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  const navItems = publicNavbarItems;

  return (
    <footer className="mt-5 flex justify-center items-center w-full mx-auto md:max-w-3xl ">
      <div className="w-full mx-auto md:flex md:items-center md:justify-between text-sm font-medium text-neutral-700 dark:text-neutral-300">
        <p>
          © {year}
          <span className="ms-2 me-2">•</span>
          <Link
            href="https://imranhasan.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:underline-offset-4"
          >
            Imran Hasan
          </Link>
          <span className="ms-2 me-2">—</span>
          All rights reserved.
        </p>

        <div className="flex flex-wrap items-center pt-2 md:pt-0">
          {navItems.map((link, index) => (
            <div key={link.title}>
              <Link
                key={link.title}
                aria-label={link.title}
                href={link.url}
                className="hover:underline hover:underline-offset-4"
              >
                {link.title}
              </Link>
              {index < navItems.length - 1 && <span className="mx-2">|</span>}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
