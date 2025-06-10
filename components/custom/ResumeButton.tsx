"use client";

import { useState } from "react";
import ResumeModal from "./ResumeModal";

const ResumeButton = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  return (
    <>
      <button
        className="resume-btn cursor-pointer"
        onClick={() => setIsResumeOpen(true)}
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
