"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import Confetti to avoid SSR issues
const ReactConfetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});

export const EasterEgg = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateRandomPosition = () => {
    const x = Math.random() * (window.innerWidth - 50);
    const y = Math.random() * (window.innerHeight - 50);
    return { x, y };
  };

  const handleClick = () => {
    console.log("You got me! 🥚"); // todo: add logic like increasing user points in db
    setHasBeenClicked(true);
    setIsVisible(false);
    setShowConfetti(true);

    // Hide confetti after 3 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  };

  const scheduleNextAppearance = () => {
    // Random time between 0 and 10 seconds
    const randomTime = Math.random() * (10 * 1000);
    setTimeout(() => {
      setPosition(generateRandomPosition());
      setIsVisible(true);
      setHasBeenClicked(false);
    }, randomTime);
  };

  // Effect to handle visibility and auto-hide
  useEffect(() => {
    if (isVisible && !hasBeenClicked) {
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
        scheduleNextAppearance();
      }, 5000);

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
    <>
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

      {showConfetti && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
          style={{ position: "fixed", top: 0, left: 0, zIndex: 9999 }}
        />
      )}
    </>
  );
};

export default EasterEgg;
