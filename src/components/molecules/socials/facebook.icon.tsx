import type { FC } from "react";

import { facebook } from "@/config/links";

import Base from "./base";

export interface FacebookIconProps {
  size?: number;
}
const FacebookIcon: FC<FacebookIconProps> = ({ size = 50 }) => {
  return (
    <Base name="Facebook" link={facebook}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.5068 0.55957H13.5068C10.059 0.55957 6.75242 1.92921 4.31445 4.36718C1.87647 6.80515 0.506836 10.1118 0.506836 13.5596V37.5596C0.506836 41.0074 1.87647 44.314 4.31445 46.752C6.75242 49.1899 10.059 50.5596 13.5068 50.5596H37.5068C40.9547 50.5596 44.2612 49.1899 46.6992 46.752C49.1372 44.314 50.5068 41.0074 50.5068 37.5596V13.5596C50.5068 10.1118 49.1372 6.80515 46.6992 4.36718C44.2612 1.92921 40.9547 0.55957 37.5068 0.55957Z"
          fill="var(--icon-color)"
        />

        <path
          d="M32.5068 10.5596H39.5068V16.5596H35.5068C34.7112 16.5596 33.9481 16.8756 33.3855 17.4382C32.8229 18.0009 32.5068 18.7639 32.5068 19.5596V22.5596H39.5068V28.5596H32.5068V48.5596H26.5068V28.5596H20.5068V22.5596H26.5068V15.5596C26.5068 13.7031 27.2443 11.9226 28.5571 10.6098C29.8698 9.29707 31.6503 8.55957 33.5068 8.55957H39.5068V10.5596H32.5068Z"
          fill="var(--background)"
        />
      </svg>
    </Base>
  );
};

export default FacebookIcon;
