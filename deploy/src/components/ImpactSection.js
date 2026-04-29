import React, { useRef } from "https://esm.sh/react@18";
import { impactStats, projectPhotos } from "../data/siteContent.js";
import { useCountUp } from "../hooks/useCountUp.js";

export function ImpactSection() {
  const sectionRef = useRef(null);
  const counts = useCountUp(
    sectionRef,
    impactStats.map((item) => item.value)
  );

  return React.createElement(
    "section",
    { className: "impact-section", id: "impact", ref: sectionRef },
    React.createElement(
      "div",
      { className: "section-inner", "data-reveal": "" },
      React.createElement("p", { className: "section-eyebrow light" }, "The Outcome"),
      React.createElement("h2", { className: "section-title light" }, "What This Work Added Up To"),
      React.createElement(
        "div",
        { className: "impact-grid" },
        React.createElement(
          "div",
          { className: "impact-metrics" },
          impactStats.map((item, index) =>
            React.createElement(
              "article",
              { className: "metric-card", key: item.label },
              React.createElement("span", { className: "metric-value" }, counts[index]),
              React.createElement("span", { className: "metric-label" }, item.label)
            )
          )
        ),
        React.createElement(
          "figure",
          { className: "photo-frame impact-photo" },
          React.createElement("img", {
            src: projectPhotos.collection,
            alt: "Collected food donations lined up for the service project"
          }),
          React.createElement(
            "figcaption",
            null,
            "Real donations from the project that helped turn intention into action."
          )
        )
      ),
      React.createElement(
        "p",
        { className: "impact-copy" },
        "This project showed us that service grows through steady effort, collaboration, and sincere intention. What began as a class assignment became a reminder that small acts of giving can create visible support for real people in our community."
      )
    )
  );
}
