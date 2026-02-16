"use client";
import ProjectDetials from "@/components/ProjectDetials";
import StackBadge from "@/components/StackBadge";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Motion } from "@/components/ui/svgs/motion";
import { MotionDark } from "@/components/ui/svgs/motionDark";
import { ReactDark } from "@/components/ui/svgs/reactDark";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const page = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted && resolvedTheme ? resolvedTheme : "light";
  return (
    <ProjectDetials
      src="https://d2ac3v28w5mhij.cloudfront.net/dolist.mp4"
      title="Fightclub"
      description="A tribute to the movie Fight Club, filled with motion graphics and animations that tell the story of Tyler Durden, Marla singer and the Narrator. It includes character introductions and the rules of Fight Club (which I just broke). SO DO NOT TALK ABOUT F**** C*** "
      github="https://github.com/PrajwalBM01/dolist"
      website="https://dolist-1.onrender.com/"
      post="https://x.com/xshadowdev/status/1920515060184822039?s=20"
    >
      <div className="flex flex-wrap gap-2">
        <StackBadge name={"react"}>
          {currentTheme === "dark" ? <ReactDark /> : <ReactLight />}
        </StackBadge>
        <StackBadge name={"tailwindcss"}>
          <Tailwindcss />
        </StackBadge>
        <StackBadge name={"javascript"}>
          <Javascript />
        </StackBadge>
        <StackBadge name={"motion.dev"}>
          {currentTheme === "dark" ? <MotionDark /> : <Motion />}
        </StackBadge>
      </div>
    </ProjectDetials>
  );
};

export default page;
