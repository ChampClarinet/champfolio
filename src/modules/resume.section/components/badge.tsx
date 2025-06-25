import type { ComponentProps, FC } from "react";

import { Badge as ShadCNBadge, type badgeVariants } from "@/components/ui/badge";
import { cn } from "@/utils/utils";
import type { VariantProps } from "class-variance-authority";

export interface BadgeProps extends ComponentProps<"span">, VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}
const Badge: FC<BadgeProps> = (props) => {
  const clickable = props.onClick != null;
  return (
    <ShadCNBadge
      {...props}
      className={cn(
        "bg-blue-medium block max-w-full min-w-0 overflow-hidden rounded-md text-ellipsis whitespace-nowrap text-white capitalize hover:brightness-110",
        clickable && "cursor-pointer",
        props.className,
      )}
    />
  );
};

export default Badge;
