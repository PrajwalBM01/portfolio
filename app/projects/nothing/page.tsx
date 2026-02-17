"use client";
import ProjectDetials from "@/components/ProjectDetials";
import StackBadge from "@/components/StackBadge";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Motion } from "@/components/ui/svgs/motion";
import { MotionDark } from "@/components/ui/svgs/motionDark";
import { ReactDark } from "@/components/ui/svgs/reactDark";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss";
import { ThreejsDark } from "@/components/ui/svgs/threejsDark";
import { ThreejsLight } from "@/components/ui/svgs/threejsLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const nothing = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted && resolvedTheme ? resolvedTheme : "light";
  return (
    <ProjectDetials
      src="https://d2ac3v28w5mhij.cloudfront.net/nothing.mp4"
      // src="fff"
      title="NOTHING"
      description="A Bento-style design for the Nothing Phone, featuring SVG animations and motion graphics along with light and dark mode variations, interactive buttons, and a 3D model."
      github="https://github.com/PrajwalBM01/NTG-bento"
      website="https://ntg-bento.vercel.app/"
      post="https://x.com/xshadowdev/status/1939321706440695980?s=20"
    >
      <div className="flex flex-wrap gap-2">
        <StackBadge name={"react"}>
          {currentTheme === "dark" ? <ReactDark /> : <ReactLight />}
        </StackBadge>
        <StackBadge name={"tailwindcss"}>
          <Tailwindcss />
        </StackBadge>
        <StackBadge name={"typescript"}>
          <Typescript />
        </StackBadge>
        <StackBadge name={"motion.dev"}>
          {currentTheme === "dark" ? <MotionDark /> : <Motion />}
        </StackBadge>
        <StackBadge name="React Three Fiber">
          {currentTheme === "dark" ? <ThreejsDark /> : <ThreejsLight />}
        </StackBadge>
      </div>
    </ProjectDetials>
  );
};
export default nothing;
