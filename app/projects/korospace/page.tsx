"use client";
import ProjectDetials from "@/components/ProjectDetials";
import StackBadge from "@/components/StackBadge";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Vercel } from "@/components/ui/svgs/vercel";
import { VercelDark } from "@/components/ui/svgs/vercelDark";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const Korospace = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted && resolvedTheme ? resolvedTheme : "light";
  return (
    <ProjectDetials
      src="https://dfvwlznpwuhtzzlanurx.supabase.co/storage/v1/object/public/korospace-prod/Video%20Project%208.mp4"
      title="Korospace"
      description="A canvas-based AI chat tool. Instead of one scrolling thread, conversations live as nodes on an infinite canvas, branch any answer into its own thread, wire threads together and every node inherits exactly the context you connected to it. Switch models per node and bring your own key."
      github="https://github.com/PrajwalBM01/korospace"
      website="https://korospace.vercel.app/"
      post="https://x.com/xshadowdev/status/2095024169167864318?a=9GAnR0SP6lHqmHV3ews&s=20"
    >
      <div className="flex flex-wrap gap-2">
        <StackBadge name={"nextjs"}>
          <NextjsIconDark />
        </StackBadge>
        <StackBadge name={"vercel ai sdk"}>
          {currentTheme === "dark" ? <VercelDark /> : <Vercel />}
        </StackBadge>
        <StackBadge name={"typescript"}>
          <Typescript />
        </StackBadge>
        <StackBadge name={"react flow"}></StackBadge>
        <StackBadge name={"openrouter"}></StackBadge>
        <StackBadge name={"postgres"}>
          <Postgresql />
        </StackBadge>
      </div>
    </ProjectDetials>
  );
};
export default Korospace;
