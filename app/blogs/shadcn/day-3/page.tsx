import {
  A,
  Bullet,
  Code,
  H2,
  H3,
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
  title: "Day 3 · Shadcn/UI Internals | Prajwal B M",
  description: "The shadcn CLI and the registry, and how it differs from npm.",
};

const addCode = `npx shadcn@latest add https://xyz.com/r/button.json

# this is the new CLI 3.0 using namespaces
npx shadcn@latest add @xyz/button`;

const page = () => {
  return (
    <>
      <DayHeader
        slug="day-3"
        subtitle="We will be talking about the CLI and the registry."
      />

      <Section>
        <p>Let&apos;s talk about the pre-shadcn era -</p>
        <List>
          <Bullet>
            <span>
              Before shadcn, developers used to install the components as a
              package from the component libraries (e.g. Material-UI, Ant Design
              and Chakra UI). That means the code lived in{" "}
              <InlineCode>node_modules</InlineCode>, it was hard to customize
              and it increased the bundle size.
            </span>
          </Bullet>
          <Bullet>
            To solve this we can give the developer the entire code of the
            component, which they will paste into their codebase, and they can
            customize it with no need to worry about the bundle size.
          </Bullet>
          <Bullet>
            But isn&apos;t it a pain to copy paste the components? Isn&apos;t
            there a way to automate this and distribute the code to a large
            number of developers?
          </Bullet>
          <Bullet>
            That&apos;s where the shadcn ecosystem and the registry distribution
            system come in.
          </Bullet>
        </List>
      </Section>

      <Section>
        <H2>What the hell is this registry?</H2>
        <List>
          <Bullet>
            Registry is a distribution system for components, which allows you
            to distribute your custom components, hooks, pages, config, rules
            and other files to any project.
          </Bullet>
          <Bullet>
            So does that mean we can add or import a component from the
            registry using the CLI by running the shadcn package? Hum, hum. So
            does it make the registry similar to npm (like we can publish or
            import packages from npm)? You can say that, but they are not
            exactly the same.
          </Bullet>
        </List>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col gap-3">
            <H3>NPM</H3>
            <List>
              <Bullet>
                In the npm ecosystem there is a central warehouse that stores
                packages and distributes them.
              </Bullet>
              <Bullet>
                You publish your package to the npmjs server, and your package
                is stored there.
              </Bullet>
              <Bullet>
                <span>
                  Whenever someone needs your package they will just install it
                  from the CLI, and it will be installed into{" "}
                  <InlineCode>node_modules</InlineCode>.
                </span>
              </Bullet>
            </List>
          </div>
          <BlogMedia
            src="/blogs/shadcn/npm.png"
            alt="npm flow: your package is published to npmjs.com and installed into node_modules of other codebases"
            width={807}
            height={700}
          />
        </div>
      </Section>

      <Section>
        <H2>Registry</H2>
        <List>
          <Bullet>
            <span>
              And this is a registry. There is no centralized warehouse where
              your component code is stored, it works in a different way. The
              registry lives in every codebase which wants to share its
              components with everyone. Let&apos;s understand it in detail
              below. <A href="https://ui.shadcn.com/docs/registry" />
            </span>
            <BlogMedia
              src="/blogs/shadcn/registry.png"
              alt="Registry flow: npx shadcn add fetches /public/r/button.json from the component library and copies the component source code into components/ui in your codebase"
              width={1918}
              height={774}
            />
          </Bullet>
          <Bullet>
            I will explain this with the flow, from how the component is
            registered to installing and using it.
          </Bullet>
        </List>

        <H3>Publisher -</H3>
        <Steps>
          <Step
            n={1}
            title="You have built a beautiful UI component which lies in your codebase, now you want to share it with the world so that they can use it in their projects too."
          />
          <Step
            n={2}
            title={
              <>
                You will create a <InlineCode>registry.json</InlineCode> file in
                the root folder of your codebase.
              </>
            }
          >
            <List>
              <Bullet>
                <p>What does it contain?</p>
                <List>
                  <Bullet>
                    <span>
                      The <InlineCode>registry.json</InlineCode> is the entry
                      point for the registry. It contains the registry&apos;s
                      name, homepage, and defines all the items present in the
                      registry.
                    </span>
                  </Bullet>
                  <Bullet>
                    <span>
                      Go through this for more understanding of the file&apos;s
                      schema{" "}
                      <A href="https://ui.shadcn.com/docs/registry/registry-json" />
                    </span>
                  </Bullet>
                </List>
              </Bullet>
            </List>
          </Step>
          <Step
            n={3}
            title={
              <>
                Add your component to the registry items by following the schema{" "}
                <A href="https://ui.shadcn.com/docs/registry/registry-item-json" />
              </>
            }
          />
          <Step n={4} title="Run the build script provided by the shadcn CLI." />
          <Step
            n={5}
            title={
              <>
                The build script will generate the registry JSON files in the
                public directory of your project, e.g.{" "}
                <InlineCode>public/r/button.json</InlineCode>.
              </>
            }
          />
          <Step
            n={6}
            title="Now you just need to deploy your project to a public URL, that's it."
          />
        </Steps>

        <H3>Consumer -</H3>
        <Steps>
          <Step
            n={1}
            title="The one who needs the component will just run a command like:"
          >
            <Code lang="bash">{addCode}</Code>
          </Step>
          <Step
            n={2}
            title={
              <>
                This will make a request to{" "}
                <InlineCode>https://xyz.com/r/button.json</InlineCode> and run
                some code in the shadcn package, which installs the necessary
                packages for the component and copies the source code from
                their project to your project.
              </>
            }
          />
          <Step
            n={3}
            title="And now the component can be imported and also be customized."
          />
        </Steps>
      </Section>

      <Section>
        <A href="https://www.npmjs.com/package/shadcn?activeTab=readme" />
        <p>
          This is the main package which runs when you use the shadcn CLI. It
          is responsible for initializing the shadcn configuration and
          dependencies, adding shadcn UI components into your project,
          scaffolding projects, wiring up Tailwind, managing CSS variables, and
          integrating with a component registry.
        </p>
      </Section>

      <DayNav slug="day-3" />
    </>
  );
};

export default page;
