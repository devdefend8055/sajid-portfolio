import React, { useState, useEffect, useRef, forwardRef } from "react";
import { Menu } from "lucide-react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = forwardRef(({ stickyClass, hasScrolled }, ref) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerAnimClass, setDrawerAnimClass] = useState("");
  const [activeLink, setActiveLink] = useState("#home");
  const drawerRef = useRef();

  const handleClickOutside = (e) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target)) {
      closeDrawer();
    }
  };

  const openDrawer = () => {
    setDrawerAnimClass("bounce-in-down");
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerAnimClass("bounce-out-up");
    setTimeout(() => {
      setDrawerOpen(false);
      setDrawerAnimClass("");
    }, 1000); // Match animation duration
  };

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [drawerOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Works", href: "#work" },
    { name: "About", href: "#about" },
    // { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        ref={ref}
        className={`custom-header d-flex justify-content-between align-items-center sidespace`}
      >
        <div className="d-flex gap-3 align-items-center">
          <NavLink to="/">
            <img
              className="hero-logo"
              src="/assets/icons/logo.webp"
              alt="My Logo"
            />
          </NavLink>
          {/* <a
            href="mailto:khanzehan30@gmail.com"
            className="m-0 text-white text-decoration-none d-md-flex d-none"
          >
            khanzehan30@gmail.com
          </a> */}
        </div>

        <div className="d-flex align-items-center d-lg-none gap-3">
          <a href="/#contact" className="theme-btn">
            Hire Me!
          </a>
          <button
            className="menu-toggle-btn"
            onClick={() => setDrawerOpen(true)}
          >
            <Menu color="#fff" />
          </button>
        </div>

        <ul className="desktop-nav d-none d-lg-flex align-items-center m-0">
          {navItems.map((item) => (
            <li className="group" key={item.href}>
              <a
                href={item.href}
                className={`theme-link ${activeLink === item.href ? "active" : ""
                  }`}
                onClick={() => setActiveLink(item.href)}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="group">
            <a href="/#contact" className="theme-btn">
              Hire Me!
            </a>
          </li>
        </ul>
      </header>
      <header
        ref={ref}
        className={`custom-header d-flex justify-content-between align-items-center header-2 sidespace ${hasScrolled ? stickyClass : ""
          } ${hasScrolled ? (stickyClass ? "bounce-in-down" : "bounce-out-up") : ""}`}
      >
        <div className="d-flex gap-3 align-items-center">
          <NavLink to="/">
            <img
              className="hero-logo"
              src="/assets/icons/logo.webp"
              alt="My Logo"
            />
          </NavLink>
          {/* <a
            href="mailto:khanzehan30@gmail.com"
            className="m-0 text-white text-decoration-none d-md-flex d-none"
          >
            khanzehan30@gmail.com
          </a> */}
        </div>

        <div className="d-flex align-items-center d-lg-none gap-3">
          <a href="/#contact" className="theme-btn">
            Hire Me!
          </a>
          <button
            className="menu-toggle-btn"
            onClick={() => setDrawerOpen(true)}
          >
            <Menu color="#fff" />
          </button>
        </div>

        <ul className="desktop-nav d-none d-lg-flex align-items-center m-0">
          {navItems.map((item) => (
            <li className="group" key={item.href}>
              <a
                href={item.href}
                className={`theme-link ${activeLink === item.href ? "active" : ""
                  }`}
                onClick={() => setActiveLink(item.href)}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="group">
            <a href="/#contact" className="theme-btn">
              Hire Me!
            </a>
          </li>
        </ul>
      </header>

      <div
        className={`side-drawer ${drawerOpen ? "open" : ""} d-md-none`}
        ref={drawerRef}
      >
        <button className="close-btn" onClick={() => setDrawerOpen(false)}>
          &times;
        </button>
        <ul className="drawer-nav">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={activeLink === item.href ? "active" : ""}
                onClick={() => {
                  setActiveLink(item.href);
                  setDrawerOpen(false);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {drawerOpen && <div className="backdrop d-md-none"></div>}
    </>
  );
});

export default Header;
