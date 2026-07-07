import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const [animateSticky, setAnimateSticky] = useState(false);


  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Measure header height
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  // Scroll listener for sticky behavior

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Set hasScrolled once the user scrolls
      if (!hasScrolled && currentY > 0) {
        setHasScrolled(true);
      }

      if (currentY > 10 && currentY > lastScrollY.current) {
        setAnimateSticky(true);
        setTimeout(() => {
          setIsSticky(true);
          setAnimateSticky(false);
        }, 50);
      }

      if (currentY < 50) {
        setIsSticky(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);



  return (
    <>
      <Header
        ref={headerRef}
        stickyClass={isSticky ? "sticky-show" : "sticky-hide"}
        animateSticky={animateSticky}
        hasScrolled={hasScrolled}
      />
      {/* <div className="main-content" style={{ marginTop: `${headerHeight}px` }}> */}
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
