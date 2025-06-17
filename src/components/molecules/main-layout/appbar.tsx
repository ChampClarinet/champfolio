"use client";

import { type FC } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Text } from "@/components/ui/text";
import { email } from "@/config/links";
import { useLanguage } from "@/hooks/use-language";
import { useMounted } from "@/hooks/use-mounted";
import { useTheme } from "@/hooks/use-theme";
import { cn, slideToSection } from "@/utils/utils";
import { MenuIcon } from "lucide-react";

const Appbar: FC = () => {
  const { resolvedTheme, switcher, setTheme } = useTheme();
  const { languageSelector } = useLanguage();

  const handleHireMe = () => {
    window.open(email);
  };

  const goToTop = () => {
    if (typeof window != "undefined") {
      const mainEl = document.querySelector("#main > div");
      if (mainEl) {
        mainEl.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
    }
  };

  const mobileMenuClasses = cn("px-4 py-2 text-lg capitalize");

  const items = [
    { label: "home", onClick: goToTop },
    { label: "about", onClick: () => slideToSection("about") },
    { label: "portfolio", onClick: () => slideToSection("portfolio") },
    { label: "contact", onClick: () => slideToSection("contact") },
  ];

  const mounted = useMounted();

  if (!mounted) return <></>;
  return (
    <div className="appbar @container fixed top-0 right-0 left-0 h-20">
      <div className="flex h-full w-full items-center justify-between px-4 @xl:px-8 @5xl:px-12">
        <div className="left-area flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MenuIcon className="cursor-pointer md:hidden" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-101">
              {items.map(({ label, onClick }, i) => (
                <DropdownMenuItem key={i} className={mobileMenuClasses} onClick={onClick}>
                  {label}
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem
                className={mobileMenuClasses}
                onClick={() => setTheme(resolvedTheme == "dark" ? "light" : "dark")}
              >
                {resolvedTheme == "dark" ? "Light mode" : "Dark mode"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Text variant="logo" className="xxs:block hidden">
            Champ
          </Text>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <nav className="menu mr-2 flex items-stretch gap-2">
              {items.map(({ label, onClick }, i) => (
                <Button
                  key={i}
                  variant="ghost"
                  onClick={onClick}
                  className="px-2 capitalize lg:px-4"
                >
                  {label}
                </Button>
              ))}
            </nav>
            {switcher}
          </div>
          {languageSelector}
          <Button variant="graident" onClick={handleHireMe}>
            Hire me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
