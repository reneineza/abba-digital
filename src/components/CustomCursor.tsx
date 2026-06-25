"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Smooth trail for the outer cursor circle
  useEffect(() => {
    let animationFrameId: number;

    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        const ease = 0.15;
        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease,
        };
      });
      animationFrameId = requestAnimationFrame(updateTrail);
    };

    animationFrameId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  // Bind mouseover events to links and buttons
  useEffect(() => {
    const addHover = () => setIsHovered(true);
    const removeHover = () => setIsHovered(false);

    const updateListeners = () => {
      const anchors = document.querySelectorAll("a, button, select, input, textarea, [role='button']");
      anchors.forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });

      return anchors;
    };

    // Initial binding
    const anchors = updateListeners();

    // Create a MutationObserver to bind to newly added elements
    const observer = new MutationObserver(() => {
      updateListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      anchors.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
      observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#FF6B1E] rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: "transform 0.05s ease-out",
        }}
      />
      {/* Outer Ring */}
      <div
        className="fixed top-0 left-0 border border-[#FF6B1E] rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out hidden md:block"
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
          width: isHovered ? "48px" : "24px",
          height: isHovered ? "48px" : "24px",
          backgroundColor: isHovered ? "rgba(255, 107, 30, 0.1)" : "transparent",
        }}
      />
    </>
  );
}
