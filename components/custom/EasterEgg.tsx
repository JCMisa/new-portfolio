"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const EasterEgg = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  const generateRandomPosition = () => {
    const x = Math.random() * (window.innerWidth - 50);
    const y = Math.random() * (window.innerHeight - 50);
    return { x, y };
  };

  const handleClick = () => {
    console.log("You got me! 🥚"); // todo: add logic like increasing user points in db
    setHasBeenClicked(true);
    setIsVisible(false);
  };

  const scheduleNextAppearance = () => {
    // Random time between 0 and 10 seconds
    const randomTime = Math.random() * (10 * 1000);
    // Random time between 0 and 20 minutes
    // const randomTime = Math.random() * (20 * 60 * 1000);
    setTimeout(() => {
      setPosition(generateRandomPosition());
      setIsVisible(true);
      setHasBeenClicked(false);
    }, randomTime);
  };

  // Effect to handle visibility and auto-hide
  useEffect(() => {
    if (isVisible) {
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
        scheduleNextAppearance();
      }, 2000);

      return () => clearTimeout(hideTimer);
    }
  }, [isVisible]);

  // Initial setup
  useEffect(() => {
    setPosition(generateRandomPosition());
    setIsVisible(true);

    return () => {
      setIsVisible(false);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            left: position.x,
            top: position.y,
            zIndex: 1000,
            cursor: "pointer",
          }}
          onClick={handleClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image src={"/easter-egg.png"} alt="egg" width={50} height={50} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;
