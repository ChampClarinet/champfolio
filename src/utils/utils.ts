import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const slideToSection = (sectionId: string) => {
  if (typeof window == "undefined") return;
  const elem = document.querySelector(`section#${sectionId}`);
  if (elem) {
    elem.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const uniqueArray = <T>(arr: T[]): T[] => {
  return Array.from(new Set(arr));
};

export const scrollToTop = () => {
  if (typeof window == "undefined") return;
  const mainEl = document.querySelector("#main > div");
  if (mainEl) {
    mainEl.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};
