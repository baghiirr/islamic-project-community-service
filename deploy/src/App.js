import React from "https://esm.sh/react@18";
import { Navbar } from "./components/Navbar.js";
import { Hero } from "./components/Hero.js";
import { StorySection } from "./components/StorySection.js";
import { ImpactSection } from "./components/ImpactSection.js";
import { Footer } from "./components/Footer.js";
import { sections, heroContent } from "./data/siteContent.js";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll.js";

export function App() {
  useRevealOnScroll();

  return React.createElement(
    "div",
    { className: "page-shell" },
    React.createElement(Navbar),
    React.createElement(
      "main",
      null,
      React.createElement(Hero, { content: heroContent }),
      sections.map((section) =>
        React.createElement(StorySection, {
          key: section.id,
          section
        })
      ),
      React.createElement(ImpactSection)
    ),
    React.createElement(Footer)
  );
}
