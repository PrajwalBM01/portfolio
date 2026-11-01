import { days } from "@/app/blogs/shadcn/days";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BackLink } from "./Blog";

export const DayHeader = ({
  slug,
  subtitle,
}: {
  slug: string;
  subtitle: string;
}) => {
  const day = days.find((d) => d.slug === slug)!;
  return (
    <>
      <BackLink href="/blogs/shadcn">Shadcn/UI Internals</BackLink>
      <header className="flex flex-col gap-2">
        <h1 className="font-xmono text-4xl text-destructive">{day.title}.</h1>
        <p className="text-foreground/50">{subtitle}</p>
      </header>
    </>
  );
};

export const DayNav = ({ slug }: { slug: string }) => {
  const i = days.findIndex((d) => d.slug === slug);
  const prev = days[i - 1];
  const next = days[i + 1];
  const card =
    "bg-accent/50 border hover:border-transparent rounded-md p-4 group hover:bg-accent transition-colors duration-200 flex flex-col gap-1";

  return (
    <nav className="grid sm:grid-cols-2 gap-4 pt-6 border-t">
      {prev ? (
        <Link href={`/blogs/shadcn/${prev.slug}`} className={card}>
          <span className="flex items-center gap-1 text-xs text-foreground/50">
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-0.5 transition-transform duration-200"
            />
            Previous
          </span>
          <span>{prev.title}</span>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}
      {next && (
        <Link href={`/blogs/shadcn/${next.slug}`} className={`${card} sm:items-end`}>
          <span className="flex items-center gap-1 text-xs text-foreground/50">
            Next
            <ArrowRight
              size={14}
              className="group-hover:translate-x-0.5 transition-transform duration-200"
            />
          </span>
          <span>{next.title}</span>
        </Link>
      )}
    </nav>
  );
};
