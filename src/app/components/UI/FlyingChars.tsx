"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface FlyingCharsProps {
  name: string;
  fromX: number;
  toX: number;
  fromY: number;
  toY: number;
  duration?: number;
  delay?: number;
  startDelay?: number;
}

const FlyingChars: React.FC<FlyingCharsProps> = ({
  name,
  fromX,
  toX,
  fromY,
  toY,
  duration,
  delay,
  startDelay = 0,
}) => {
  const randomFromTo = (
    fromX: number,
    toX: number,
    fromY: number,
    toY: number
  ) => {
    const randomX = Math.random() * (toX - fromX) + fromX;
    const randomY = Math.random() * (toY - fromY) + fromY;

    return { x: randomX, y: randomY };
  };

  const nameVariant = {
    animate: (id: number) => ({
      x: 0,
      y: 0,
      opacity: 1,
      scale: [0, 0.1, 0.5, 0.1, 1],
      transition: {
        duration: duration ? duration : 1,
        delay: delay ? id * delay + startDelay : id * 0.037,
        // duration: 0.06 * id + 0.6,
      },
    }),
  };

  const randomArrF: any[] = [];

  for (let i = 0; i < name.length - (name.split(" ").length - 1); i++) {
    // randomArrF.push(randomFromTo(fromX, toX, fromY, toY)); //wróć do tego
    randomArrF.push(2); // zamiast tego
  }
  const [randomArr] = useState<any[]>(randomArrF);

  const nameArr = name.split(" ");

  const charName = nameArr.map((item, index) => {
    return item.split("").map((char, charIndex) => {
      let id: number = 0;
      if (index == 0) {
        id = charIndex;
      } else {
        id = charIndex;
        for (let i = 0; i < index; i++) {
          id += nameArr[i].length;
        }
      }
      return (
        <motion.span
          key={id}
          variants={nameVariant}
          initial={{ x: randomArr[id]?.x, y: randomArr[id]?.y, opacity: 0 }} //tu jest błąd
          animate="animate"
          custom={id}
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={0.8}
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {char}
        </motion.span>
      );
    });
  });

  const sentence = charName.map((item, index) => {
    return (
      <div key={index} style={{ display: "inline" }}>
        <span style={{ whiteSpace: "nowrap" }}>{item}</span>
        <span> </span>
      </div>
    );
  });

  return sentence;
};

export default FlyingChars;
