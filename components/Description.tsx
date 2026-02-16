"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Linkedin } from "./ui/svgs/linkedin";
import { XDark } from "./ui/svgs/xDark";
import { X } from "./ui/svgs/x";
import { GithubDark } from "./ui/svgs/githubDark";
import { GithubLight } from "./ui/svgs/githubLight";
import { Gmail } from "./ui/svgs/gmail";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const Description = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted && resolvedTheme ? resolvedTheme : "light";
  return (
    <div className="p-2 flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <p className="px-2">
          I see web development as a craft. I’m the type of person who stays up
          late obsessing over pixels and small details because I want things to
          look just right. I love building things from scratch and figuring out
          how everything fits together as a system. My philosophy is pretty
          simple: keep the UI minimal and the UX even simpler. I’m always
          curious, always learning, and always looking for the next cool thing
          to build.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-xmono text-destructive text-xl">
          Connect with me on
        </h1>
        <div className="flex items-center gap-4 px-4">
          <a
            href="https://www.linkedin.com/in/prajwalbm/"
            target="_blank"
            className="flex gap-1 justify-center items-center px-2"
          >
            <Linkedin className="size-4" />
            <span>Linkedin</span>
          </a>
          <a
            href="https://x.com/xshadowdev"
            target="_blank"
            className="flex gap-1 justify-center items-center px-2"
          >
            <span className="size-4">
              {currentTheme === "dark" ? <XDark /> : <X />}
            </span>
            <span>Twitter(x)</span>
          </a>
          <a
            href="https://github.com/PrajwalBM01"
            target="_blank"
            className="flex gap-1 justify-center items-center px-2"
          >
            <span className="size-4">
              {currentTheme === "dark" ? <GithubDark /> : <GithubLight />}
            </span>
            <span>Github</span>
          </a>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="mailto:bmprajwaldvg@gmail.com"
                className="flex gap-1 justify-center items-center px-2"
              >
                <Gmail className="size-4" />
                <span>Gmail</span>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              bmprajwaldvg@gmail.com
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Description;
