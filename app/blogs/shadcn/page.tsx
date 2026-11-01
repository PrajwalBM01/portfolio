import { BackLink, Bullet, List } from "@/components/Blog";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { days } from "./days";

export const metadata: Metadata = {
  title: "Shadcn/UI Internals | Prajwal B M",
  description:
    "Get into the internals of shadcn and understand the architecture.",
};

const page = () => {
  return (
    <>
      <BackLink href="/">Back</BackLink>

      <header className="flex flex-col gap-4">
        <Image
          src="/blogs/shadcn/cover.png"
          alt="shadcn/ui"
          width={800}
          height={116}
          priority
          className="w-full h-auto rounded-md border"
        />
        <h1 className="text-3xl font-bold">Shadcn/UI Internals.</h1>
        <p className="text-foreground/50">
          Get into the internals of shadcn and understand the architecture.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <p>Let&apos;s start the dissection -</p>
        <List>
          <Bullet>
            I will be skimming through different docs, blog posts and YT videos
            to understand the unknown.
          </Bullet>
          <Bullet>
            I will also be going through some unknown terms, and will share
            about them too.
          </Bullet>
          <Bullet>
            Along the way I will provide the links to the resources I referred
            to, so that you can read them in detail if you want to.
          </Bullet>
        </List>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-xmono text-2xl text-destructive">Days.</h2>
        <div className="flex flex-col gap-2">
          {days.map((day) => (
            <Link
              key={day.slug}
              href={`/blogs/shadcn/${day.slug}`}
              className="bg-accent/50 border hover:border-transparent rounded-md p-4 group hover:bg-accent transition-colors duration-200 cursor-pointer flex justify-between items-center gap-4"
            >
              <span>
                <h3>{day.title}</h3>
                <p className="text-xs text-foreground/50">{day.description}</p>
              </span>
              <ArrowUpRight className="shrink-0 opacity-25 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-200" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
