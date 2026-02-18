"use client";
import { ArrowRight, Badge } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Neon } from "./ui/svgs/neon";
import { ReactLight } from "./ui/svgs/reactLight";
import StackBadge from "./StackBadge";
import { Jwt } from "./ui/svgs/jwt";
import { div } from "motion/react-client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface ProjectTypes {
  href: string;
  src: string;
  title: string;
  description: string;
}


const Project = ({ href, src, title, description }: ProjectTypes) => {
  const [hovered, sethovered] = useState(false);
  return (
    <Link
      onMouseEnter={() => sethovered(true)}
      onMouseLeave={() => sethovered(false)}
      href={href}
      className="bg-accent/50 border group hover:border-transparent rounded-md p-1.5 group hover:bg-accent transition-colors duration-200 cursor-pointer"
    >
      <div className="h-full w-full">
        <Image
          src={src}
          alt="project"
          width={400}
          height={400}
          className="rounded-sm border" 
        />
      </div>
      <div>
        <h1 className="md:text-lg font-semibold">{title}</h1>
        <p className=" text-xs md:text-sm text-foreground/50">{description}</p>
      </div>
      <div className="flex items-center justify-end gap-2">
        <p className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-200">
          Know more
        </p>
        <ArrowRight
          size={18}
          className="-rotate-45 group-hover:rotate-0 transition-all duration-150 opacity-25 group-hover:opacity-100"
        />
      </div>
    </Link>
  );
};

export default Project;
