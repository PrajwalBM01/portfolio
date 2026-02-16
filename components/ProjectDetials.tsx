"use client";
import { title } from "process";
import React, { useEffect, useState } from "react";
import { GithubDark } from "./ui/svgs/githubDark";
import { useTheme } from "next-themes";
import StackBadge from "./StackBadge";
import { ReactDark } from "./ui/svgs/reactDark";
import { ReactLight } from "./ui/svgs/reactLight";
import { GithubLight } from "./ui/svgs/githubLight";
import { Globe } from "lucide-react";
import { XDark } from "./ui/svgs/xDark";
import { X } from "./ui/svgs/x";

interface DetailsType {
  src: string;
  title: string;
  description: string;
  github: string;
  website?: string;
  post?: string;
  children: React.ReactNode;
}
const ProjectDetials = ({
  src,
  title,
  description,
  github,
  website,
  children,
  post,
}: DetailsType) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted && resolvedTheme ? resolvedTheme : "light";
  return (
    <div className="flex flex-col divide-accent divide-y-2">
      <video
        src={src}
        autoPlay
        loop
        controls
        playsInline
        muted
        className="rounded-md"
      />
      <div className="flex justify-between p-2">
        <div className="flex gap-4">
          <a
            href={github}
            target="_blank"
            className="flex justify-center border items-center gap-2 hover:bg-accent p-2 rounded transition-all duration-200"
          >
            <span className=" size-5">
              {currentTheme === "dark" ? <GithubDark /> : <GithubLight />}
            </span>
            Github
          </a>
          <a
            href={website}
            target="_blank"
            className="flex justify-center border items-center gap-2 hover:bg-accent p-2 rounded transition-all duration-200"
          >
            <Globe size={20} />
            Website
          </a>
          <a
            href={post}
            target="_blank"
            className="flex justify-center border items-center gap-2 hover:bg-accent p-2 rounded transition-all duration-200"
          >
            <span className=" size-4">
              {currentTheme === "dark" ? <XDark /> : <X />}
            </span>
            Post
          </a>
        </div>
        <div className="flex items-center gap-1 pr-6 select-none">
          <div className="relative flex items-center justify-center">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping group-hover:hidden bg-green-500 dark:bg-green-500"
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                opacity: "0.4",
              }}
            ></div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="relative z-10 text-green-500 dark:text-green-500"
              height="14"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path>
            </svg>
          </div>
          <p className="text-sm text-mutedForeground font-medium">Live</p>
        </div>
      </div>
      <div className="flex flex-col p-2 gap-4">
        <h1 className="font-bold text-2xl">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="px-2 py-4">{children}</div>
    </div>
  );
};

export default ProjectDetials;
