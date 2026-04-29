import React, { useEffect, useState } from "https://esm.sh/react@18";

const links = [
  { href: "#home", label: "Home" },
  { href: "#project-story", label: "Project" },
  { href: "#why-it-mattered", label: "Why" },
  { href: "#people-involved", label: "People" },
  { href: "#impact", label: "Impact" }
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    const handleResize = () => {
      if (window.innerWidth > 860) {
        setMenuOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  return React.createElement(
    "header",
    { className: `site-nav ${scrolled ? "scrolled" : ""}` },
    React.createElement(
      "div",
      { className: "nav-inner" },
      React.createElement("a", { className: "brand", href: "#home" }, "Community Service Project"),
      React.createElement(
        "button",
        {
          className: "menu-toggle",
          type: "button",
          "aria-label": "Toggle navigation",
          "aria-expanded": menuOpen,
          onClick: () => setMenuOpen((current) => !current)
        },
        React.createElement("span", null)
      ),
      React.createElement(
        "nav",
        { "aria-label": "Primary navigation" },
        React.createElement(
          "ul",
          { className: `nav-links ${menuOpen ? "open" : ""}` },
          links.map((link) =>
            React.createElement(
              "li",
              { key: link.href },
              React.createElement(
                "a",
                {
                  href: link.href,
                  onClick: () => setMenuOpen(false)
                },
                link.label
              )
            )
          )
        )
      )
    )
  );
}
