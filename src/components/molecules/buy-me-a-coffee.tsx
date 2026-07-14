"use client";

import { type FC } from "react";

import { buyMeACoffee } from "@/config/links";
import { motion } from "motion/react";

import { Button } from "../ui/button";
import { Text } from "../ui/text";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export interface BuyMeACoffeeButtonProps {
  onTop: boolean;
}
const BuyMeACoffeeButton: FC<BuyMeACoffeeButtonProps> = ({ onTop }) => {
  return (
    <motion.div
      layout
      animate={onTop ? { y: [0, -2, 0] } : { y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <Button asChild className="flex h-10 w-10 items-center justify-center rounded-full !p-0">
            <a
              href={buyMeACoffee}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buy me a coffee"
            >
              <Text className="text-2xl">☕</Text>
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <Text className="dark:text-blue-dark text-white">Buy me a coffee</Text>
        </TooltipContent>
      </Tooltip>
    </motion.div>
  );
};

export default BuyMeACoffeeButton;
