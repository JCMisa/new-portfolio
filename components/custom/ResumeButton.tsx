"use client";

import { useState, useRef } from "react";
import ResumeModal from "./ResumeModal";

const ResumeButton = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        // Catch potential errors, e.g., user interaction policy (autoplay prevention)
        console.warn("Error playing sound:", error);
      });
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/glitch-sound.mp3" preload="auto" />
      <button
        className="resume-btn cursor-pointer"
        onClick={() => setIsResumeOpen(true)}
        onMouseEnter={handleMouseEnter}
      >
        Get My Resume
      </button>

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
};

export default ResumeButton;
