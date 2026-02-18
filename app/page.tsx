import Profile from "@/components/Profile";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import Stacks from "@/components/Stacks";
import Description from "@/components/Description";
import Link from "next/link";
import Project from "@/components/Project";


export default function Home() {
  return (
    <div className="bg-background flex flex-col justify-center items-center h-full">
      <div className=" max-w-3xl w-full my-24">
        <Profile />
        <Description />

        <div className="flex flex-col p-2">
          <h1 className="font-xmono text-xl text-destructive">Expriences.</h1>
          <div className="flex">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="w-2xl px-4 rounded"
            >
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
                        Sep,2025 - Nov,2025
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2">
                  <hr />
                  <div className="flex flex-row items-start gap-2 px-2">
                    <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50"></div>
                    <span className="tracking-tight text-muted-foreground">
                      Made a new widget system for web using react-grid-layout
                      with a tray system to drag and drop the widgets, also made
                      the layout rearrangable.
                    </span>
                  </div>
                  <div className="flex flex-row items-start gap-2 px-2">
                    <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50"></div>
                    <span className="tracking-tight text-muted-foreground">
                      Designed and coded around 25+ widgets with different sizes
                      and themes.
                    </span>
                  </div>
                  <div className="flex flex-row items-start gap-2 px-2">
                    <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50"></div>
                    <span className="tracking-tight text-muted-foreground">
                      Reimagined the whole product presentation and built the
                      webapp to give a macOS look as per the founder's need.
                    </span>
                  </div>
                  <div className="flex flex-row items-start gap-2 px-2">
                    <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50"></div>
                    <span className="tracking-tight text-muted-foreground">
                      Migrated all the components from custom defined to use
                      shadcn and follow WAI-ARIA rules.
                    </span>
                  </div>
                  <div className="flex flex-row items-start gap-2 px-2">
                    <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50"></div>
                    <span className="tracking-tight text-muted-foreground">
                      Built a design system based on shadcn components and added
                      themeing.
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
            <div className="grid md:grid-cols-2 justify-center items-center gap-5 px-4">
              <Project
                href="./projects/ironman"
                src="/mark1.png"
                title="Mark 1"
                description="A 3D showcase of Ironman's Mark 1 suite in a interactive way."
              />
              <Project
                href="./projects/fightclub"
                src="/fightclub.png"
                title="Fight Club"
                description="A tribute to the movie fight club, with motion graphics and animations."
              />
              <Project
                href="./projects/nothing"
                src="/nothingdark.png"
                title="Nothing"
                description="A Bento design on Nothing phone"
              />
              <Project
                href="./projects/dolist"
                src="/doList.png"
                title="Dolist"
                description="A fullstack task and todo manager."
              />
            </div>
            <div className="flex justify-end">
              {/* <Button className="px-0 py-0 text-background">
                View All <ArrowUpRight color="red" />
              </Button> */}
            </div>
          </div>
        </div>
        <div className="p-2 flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <h1 className="font-xmono text-xl text-destructive">Readings.</h1>
            <div className="px-4 flex flex-col gap-2">
              <Link
                href={"./blogs/shadcn"}
                className="bg-accent/50 border hover:border-transparent rounded-md p-4 group hover:bg-accent transition-colors duration-200 cursor-pointer flex justify-between items-center"
              >
                <span>
                  <h1>Shadcn/ui Internals</h1>
                  <p className="text-xs text-foreground/50">
                    Get into the internals of shadcn and understand the
                    architecture.
                  </p>
                </span>
                <ArrowUpRight className="opacity-10 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-200" />
              </Link>
              {/* <div className="bg-accent/50 border hover:border-transparent rounded-md p-4 group hover:bg-accent transition-colors duration-200 cursor-pointer flex justify-between items-center">
                <span>
                  <h1>WebRTC</h1>
                  <p className="text-xs text-foreground/50">Real </p>
                </span>
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div> */}
            </div>
          </div>
        </div>
        <div className="p-2 flex flex-col gap-2">
          <Stacks />
        </div>
        <div className=" flex flex-col justify-center items-center mt-24">
          <h1 className="font-kalam text-4xl ">" कर्म करो पार्थ "</h1>
          <p className="font-xmono">"Karm Karo Parth"</p>
        </div>
      </div>
    </div>
  );
}
