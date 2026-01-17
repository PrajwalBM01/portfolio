"use client";
import StackBadge from "./StackBadge";
import { useTheme } from "next-themes";
import { Javascript } from "./ui/svgs/javascript";
import { Typescript } from "./ui/svgs/typescript";
import { Html5 } from "./ui/svgs/html5";
import { CssOld } from "./ui/svgs/cssOld";
import { ReactDark } from "./ui/svgs/reactDark";
import { ReactLight } from "./ui/svgs/reactLight";
import { Tailwindcss } from "./ui/svgs/tailwindcss";
import { Gsap } from "./ui/svgs/gsap";
import { MotionDark } from "./ui/svgs/motionDark";
import { Motion } from "./ui/svgs/motion";
import { ShadcnUiDark } from "./ui/svgs/shadcnUiDark";
import { ShadcnUi } from "./ui/svgs/shadcnUi";
import { TanStack } from "./ui/svgs/tanstack";
import { ThreejsDark } from "./ui/svgs/threejsDark";
import { ThreejsLight } from "./ui/svgs/threejsLight";
import { Nodejs } from "./ui/svgs/nodejs";
import { ExpressjsDark } from "./ui/svgs/expressjsDark";
import { Expressjs } from "./ui/svgs/expressjs";
import { Jwt } from "./ui/svgs/jwt";
import { Postgresql } from "./ui/svgs/postgresql";
import { MongodbIconDark } from "./ui/svgs/mongodbIconDark";
import { MongodbIconLight } from "./ui/svgs/mongodbIconLight";
import { PrismaDark } from "./ui/svgs/prismaDark";
import { Prisma } from "./ui/svgs/prisma";
import { Neon } from "./ui/svgs/neon";
import { CursorDark } from "./ui/svgs/cursorDark";
import { CursorLight } from "./ui/svgs/cursorLight";
import { Postman } from "./ui/svgs/postman";
import { VercelDark } from "./ui/svgs/vercelDark";
import { Vercel } from "./ui/svgs/vercel";
import { Npm } from "./ui/svgs/npm";
import { NextjsIconDark } from "./ui/svgs/nextjsIconDark";

const Stacks = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-xmono text-xl text-destructive">Stack.</h1>
      <div className="px-4 flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-primary/60">Language</p>
          <div className="flex flex-wrap gap-2">
            <StackBadge name={"javascript"}>
              <Javascript />
            </StackBadge>
            <StackBadge name={"typescript"}>
              <Typescript />
            </StackBadge>
            <StackBadge name={"html"}>
              <Html5 />
            </StackBadge>
            <StackBadge name={"CSS"}>
              <CssOld />
            </StackBadge>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-primary/60">Frontend</p>
          <div className="flex flex-wrap gap-2">
            <StackBadge name={"react"}>
              {theme === "dark" ? <ReactDark /> : <ReactLight />}
            </StackBadge>
            <StackBadge name={"nextjs"}>
              <NextjsIconDark />
            </StackBadge>
            <StackBadge name={"tailwindcss"}>
              <Tailwindcss />
            </StackBadge>
            <StackBadge name={"GSAP"}>
              <Gsap />
            </StackBadge>
            <StackBadge name={"motion.dev"}>
              {theme === "dark" ? <MotionDark /> : <Motion />}
            </StackBadge>
            <StackBadge name={"shadcn"}>
              {theme === "dark" ? <ShadcnUiDark /> : <ShadcnUi />}
            </StackBadge>
            <StackBadge name={"tanstack"}>
              <TanStack />
            </StackBadge>
            <StackBadge name="threejs">
              {theme === "dark" ? <ThreejsDark /> : <ThreejsLight />}
            </StackBadge>
            <StackBadge name={"zustand"}></StackBadge>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-primary/60">Backend & Database</p>
          <div className="flex flex-wrap gap-2">
            <StackBadge name={"node.js"}>
              <Nodejs />
            </StackBadge>
            <StackBadge name={"express"}>
              {theme === "dark" ? <ExpressjsDark /> : <Expressjs />}
            </StackBadge>
            <StackBadge name={"jwt"}>
              <Jwt />
            </StackBadge>
            <StackBadge name={"postgres"}>
              <Postgresql />
            </StackBadge>
            <StackBadge name={"mogodb"}>
              {theme === "dark" ? <MongodbIconDark /> : <MongodbIconLight />}
            </StackBadge>
            <StackBadge name={"prisma"}>
              {theme === "dark" ? <PrismaDark /> : <Prisma />}
            </StackBadge>
            <StackBadge name={"neondb"}>
              <Neon />
            </StackBadge>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-primary/60">And also</p>
          <div className="flex flex-wrap gap-2">
            <StackBadge name={"Cursor"}>
              {theme === "dark" ? <CursorDark /> : <CursorLight />}
            </StackBadge>

            <StackBadge name={"postman"}>
              <Postman />
            </StackBadge>
            <StackBadge name={"vercel"}>
              {theme === "dark" ? <VercelDark /> : <Vercel />}
            </StackBadge>
            <StackBadge name={"NPM"}>
              <Npm />
            </StackBadge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stacks;
