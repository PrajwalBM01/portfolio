import {
  A,
  Bullet,
  Code,
  H2,
  InlineCode,
  List,
  Section,
  Step,
  Steps,
} from "@/components/Blog";
import BlogMedia from "@/components/BlogMedia";
import { DayHeader, DayNav } from "@/components/DayHeader";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Day 1 · Shadcn/UI Internals | Prajwal B M",
  description:
    "What shadcn/ui is, the quick start, cva, the cn util and components.json.",
};

const utilsCode = `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`;

const beforeCn = `className={\`bg-red-400 \${isActive ? "bg-red-600" : ""} \${isDisabled ? "opacity-50" : ""}\`}`;

const afterCn = `className={cn("bg-red-400", isActive && "bg-red-600", isDisabled && "opacity-50")}`;

const buttonUsage = `import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
// you can use variants, size to tweak the component`;

const page = () => {
  return (
    <>
      <DayHeader slug="day-1" subtitle="What shadcn/ui is and the quick start." />

      <Section>
        <List>
          <Bullet>
            Shadcn/ui is not a component library. It is how you build your
            component library.
          </Bullet>
          <Bullet>
            You don&apos;t need to install the entire package and import the
            components like you do the traditional way, instead you only
            install the components you want.
          </Bullet>
          <Bullet>
            And the best part is it installs the component&apos;s code into
            your codebase, that way you have all the freedom to customize it
            however you want to fit into your design system.
          </Bullet>
          <Bullet>
            <span>
              Read the get started docs for more on shadcn{" "}
              <A href="https://ui.shadcn.com/docs" />
            </span>
          </Bullet>
        </List>
      </Section>

      <Section>
        <H2>Quick start</H2>
        <p>
          Installation and the process:{" "}
          <A href="https://ui.shadcn.com/docs/installation/next" />
        </p>

        <Steps>
          <Step n={1} title="Initialize an empty Next.js project." />

          <Step n={2} title="Initialize shadcn.">
            <Code lang="bash">npx shadcn@latest init</Code>
           
          </Step>

          <Step
            n={3}
            title="It will install some dependencies, let's talk about this one."
          >
            <div className="rounded-md border p-4 flex flex-col gap-3">
              <h4 className="font-semibold">Class-Variance-Authority</h4>
              <A href="https://cva.style/docs" />
              <List>
                <Bullet>
                  CVA is a small library that helps you manage
                  &ldquo;variants&rdquo; of CSS classes in components.
                </Bullet>
                <Bullet>
                  Shadcn uses this library to create different variants of a
                  component like theme, size, variant etc.
                </Bullet>
              </List>
            </div>
          </Step>

          <Step
            n={4}
            title={
              <>
                It will create a file <InlineCode>lib/utils.ts</InlineCode>
              </>
            }
          >
            <Code lang="lib/utils.ts">{utilsCode}</Code>
            <List>
              <Bullet>
                <p>
                  This small function does a lot of things with the help of
                  these two libraries:
                </p>
                <List>
                  <Bullet>
                    <span>
                      <b>clsx</b> : takes a mix of values like arrays, objects
                      and strings and converts them into a clean,
                      space-separated string for constructing a className.
                    </span>
                  </Bullet>
                  <Bullet>
                    <span>
                      <b>tailwind-merge</b> : while writing tailwind utilities
                      it is common to accidentally include multiple conflicting
                      utilities (e.g. <InlineCode>p-2 p-4</InlineCode>
                      , accidentally used both), so tailwind-merge resolves
                      this by removing the earlier conflicting classes and
                      keeping the last applicable one (i.e.{" "}
                      <InlineCode>p-4</InlineCode>).
                    </span>
                  </Bullet>
                </List>
              </Bullet>
              <Bullet>
                <p>What main use case did I learn from this?</p>
                <List>
                  <Bullet>
                    <p>
                      For conditional styling in a React component I used to do
                      it like this:
                    </p>
                    <Code lang="tsx">{beforeCn}</Code>
                  </Bullet>
                  <Bullet>
                    <p>Now I can just do it like this using the cn function:</p>
                    <Code lang="tsx">{afterCn}</Code>
                  </Bullet>
                  <Bullet>
                    Making it easier to read by getting rid of template
                    literals.
                  </Bullet>
                </List>
              </Bullet>
            </List>
          </Step>

          <Step
            n={5}
            title={
              <>
                It will create a <InlineCode>components.json</InlineCode> file.
              </>
            }
          >
            <p>
              Think of it as the <b>configuration file for the shadcn CLI</b>
              . It tells the CLI:
            </p>
            <List>
              <Bullet>
                <span>
                  <b>Where</b> to put generated components
                </span>
              </Bullet>
              <Bullet>
                <span>
                  <b>How</b> to style them
                </span>
              </Bullet>
              <Bullet>
                <span>
                  <b>What conventions</b> to follow (aliases, naming, tailwind
                  config location, etc.)
                </span>
              </Bullet>
            </List>
           
          </Step>

          <Step
            n={6}
            title={
              <>
                It will overwrite the <InlineCode>globals.css</InlineCode>{" "}
                file.
              </>
            }
          >
            <p>
              By default it will use the light theme, so you might see your
              Next.js project go from dark theme to light theme. You can change
              this with the theme-provider which is provided in the docs{" "}
              <A href="https://ui.shadcn.com/docs/dark-mode/next" />
            </p>
          </Step>

          <Step
            n={7}
            title="Now let's add a component, it's as simple as installing a package from the CLI."
          >
            <Code lang="bash">npx shadcn@latest add button</Code>
            <p>
              This will add <InlineCode>button.tsx</InlineCode> at{" "}
              <InlineCode>components/ui/button.tsx</InlineCode>
            </p>
          </Step>

          <Step
            n={8}
            title={
              <>
                Just import the component where you want and use it{" "}
                <A href="https://ui.shadcn.com/docs/installation/next" />
              </>
            }
          >
            <Code lang="app/page.tsx">{buttonUsage}</Code>
           
          </Step>
        </Steps>
      </Section>

      <DayNav slug="day-1" />
    </>
  );
};

export default page;
