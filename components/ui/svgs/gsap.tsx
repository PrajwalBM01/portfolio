import type { SVGProps } from "react";

const Gsap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 248 248"
    aria-hidden="true"
  >
    <path
      fill="url(#gsap-gradient)"
      fillRule="evenodd"
      d="M62 124c-34.242 0-62 27.759-62 62s27.759 62 62 62 62-27.758 62-62c0 34.242 27.758 62 62 62s62-27.758 62-62c0-34.241-27.758-62-62-62 34.242 0 62-27.758 62-62 0-34.241-27.758-62-62-62s-62 27.759-62 62c0-34.24-27.758-62-62-62S0 27.76 0 62c0 34.242 27.759 62 62 62"
      clipRule="evenodd"
    ></path>
    <path
      fill="url(#gsap-gradient)"
      fillRule="evenodd"
      d="M62 124c-34.242 0-62 27.759-62 62s27.759 62 62 62 62-27.758 62-62c0 34.242 27.758 62 62 62s62-27.758 62-62c0-34.241-27.758-62-62-62 34.242 0 62-27.758 62-62 0-34.241-27.758-62-62-62s-62 27.759-62 62c0-34.24-27.758-62-62-62S0 27.76 0 62c0 34.242 27.759 62 62 62"
      clipRule="evenodd"
    ></path>
    <defs>
      <radialGradient
        id="gsap-gradient"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(-48.289 195.768 87.754)scale(235.103 157.04)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ABFF83"></stop>
        <stop offset="0.807" stopColor="#4EEF60"></stop>
        <stop offset="1" stopColor="#01E447"></stop>
      </radialGradient>
    </defs>
  </svg>
);

export { Gsap };
