import { Gsap } from "@/components/icons/gsap";
import { JavaScript } from "@/components/icons/js";
import { Motion } from "@/components/icons/motion";
import { Nextjs } from "@/components/icons/next";
import { React } from "@/components/icons/react";
import { TailwindCSS } from "@/components/icons/tailwind";
import { Threejs } from "@/components/icons/threejs";
import { TypeScript } from "@/components/icons/ts";
import { Shadcnui } from "@/components/icons/shadcn";
import Profile from "@/components/Profile";
import StackBadge from "@/components/StackBadge";
import { ModeToggle } from "@/components/Themetoggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { TanStack } from "@/components/icons/tanstack";
import { Nodejs } from "@/components/icons/node";
import { JWT } from "@/components/icons/jwt";
import { Postgres } from "@/components/icons/postgress";
import { MongoDB } from "@/components/icons/mongo";
import { Prisma } from "@/components/icons/prisma";
import { Neon } from "@/components/icons/neon";
import { Cursor } from "@/components/icons/cursor";
import { Postman } from "@/components/icons/postman";
import { Redis } from "@/components/icons/redis";
import { Expressjs } from "@/components/icons/express";
import { Vercel } from "@/components/icons/vercel";
import { CSS } from "@/components/icons/css";
import { HTML5 } from "@/components/icons/html";
import { NPM } from "@/components/icons/npm";

export default function Home() {
  return (
    <div className="bg-background flex flex-col justify-center items-center h-full">
      <div className=" max-w-3xl w-full ">
        <div
          className="h-24 "
          // style={{
          //   backgroundImage: `
          //   linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
          //   linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
          // `,
          //   backgroundSize: "24px 24px",
          // }}
        />

        <Profile />

        <div className="p-2 flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            
            <p className="px-2">
              You do not talk about Fight Club. You do NOT talk about Fight
              Club. If a fighter says "Stop," goes limp, or taps out, the fight
              is over. Only two guys to a fight. One fight at a time. No shirts,
              no shoes. Fights will go on as long as they have to. If this is
              your first time at Fight Club, you have to fight.
            </p>
          </div>
          <div className="fllex flex-col gap-2">
            <h1>Connect with me:</h1>
            <div className="flex items-center gap-4 px-2">
              <div className="border">twitter</div>
              <div className="border">linkdin</div>
              <div className="border">github</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2">
          <h1 className="font-xmono text-xl text-destructive">Expriences.</h1>
          <div className="flex">
            <Accordion type="single" collapsible defaultValue="item-1" className="w-2xl px-2 rounded">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className=" w-full flex justify-between">
                    <div className="flex gap-2">
                      <Image
                        src="/logo.png"
                        alt="logo"
                        width={45}
                        height={45}
                        className="bg-white rounded-xl border"
                      />
                      <div className="flex flex-col justify-center items-start">
                        <h1 className="font-semibold text-base ">
                          Modeulsuite.ai
                        </h1>
                        <p className="text-foreground/50 text-xs flex gap-2 justify-center items-center">
                          Frontend Developer
                          <Badge
                            variant="secondary"
                            className="text-[0.7rem] text-thin py-0 px-1 rounded"
                          >
                            Intern
                          </Badge>
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-end">
                      <h1 className="flex gap-2">Germany-Remote</h1>
                      <p className="text-foreground/50  text-xs">
                        Sep,2026 - Nov,2026
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2">
                  <hr />

                  <div className="flex flex-row items-start gap-2 px-2">
                    <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50"></div>
                    <span className="tracking-tight text-muted-foreground">
                      Resposbile 1
                    </span>
                  </div>
                  <div className="flex flex-row items-start gap-2 px-2">
                    <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50"></div>
                    <span className="tracking-tight text-muted-foreground">
                      Resposbile 2
                    </span>
                  </div>
                  <div className="flex flex-row items-start gap-2 px-2">
                    <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50"></div>
                    <span className="tracking-tight text-muted-foreground">
                      Resposbile 3
                    </span>
                  </div>
                  <div className="flex flex-row items-start gap-2 px-2">
                    <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50"></div>
                    <span className="tracking-tight text-muted-foreground">
                      Resposbile 4
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {" "}
                    <Badge
                      variant="secondary"
                      className="text-[0.7rem] text-thin py-0 px-1 rounded"
                    >
                      mongodb
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-[0.7rem] text-thin py-0 px-1 rounded"
                    >
                      express
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-[0.7rem] text-thin py-0 px-1 rounded"
                    >
                      react
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-[0.7rem] text-thin py-0 px-1 rounded"
                    >
                      javascript
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-[0.7rem] text-thin py-0 px-1 rounded"
                    >
                      redux
                    </Badge>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="p-2 flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <h1 className="font-xmono text-xl text-destructive">My Works.</h1>
            <div className="flex justify-center items-center gap-20">
              <div className="border aspect-square h-40"></div>
              <div className="border aspect-square h-40"></div>
            </div>
            <div className="flex justify-end">
              <Button className="px-0 py-0 text-background">
                View All <ArrowUpRight color="red" />
              </Button>
            </div>
          </div>
        </div>
        <div className="p-2 flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <h1 className="font-xmono text-xl text-destructive">Blogs.</h1>
            <div className="px-2">all the blogs here</div>
          </div>
        </div>
        <div className="p-2 flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <h1 className="font-xmono text-xl text-destructive">Stack.</h1>
            <div className="px-2 flex flex-col gap-2">
              <div>
                <p>{"<language/>"}</p>
                <div className="flex gap-2">
                  <StackBadge name={"javascript"}>
                    <JavaScript />
                  </StackBadge>
                  <StackBadge name={"typescript"}>
                    <TypeScript />
                  </StackBadge>
                  <StackBadge name={"html"}>
                    <HTML5 />
                  </StackBadge>
                  <StackBadge name={"CSS"}>
                    <CSS />
                  </StackBadge>
                </div>
              </div>
              <div>
                <p>{"<Frontend/>"}</p>
                <div className="flex gap-2">
                  <StackBadge name={"react"}>
                    <React />
                  </StackBadge>
                  <StackBadge name={"nextjs"}>
                    <Nextjs />
                  </StackBadge>
                  <StackBadge name={"tailwindcss"}>
                    <TailwindCSS />
                  </StackBadge>
                  <StackBadge name={"GSAP"}>
                    <Gsap />
                  </StackBadge>
                  <StackBadge name={"motion.dev"}>
                    <Motion />
                  </StackBadge>
                  <StackBadge name={"shadcn"}>
                    <Shadcnui />
                  </StackBadge>
                  <StackBadge name={"tanstack"}>
                    <TanStack />
                  </StackBadge>
                  <StackBadge name={"zustand"}></StackBadge>
                </div>
              </div>
              <div>
                <p>{"<Backend & Database/>"}</p>
                <div className="flex gap-2">
                  <StackBadge name={"node.js"}>
                    <Nodejs />
                  </StackBadge>
                  <StackBadge name={"express"}>
                    <Expressjs/>
                  </StackBadge>
                  <StackBadge name={"jwt"}>
                    <JWT />
                  </StackBadge>
                  <StackBadge name={"postgres"}>
                    <Postgres />
                  </StackBadge>
                  <StackBadge name={"mogodb"}>
                    <MongoDB/>
                  </StackBadge>
                  <StackBadge name={"prisma"}>
                    <Prisma />
                  </StackBadge>
                  <StackBadge name={"neondb"}>
                    <Neon />
                  </StackBadge>
                  <StackBadge name={"redis"}>
                    <Redis />
                  </StackBadge>
                </div>
              </div>
              <div>
                <p>{"<Tools/>"}</p>
                <div className="flex gap-2">
                  <StackBadge name={"Cursor"}>
                    <Cursor />
                  </StackBadge>

                  <StackBadge name={"postman"}>
                    <Postman />
                  </StackBadge>
                  <StackBadge name={"vercel"}>
                    <Vercel />
                  </StackBadge>
                  <StackBadge name={"NPM"}>
                    <NPM/>
                  </StackBadge>
                  <StackBadge name={"prisma"}>
                    <Prisma />
                  </StackBadge>
                  <StackBadge name={"neondb"}>
                    <Neon />
                  </StackBadge>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center p-10 border border-dashed rounded-2xl">
          <h1 className="font-kalam text-4xl ">" कर्म करो पार्थ "</h1>
          <p className="font-xmono">"Karm Karo Parth"</p>
        </div>
        <div className="flex justify-end items-end pb-20">1117 visits</div>
      </div>
    </div>
  );
}
