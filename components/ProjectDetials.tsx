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
  progress?:string
}
const ProjectDetials = ({
  src,
  title,
  description,
  github,
  website,
  children,
  post,
  progress
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
      <div className="flex flex-wrap items-center justify-between gap-2 p-2">
  <div className="flex flex-wrap items-center gap-2">
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 border hover:bg-accent p-2 rounded transition-all duration-200"
    >
      <span className="size-5">
        {currentTheme === "dark" ? <GithubDark /> : <GithubLight />}
      </span>
      Github
    </a>

    {website && (
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 border hover:bg-accent p-2 rounded transition-all duration-200"
      >
        <Globe size={20} />
        Website
      </a>
    )}

    {post && (
      <a
        href={post}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 border hover:bg-accent p-2 rounded transition-all duration-200"
      >
        <span className="size-4">
          {currentTheme === "dark" ? <XDark /> : <X />}
        </span>
        Post
      </a>
    )}
  </div>

  <div className="flex items-center gap-1 shrink-0 whitespace-nowrap select-none">
    <div className="relative flex items-center justify-center">
      <div
        className="absolute animate-ping bg-green-500 rounded-full"
        style={{
          width: "10px",
          height: "10px",
          opacity: 0.4,
        }}
      />

      <svg
        stroke="currentColor"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="relative z-10 text-green-500"
        height="14"
        width="14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
      </svg>
    </div>

    <p className="text-sm text-mutedForeground font-medium">
      {progress || "Live"}
    </p>
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
