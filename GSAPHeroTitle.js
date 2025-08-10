import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./GSAPHeroTitle.css";

export default function GSAPHeroTitle() {
  const titleRef = useRef();
  useEffect(() => {
    gsap.from(titleRef.current, {
      y: -80,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out"
    });
  }, []);
  return <h1 ref={titleRef} className="gsap-hero-title">Welcome to Ghana’s Leading Estates</h1>;
}