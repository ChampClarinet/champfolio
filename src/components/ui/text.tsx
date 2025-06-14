import { type ComponentProps, type FC } from "react";

import { cn } from "@/utils/utils";
import { type VariantProps, cva } from "class-variance-authority";

const textVariants = cva("leading-6", {
  variants: {
    variant: {
      base: "text-base",
      logo: "font-oleo !text-black dark:text-foreground! text-3xl select-none",
      title: "font-semibold text-4xl",
      subtitle: "text-base md:text-xl",
    },
    intensity: {
      normal: "text-foreground",
      faded: "text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "base",
    intensity: "normal",
  },
});

const Text: FC<ComponentProps<"span"> & VariantProps<typeof textVariants>> = ({
  variant,
  intensity,
  className,
  ...props
}) => {
  return <span className={cn(textVariants({ variant, intensity, className }))} {...props} />;
};

export { Text, textVariants };
