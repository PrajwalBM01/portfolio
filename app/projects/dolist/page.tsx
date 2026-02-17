"use client";
import ProjectDetials from "@/components/ProjectDetials";
import StackBadge from "@/components/StackBadge";
import { Expressjs } from "@/components/ui/svgs/expressjs";
import { ExpressjsDark } from "@/components/ui/svgs/expressjsDark";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Jwt } from "@/components/ui/svgs/jwt";
import { MongodbIconDark } from "@/components/ui/svgs/mongodbIconDark";
import { MongodbIconLight } from "@/components/ui/svgs/mongodbIconLight";
import { Motion } from "@/components/ui/svgs/motion";
import { MotionDark } from "@/components/ui/svgs/motionDark";
import { Nodejs } from "@/components/ui/svgs/nodejs";
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
      // src="ff"
      title="Dolist"
      description="A full-stack application for managing tasks and to-do lists, featuring the ability to add, delete, and edit tasks. It also segregates tasks into 'Today,' 'Upcoming,' and 'Completed' categories."
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
        <StackBadge name={"zustand"}></StackBadge>
        <StackBadge name={"node.js"}>
          <Nodejs />
        </StackBadge>
        <StackBadge name={"express"}>
          {currentTheme === "dark" ? <ExpressjsDark /> : <Expressjs />}
        </StackBadge>
        <StackBadge name={"jwt"}>
          <Jwt />
        </StackBadge>
        <StackBadge name={"mogodb"}>
          {currentTheme === "dark" ? <MongodbIconDark /> : <MongodbIconLight />}
        </StackBadge>
      </div>
    </ProjectDetials>
  );
};

export default page;
