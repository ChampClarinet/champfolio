import * as React from "react";

import { cn } from "@/utils/utils";
import * as TabsPrimitive from "@radix-ui/react-tabs";

function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn("border-border xs:gap-2 flex h-9 w-fit gap-1 border-b sm:gap-4", className)}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "text-foreground hover:text-primary hover:border-primary cursor-pointer border-b-2 border-transparent px-4 py-2 text-base font-medium whitespace-nowrap transition-colors duration-200 ease-in-out",
        "data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:font-semibold", //? Active
        "dark:text-muted-foreground dark:hover:text-primary dark:hover:border-primary dark:data-[state=active]:text-primary dark:data-[state=active]:border-primary", //? Dark mode
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
