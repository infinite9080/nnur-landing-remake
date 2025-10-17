"use client";

import React from "react";
import StaggeredMenu from "../../components/StaggeredMenu";
import styles from "./Navbar.module.css";

interface MenuItem {
  label: string;
  link: string;
  ariaLabel: string;
}

interface SocialItem {
  label: string;
  link: string;
}

const Navbar = () => {
  // Navigation items
  const menuItems: MenuItem[] = [
    { label: "Home", link: "/", ariaLabel: "Go to home page" },
    { label: "About", link: "/about", ariaLabel: "Go to about page" },
    { label: "Services", link: "/services", ariaLabel: "Go to services page" },
    {
      label: "Portfolio",
      link: "/portfolio",
      ariaLabel: "Go to portfolio page",
    },
    { label: "Contact", link: "/contact", ariaLabel: "Go to contact page" },
  ];

  // Social media links
  const socialItems: SocialItem[] = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
    { label: "GitHub", link: "https://github.com" },
    { label: "Instagram", link: "https://instagram.com" },
  ];

  const handleMenuOpen = () => {
    // Optional: Add any logic you want when menu opens
    console.log("Menu opened");
  };

  const handleMenuClose = () => {
    // Optional: Add any logic you want when menu closes
    console.log("Menu closed");
  };

  return (
    <StaggeredMenu
      position="right"
      colors={["#1a1a2e", "#16213e", "#0f3460"]}
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      logoUrl="/nNur-Logo-Icon.svg"
      menuButtonColor="#000000"
      openMenuButtonColor="#000000"
      accentColor="#5227FF"
      changeMenuColorOnOpen={true}
      isFixed={true}
      className={styles.navbarStaggered}
      onMenuOpen={handleMenuOpen}
      onMenuClose={handleMenuClose}
    />
  );
};

export default Navbar;
