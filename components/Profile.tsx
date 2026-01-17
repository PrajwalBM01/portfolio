"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { ModeToggle } from "./Themetoggle";

const TITLES: string[] = [
  "Software Engineer",
  "Creative Design Engineer",
  "Freelancer",
  "FullStack Engineer",
];

const Profile = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % TITLES.length);
    }, 2000);

    return () => clearInterval(id);
  }, []);
  return (
    <AnimatePresence>
      <div className="h-[120px] flex items-center p-4 gap-4">
        <div className="p-0.5 rounded-full bg-accent border ">
          <Image
            src="/profile.jpg"
            width={100}
            height={100}
            alt="profile"
            className="rounded-full shadow"
          />
        </div>
        <div className="flex justify-between w-full">
          <div className=" h-full flex flex-col justify-center gap-2">
            <div className="text-2xl">
              <span>Just an another </span>

              <AnimatePresence mode="wait">
                <motion.span
                  key={TITLES[index]}
                  initial={{ filter: "blur(5px)", opacity: 0 }}
                  animate={{ filter: "blur(0px)", opacity: 1 }}
                  exit={{ filter: "blur(5px)", opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block font-xmono"
                >
                  {TITLES[index]}
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="flex gap-2 items-end">
              <span className="text-xl font-bold">Prajwal B M</span>
              <a
                href="https://x.com/xshadowdev"
                target="_blank"
                className="text-sm cursor-pointer text-primary/20 hover:text-primary transition-colors duration-150"
              >
                / @xshadowdev
              </a>
            </div>
          </div>
          <div className="flex justify-end items-end">
            <ModeToggle />
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Profile;
