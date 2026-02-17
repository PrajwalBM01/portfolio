"use client";
import ProjectDetials from "@/components/ProjectDetials";
import StackBadge from "@/components/StackBadge";
import { CssOld } from "@/components/ui/svgs/cssOld";
import { Gsap } from "@/components/ui/svgs/gsap";
import { Html5 } from "@/components/ui/svgs/html5";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss";
import { ThreejsDark } from "@/components/ui/svgs/threejsDark";
import { ThreejsLight } from "@/components/ui/svgs/threejsLight";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ironman = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted && resolvedTheme ? resolvedTheme : "light";
  return (
    <ProjectDetials
      src="https://d2ac3v28w5mhij.cloudfront.net/ironman.mp4"
      // src="fff"
      title="Ironman"
      description="An archival documentary of Iron Man's Mark 1 suit, featuring a 3D model and interactive parts. It dissects each part of the suit in detail, along with their specifications and summaries, to dive into the world of Tony Stark's marvelous engineering."
      github="https://github.com/PrajwalBM01/mark_1"
      website="https://mark1-p86.vercel.app/"
      post="https://x.com/xshadowdev/status/1957349751344754878?s=20"
    >
      <div className="flex flex-wrap gap-2">
        <StackBadge name={"html"}>
          <Html5 />
        </StackBadge>
        <StackBadge name={"CSS"}>
          <CssOld />
        </StackBadge>
        <StackBadge name={"javascript"}>
          <Javascript />
        </StackBadge>
        <StackBadge name={"tailwindcss"}>
          <Tailwindcss />
        </StackBadge>
        <StackBadge name="threejs">
          {currentTheme === "dark" ? <ThreejsDark /> : <ThreejsLight />}
        </StackBadge>
        <StackBadge name={"GSAP"}>
          <Gsap />
        </StackBadge>
      </div>
    </ProjectDetials>
  );
};

export default ironman;
