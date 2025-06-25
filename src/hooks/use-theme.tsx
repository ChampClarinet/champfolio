import { Switch } from "@/components/ui/switch";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme as baseUseTheme } from "next-themes";

export const useTheme = () => {
  const props = baseUseTheme();
  const { resolvedTheme, setTheme } = props;

  const switcher = (
    <div className="flex items-center gap-2">
      <SunIcon />
      <Switch
        checked={resolvedTheme == "dark"}
        onCheckedChange={() =>
          setTheme(() => {
            if (resolvedTheme == "dark") return "light";
            return "dark";
          })
        }
      />
      <MoonIcon />
    </div>
  );

  return { ...props, switcher };
};
