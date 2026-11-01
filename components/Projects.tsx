"use client";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import Project from "./Project";

const projects = [
  {
    href: "./projects/korospace",
    src: "https://korospace.vercel.app/og.png",
    title: "Korospace",
    description:
      "A canvas-based AI chat, branch any answer into its own thread and wire context between nodes.",
  },
  {
    href: "./projects/ironman",
    src: "/mark1.png",
    title: "Mark 1",
    description: "A 3D showcase of Ironman's Mark 1 suite in a interactive way.",
  },
  {
    href: "./projects/fightclub",
    src: "/fightclub.png",
    title: "Fight Club",
    description:
      "A tribute to the movie fight club, with motion graphics and animations.",
  },
  {
    href: "./projects/nothing",
    src: "/nothingdark.png",
    title: "Nothing",
    description: "A Bento design on Nothing phone",
  },
  {
    href: "./projects/dolist",
    src: "/doList.png",
    title: "Dolist",
    description: "A fullstack task and todo manager.",
  },
];

const VISIBLE_COUNT = 2;

const Projects = () => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? projects : projects.slice(0, VISIBLE_COUNT);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid md:grid-cols-2 gap-5 px-4">
        <AnimatePresence initial={false}>
          {visible.map((project, i) => (
            <motion.div
              key={project.href}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{
                duration: 0.25,
                delay: i >= VISIBLE_COUNT ? (i - VISIBLE_COUNT) * 0.06 : 0,
              }}
            >
              <Project {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {projects.length > VISIBLE_COUNT && (
        <div className="flex justify-center">
          <button
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            className="flex items-center gap-1 text-xs bg-accent/50 border hover:border-transparent hover:bg-accent rounded-md px-3 py-1.5 transition-colors duration-200 cursor-pointer"
          >
            {expanded ? "View less" : `View more (${projects.length - VISIBLE_COUNT})`}
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
