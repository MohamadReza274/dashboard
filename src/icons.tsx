import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

export const MenuIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path d="M15 12H3" />
      <path d="M17 18H3" />
      <path d="M21 6H3" />
    </svg>
  );
};
