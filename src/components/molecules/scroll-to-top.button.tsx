import { type FC } from "react";

import { scrollToTop } from "@/utils/utils";
import { ArrowUpIcon } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "../ui/button";

const ScrollToTopButton: FC = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 340, damping: 26 }}
    >
      <Button
        className="flex h-10 w-10 items-center justify-center rounded-full !p-0"
        onClick={scrollToTop}
        aria-label="Scroll to Top"
      >
        <ArrowUpIcon />
      </Button>
    </motion.div>
  );
};

export default ScrollToTopButton;
