import React from "https://esm.sh/react@18";

export function Hero({ content }) {
  return React.createElement(
    "section",
    { className: "hero", id: "home" },
    React.createElement("div", { className: "hero-backdrop" }),
    React.createElement(
      "div",
      { className: "hero-inner", "data-reveal": "" },
      React.createElement("p", { className: "hero-arabic" }, content.arabic),
      React.createElement("p", { className: "hero-tag" }, "Student-Led Food Drive"),
      React.createElement("h1", null, content.title),
      React.createElement("p", { className: "hero-subtitle" }, content.subtitle),
      React.createElement(
        "div",
        { className: "name-pills", "aria-label": "Student names" },
        content.names.map((name) =>
          React.createElement("span", { className: "name-pill", key: name }, name)
        )
      ),
      React.createElement("p", { className: "hero-copy" }, content.intro),
      React.createElement(
        "button",
        {
          className: "hero-button",
          type: "button",
          onClick: () => document.getElementById("project-story").scrollIntoView({ behavior: "smooth" })
        },
        "See The Story"
      )
    )
  );
}
