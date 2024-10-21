import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

export const TeacherIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
        <path fill="currentColor"
              d="M20 17a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H9.46c.35.61.54 1.3.54 2h10v11h-9v2m4-10v2H9v13H7v-6H5v6H3v-8H1.5V9a2 2 0 0 1 2-2zM8 4a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2"></path>
      </svg>
  );
};

export const StudentIcon = (props: SVGProps<SVGSVGElement>) => {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}>
      <path fill="currentColor"
            d="m226.53 56.41l-96-32a8 8 0 0 0-5.06 0l-96 32A8 8 0 0 0 24 64v80a8 8 0 0 0 16 0V75.1l33.59 11.19a64 64 0 0 0 20.65 88.05c-18 7.06-33.56 19.83-44.94 37.29a8 8 0 1 0 13.4 8.74C77.77 197.25 101.57 184 128 184s50.23 13.25 65.3 36.37a8 8 0 0 0 13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64 64 0 0 0 20.65-88l44.12-14.7a8 8 0 0 0 0-15.18ZM176 120a48 48 0 1 1-86.65-28.45l36.12 12a8 8 0 0 0 5.06 0l36.12-12A47.9 47.9 0 0 1 176 120m-48-32.43L57.3 64L128 40.43L198.7 64Z"></path>
  </svg>)
}
