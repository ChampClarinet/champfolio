import type { FC } from "react";

import Link from "@/components/ui/link";
import { line } from "@/config/links";

export interface LineIconProps {
  size?: number;
}
const LineIcon: FC<LineIconProps> = ({ size = 50 }) => {
  return (
    <Link name="Add Line" link={line}>
      <svg
        viewBox="0 0 170 170"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
      >
        <rect x="0" y="0" width="170" height="170" rx="30" ry="30" fill="var(--icon-color)" />
        <path
          d="M147 78
       c0-28-28-50-62-50.5
       -34 0-62 22.5-62 50.5
       0 25 22 45.5 52 50
       2 .5 5 1.5 5.5 3
       .5 1.5.5 4 0 5.5
       0 0-.5 4.5-1 5.5
       -.5 1.5-1 6 5.5 3.5
       6.5-3 35.5-21 48.7-36
       9-10 13-20 13.3-31z"
          fill="var(--background)"
        />

        <polyline
          points="48.2,66.5 48.2,91.5 60.5,91.5"
          stroke="var(--icon-color)"
          strokeWidth="6.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        <line
          x1="70.2"
          y1="66.5"
          x2="70.2"
          y2="91.5"
          stroke="var(--icon-color)"
          strokeWidth="6.5"
          strokeLinecap="round"
        />

        <polyline
          points="81.2,91.5 81.2,66.5 99.8,91.5 99.8,66.5"
          stroke="var(--icon-color)"
          strokeWidth="6.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        <polyline
          points="123.2,66.5 110.8,66.5 110.8,91.5 123.2,91.5"
          stroke="var(--icon-color)"
          strokeWidth="6.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <line
          x1="110.8"
          y1="79"
          x2="123.2"
          y2="79"
          stroke="var(--icon-color)"
          strokeWidth="6.5"
          strokeLinecap="round"
        />
      </svg>
    </Link>
  );
};

export default LineIcon;
