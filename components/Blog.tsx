import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export const A = ({
  href,
  children,
}: {
  href: string;
  children?: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="text-destructive underline-offset-4 hover:underline break-words"
  >
    {children ?? href}
  </a>
);

export const InlineCode = ({ children }: { children: React.ReactNode }) => (
  <code className="px-1 py-0.5 rounded bg-accent border text-[0.85em]">
    {children}
  </code>
);

export const Code = ({ lang, children }: { lang: string; children: string }) => (
  <div className="rounded-md border bg-accent/50 overflow-hidden">
    <div className="px-3 py-1 border-b text-[0.7rem] text-foreground/50">
      {lang}
    </div>
    <pre className="p-3 overflow-x-auto text-sm leading-relaxed">
      <code>{children}</code>
    </pre>
  </div>
);

export const List = ({ children }: { children: React.ReactNode }) => (
  <ul className="flex flex-col gap-2">{children}</ul>
);

// children stack vertically, so wrap mixed text and links in a <span>
export const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex flex-row items-start gap-2">
    <div className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50"></div>
    <div className="flex-1 min-w-0 flex flex-col gap-2">{children}</div>
  </li>
);

export const Steps = ({ children }: { children: React.ReactNode }) => (
  <ol className="flex flex-col gap-8">{children}</ol>
);

export const Step = ({
  n,
  title,
  children,
}: {
  n: number;
  title: React.ReactNode;
  children?: React.ReactNode;
}) => (
  <li className="flex gap-3">
    <span className="mt-0.5 size-6 shrink-0 rounded-full border bg-accent flex items-center justify-center text-xs">
      {n}
    </span>
    <div className="flex-1 min-w-0 flex flex-col gap-3">
      <p>{title}</p>
      {children}
    </div>
  </li>
);

export const Quote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-2 border-destructive/60 pl-4 flex flex-col gap-2 text-foreground/70 italic">
    {children}
  </blockquote>
);

export const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-semibold">{children}</h2>
);

export const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg font-semibold">{children}</h3>
);

export const Section = ({ children }: { children: React.ReactNode }) => (
  <section className="flex flex-col gap-5">{children}</section>
);

export const BackLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="flex items-center gap-1 w-fit text-sm text-foreground/50 hover:text-foreground transition-colors duration-200"
  >
    <ArrowLeft size={16} /> {children}
  </Link>
);
