import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectTypes {
  href: string;
  src: string;
  title: string;
  description: string;
}

const Project = ({ href, src, title, description }: ProjectTypes) => {
  return (
    <Link
      href={href}
      className="bg-accent/50 border hover:border-transparent rounded-md p-1.5 group hover:bg-accent transition-colors duration-200 cursor-pointer"
    >
      <div className="h-full w-full">
        <Image
          src={src}
          alt="ironman"
          width={400}
          height={400}
          className="rounded-sm border"
        />
      </div>
      <div>
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="text-sm text-foreground/50">{description}</p>
      </div>
    </Link>
  );
};

export default Project;
