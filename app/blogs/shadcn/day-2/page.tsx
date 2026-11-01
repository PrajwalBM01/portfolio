import { A, Bullet, H2, H3, List, Quote, Section } from "@/components/Blog";
import BlogMedia from "@/components/BlogMedia";
import { DayHeader, DayNav } from "@/components/DayHeader";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Day 2 · Shadcn/UI Internals | Prajwal B M",
  description:
    "Open code, headless components and the architecture behind shadcn.",
};

const page = () => {
  return (
    <>
      <DayHeader
        slug="day-2"
        subtitle="Open code, headless components and the shadcn architecture."
      />

      <Section>
        <p>
          While reading through the principles it follows, I came across{" "}
          <A href="https://ui.shadcn.com/docs" /> (read the principles it
          follows).
        </p>
        <H3>How do I pull upstream updates in an Open Code approach?</H3>
        <List>
          <Bullet>
            There are some terms we need to understand here, let&apos;s divert
            a bit.
          </Bullet>
        </List>
        <p>This is how shadcn explained it:</p>
        <Quote>
          <p>
            shadcn/ui follows a headless component architecture. This means the
            core of your app can receive fixes by updating your dependencies,
            for instance, radix-ui or input-otp.
          </p>
          <p>
            The topmost layer, i.e., the one closest to your design system, is
            not coupled with the implementation of the library. It stays open
            for modification.
          </p>
        </Quote>
        <List>
          <Bullet>
            So what does this mean? When there are updates in the dependency
            libraries like radix-ui and others which shadcn depends on, and you
            need to update your dependencies, how does this work in the open
            code approach?
          </Bullet>
          <Bullet>
            Well, shadcn says that they follow a headless component
            architecture, so when the dependencies get updated it won&apos;t
            affect the component code. Let&apos;s understand what this headless
            component architecture is.
          </Bullet>
        </List>
      </Section>

      <Section>
        <H2>Some back story</H2>
        <List>
          <Bullet>
            I was a noob developer until I learnt what it means 😂, whenever
            someone asked me what UI library or component library I use, I would
            say &ldquo;I MAKE MY OWN COMPONENTS&rdquo;, I wasn&apos;t aware how
            deep this sentence was.
          </Bullet>
          <Bullet>
            <p>
              During my first full stack project I built a dropdown component
              which looks nice but…
            </p>
            <BlogMedia
              type="video"
              src="/blogs/shadcn/dropdown.mp4"
              alt="My first custom dropdown component"
            />
            <p>
              <A href="https://dolist-1.onrender.com/" /> (I mean it&apos;s my
              first project and it sucks cuz I hosted it on render)
            </p>
          </Bullet>
          <Bullet>
            <p>It lacked so many things:</p>
            <List>
              <Bullet>
                It does not show which priority was chosen, for that we need to
                look at the top left of the input component.
              </Bullet>
              <Bullet>
                <span>
                  It lacked accessibility like keyboard navigation and
                  selection, and also it didn&apos;t adhere to <b>WAI-ARIA</b>{" "}
                  [ a standard set of guidelines published by the W3C (World
                  Wide Web Consortium), which provide a way to describe the
                  role, state, and properties of elements in a web page ]{" "}
                  <A href="https://www.w3.org/WAI/standards-guidelines/aria/" />
                </span>
              </Bullet>
              <Bullet>
                I had used divs to make it, instead of a select element.
              </Bullet>
            </List>
          </Bullet>
          <Bullet>
            The thing here was, I wanted to have a customized dropdown, but it
            should have followed the WAI-ARIA guidelines so that it is
            accessible by everyone. So isn&apos;t there some way where I can get
            a ready component which follows the guidelines and gives the freedom
            to style it our way?
          </Bullet>
          <Bullet>That&apos;s where headless components come in.</Bullet>
        </List>
      </Section>

      <Section>
        <H2>Headless components</H2>
        <List>
          <Bullet>
            These are the UI components which mainly focus on functionality,
            state, properties and accessibility and not on styling.
          </Bullet>
          <Bullet>
            They may have minimal or no styling, and give the developer the
            freedom to style however they want for their design system.
          </Bullet>
          <Bullet>
            <p>Some examples include:</p>
            <List>
              <Bullet>Radix primitives (which shadcn relies on)</Bullet>
              <Bullet>HeadlessUI</Bullet>
              <Bullet>React-aria</Bullet>
              <Bullet>Ariakit</Bullet>
              <Bullet>And many more…</Bullet>
            </List>
          </Bullet>
        </List>
        <div className="flex flex-col gap-1">
          <A href="https://medium.com/@nirbenyair/headless-components-in-react-and-why-i-stopped-using-ui-libraries-a8208197c268" />
          <A href="https://nerdy.dev/headless-boneless-and-skinless-ui#headless-ui" />
        </div>
      </Section>

      <Section>
        <H2>Shadcn architecture</H2>
        <p>
          shadcn doesn&apos;t reinvent any wheels, instead it uses the existing
          libraries and technologies.
        </p>
        <BlogMedia
          src="/blogs/shadcn/architecture.png"
          alt="shadcn sits where the behavior layer (Radix, React-form, tanstack, react-tables) meets the style layer (tailwindcss, tailwind-merge, clsx, cva)"
          width={845}
          height={376}
        />

        <H3>Behavioral layer</H3>
        <List>
          <Bullet>
            This layer is made of headless components and it just focuses on
            behavior, functionality, state, properties and accessibility of the
            component.
          </Bullet>
          <Bullet>Radix-primitives is used for most of the components.</Bullet>
          <Bullet>React-form for the form components.</Bullet>
          <Bullet>react-tables for tables.</Bullet>
          <Bullet>And many more…</Bullet>
        </List>

        <H3>Style layer</H3>
        <List>
          <Bullet>
            This layer decides how your components look and it&apos;s all about
            the visual presentation of a component. It can be customized however
            you wish to design it.
          </Bullet>
          <Bullet>
            Shadcn&apos;s style system is fully built with tailwind CSS, and
            some helping libraries for making variants and easier tailwind
            syntax.
          </Bullet>
          <Bullet>
            Shadcn has their own default theme and styles out of the box, and
            they also provide dark mode and light mode. You can make your own
            themes or just use the existing ones.
          </Bullet>
        </List>

        <p>For deeper understanding you should definitely check this -</p>
        <div className="flex flex-col gap-1">
          <A href="https://manupa.dev/blog/anatomy-of-shadcn-ui" />
          <A href="https://www.youtube.com/watch?v=AqmMx_JidGo" />
        </div>
      </Section>

      <DayNav slug="day-2" />
    </>
  );
};

export default page;
