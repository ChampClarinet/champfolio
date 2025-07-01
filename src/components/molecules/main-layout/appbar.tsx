"use client";

import { type FC, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarPortal,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Text } from "@/components/ui/text";
import { email } from "@/config/links";
import { useLanguage } from "@/hooks/use-language";
import { useMounted } from "@/hooks/use-mounted";
import { useTheme } from "@/hooks/use-theme";
import { cn, scrollToTop, slideToElementId, slideToSection } from "@/utils/utils";
import { ChevronDown, MenuIcon } from "lucide-react";
import { motion } from "motion/react";
import { v7 } from "uuid";

const Appbar: FC = () => {
  const { resolvedTheme, switcher, setTheme } = useTheme();
  const { languageSelector } = useLanguage();

  const [desktopMenuState, setDesktopMenuOpen] = useState<"open" | "close">("close");

  const handleHireMe = () => {
    window.open(email);
  };

  const mobileMenuClasses = cn("px-4 py-2 text-lg capitalize");

  const mounted = useMounted();

  if (!mounted) return <></>;
  return (
    <div className="appbar @container fixed top-0 right-0 left-0 h-20">
      <div className="flex h-full w-full items-center justify-between px-4 @xl:px-8 @5xl:px-12">
        <div className="left-area flex items-center gap-2">
          <Menubar className="border-none">
            <MenubarMenu>
              <MenubarTrigger>
                <MenuIcon className="cursor-pointer lg:hidden" />
              </MenubarTrigger>
              <MenubarPortal>
                <MenubarContent>
                  {menuList.map(({ label, onClick, children }) => {
                    if (children?.length) {
                      return (
                        <MenubarSub key={v7()}>
                          <MenubarSubTrigger key={v7()} className={mobileMenuClasses}>
                            {label}
                          </MenubarSubTrigger>
                          <MenubarSubContent className="absolute bottom-0">
                            {children.map(({ onClick, label }) => (
                              <MenubarItem key={v7()} onClick={onClick}>
                                {label}
                              </MenubarItem>
                            ))}
                          </MenubarSubContent>
                        </MenubarSub>
                      );
                    }
                    return (
                      <MenubarItem className={mobileMenuClasses} key={v7()} onClick={onClick}>
                        {label}
                      </MenubarItem>
                    );
                  })}

                  <MenubarSeparator />
                  <MenubarItem
                    className={mobileMenuClasses}
                    onClick={() => setTheme(resolvedTheme == "dark" ? "light" : "dark")}
                  >
                    {resolvedTheme == "dark" ? "Light mode" : "Dark mode"}
                  </MenubarItem>
                </MenubarContent>
              </MenubarPortal>
            </MenubarMenu>
          </Menubar>

          <Text variant="logo" className="xxs:block hidden">
            Champ
          </Text>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex">
            <nav className="menu mr-2 flex items-stretch gap-2">
              {menuList.map(({ label, onClick, children }) => {
                const cls = cn("px-2 capitalize lg:px-4 flex items-center");
                if (children?.length) {
                  return (
                    <DropdownMenu
                      open={desktopMenuState == "open"}
                      onOpenChange={(state) => setDesktopMenuOpen(state ? "open" : "close")}
                      key={v7()}
                    >
                      <DropdownMenuTrigger className="flex cursor-pointer items-center gap-1 capitalize">
                        {label}
                        <motion.div
                          animate={desktopMenuState}
                          variants={{
                            close: { rotate: 0 },
                            open: {
                              rotate: 180,
                            },
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <ChevronDown className="h-3! w-3!" />
                        </motion.div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="z-1001">
                        {children.map(({ label, onClick }) => (
                          <DropdownMenuItem
                            key={v7()}
                            onClick={onClick}
                            className={cn(cls, "cursor-pointer")}
                          >
                            {label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }
                return (
                  <Text key={v7()} onClick={onClick} className={cls}>
                    {label}
                  </Text>
                );
              })}
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

const menuList = [
  { label: "home", onClick: scrollToTop },
  { label: "about", onClick: () => slideToSection("about") },
  { label: "skills", onClick: () => slideToSection("skills") },
  {
    label: "resume",
    children: [
      { label: "Work Experience", onClick: () => slideToElementId("work-experience") },
      { label: "Academics", onClick: () => slideToElementId("academics") },
      { label: "Lab Assistant Experience", onClick: () => slideToElementId("lab") },
      { label: "Languages", onClick: () => slideToElementId("languages") },
      { label: "Trivia", onClick: () => slideToElementId("non-dev") },
    ],
  },
  { label: "portfolio", onClick: () => slideToSection("portfolio") },
];
