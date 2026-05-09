"use client";

import { useEffect, useState } from "react";
import BrandStory from "./landing/BrandStory";
import Footer from "./landing/Footer";
import HeroCarousel from "./landing/HeroCarousel";
import IntroLoader from "./landing/IntroLoader";
import MarqueeStrip from "./landing/MarqueeStrip";
import Navbar from "./landing/Navbar";
import Newsletter from "./landing/Newsletter";
import ProductGrid from "./landing/ProductGrid";
import ScrollShoeSection from "./landing/ScrollShoeSection";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [loaderClosing, setLoaderClosing] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showLoader ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showLoader]);

  useEffect(() => {
    const startClose = setTimeout(() => {
      setLoaderClosing(true);
    }, 1500);

    const hideLoader = setTimeout(() => {
      setShowLoader(false);
    }, 3300);

    return () => {
      clearTimeout(startClose);
      clearTimeout(hideLoader);
    };
  }, []);

  return (
    <>
      {showLoader && <IntroLoader closing={loaderClosing} />}
      <div
        style={{
          background: "#060608",
          minHeight: "100vh",
          width: "100%",
          maxWidth: "100vw",
          overflowX: "clip",
          fontFamily: "system-ui, sans-serif",
          opacity: showLoader ? 0 : 1,
          transform: "scale(1)",
          transition: "opacity 700ms ease",
        }}
      >
        <Navbar scrolled={scrolled} />
        <HeroCarousel />
        <MarqueeStrip />
        <ScrollShoeSection />
        <ProductGrid />
        <BrandStory />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}
