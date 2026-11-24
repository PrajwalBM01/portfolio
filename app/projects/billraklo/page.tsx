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

const Billraklo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted && resolvedTheme ? resolvedTheme : "light";
  return (
    <ProjectDetials
      src="https://dfvwlznpwuhtzzlanurx.supabase.co/storage/v1/object/public/korospace-prod/Screenshot%202026-11-25%20004233.png"
      title="Billraklo"
      description="An AI-powered invoice management platform that turns WhatsApp bills into structured accounting records. Extract supplier details, line items, and GST breakdowns from images and PDFs, with support for multiple invoices per file. Review and correct extracted data, manage clients, and export records as CSV or TallyPrime-compatible XML."
      github="https://github.com/PrajwalBM01/billraklo"
      website="https://billraklo.vercel.app"
      post="https://x.com/xshadowdev/status/2122942438394487147?a=AOJKcKTORGJLSXDsOeY&s=20"
      progress="Under development"
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
        <StackBadge name={"BullMQ"}></StackBadge>
        <StackBadge name={"Redis"}></StackBadge>
        <StackBadge name={"Meta Webhook"}></StackBadge>
        <StackBadge name={"postgres"}>
          <Postgresql />
        </StackBadge>
      </div>
    </ProjectDetials>
  );
};
export default Billraklo;
