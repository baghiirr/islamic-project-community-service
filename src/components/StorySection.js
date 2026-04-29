import React from "https://esm.sh/react@18";

function PhotoFeature({ media }) {
  return React.createElement(
    "figure",
    { className: "photo-frame photo-feature" },
    React.createElement("img", { src: media.src, alt: media.alt }),
    media.caption ? React.createElement("figcaption", null, media.caption) : null
  );
}

function PhotoStack({ media }) {
  return React.createElement(
    "div",
    { className: "photo-stack" },
    media.items.map((item) =>
      React.createElement(
        "figure",
        { className: `photo-frame photo-card ${item.className || ""}`.trim(), key: item.src },
        React.createElement("img", { src: item.src, alt: item.alt }),
        item.caption ? React.createElement("figcaption", null, item.caption) : null
      )
    )
  );
}

function PhotoGallery({ media }) {
  return React.createElement(
    "div",
    { className: "student-gallery-wrap" },
    React.createElement("h3", { className: "student-gallery-heading" }, media.heading),
    React.createElement("p", { className: "student-gallery-intro" }, media.intro),
    React.createElement(
      "div",
      { className: "student-gallery-grid" },
      media.items.map((item, index) =>
        React.createElement(
          "figure",
          { className: "photo-frame student-card", key: `${item.src}-${index}` },
          React.createElement("img", { src: item.src, alt: item.alt })
        )
      )
    )
  );
}

function InlineSectionPhoto({ image, className = "" }) {
  return React.createElement(
    "figure",
    { className: `photo-frame story-inline-photo ${className}`.trim() },
    React.createElement("img", {
      src: image.src,
      alt: image.alt
    }),
    image.caption ? React.createElement("figcaption", null, image.caption) : null
  );
}

function InlineSectionVideo({ video, className = "" }) {
  return React.createElement(
    "figure",
    { className: `photo-frame story-inline-photo ${className}`.trim() },
    React.createElement("video", {
      src: video.src,
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true
    }),
    video.caption ? React.createElement("figcaption", null, video.caption) : null
  );
}

function renderMedia(media) {
  if (media.type === "gallery") {
    return React.createElement(PhotoGallery, { media });
  }

  if (media.type === "stack") {
    return React.createElement(PhotoStack, { media });
  }

  return React.createElement(PhotoFeature, { media });
}

export function StorySection({ section }) {
  const sectionClass = `story-section accent-${section.accent}`;
  const contentClass = `story-grid layout-${section.layout}`;
  const isGalleryLayout = section.layout === "gallery";
  const isTopTextLayout = section.layout === "split" && Boolean(section.belowBodyImage);

  return React.createElement(
    "section",
    { className: sectionClass, id: section.id },
    React.createElement(
      "div",
      { className: "section-inner", "data-reveal": "" },
      React.createElement("p", { className: "section-eyebrow" }, section.eyebrow),
      React.createElement("h2", { className: "section-title" }, section.title),
      isGalleryLayout
        ? React.createElement(
            React.Fragment,
            null,
            React.createElement(
              "div",
              { className: "story-copy story-copy--wide" },
              section.body.map((paragraph, index) =>
                React.createElement("p", { key: `${section.id}-${index}` }, paragraph)
              )
            ),
            React.createElement("div", { className: "story-media story-media--full" }, renderMedia(section.media))
          )
        : isTopTextLayout
        ? React.createElement(
            React.Fragment,
            null,
            // ✅ FIXED — restored the story-copy div with body.map
            React.createElement(
              "div",
              { className: "story-copy story-copy--wide" },
              section.body.map((paragraph, index) =>
                React.createElement("p", {
                  key: `${section.id}-${index}`,
                  style: {
                    fontSize: section.largeBody ? "1.2rem" : "1rem",
                    lineHeight: section.largeBody ? "1.8" : "1.6"
                  }
                }, paragraph)
              )
            ),
            React.createElement(
              "div",
              { className: "story-media-pair" },
              section.belowBodyImage
                ? React.createElement(InlineSectionPhoto, {
                    image: section.belowBodyImage
                  })
                : null,
              React.createElement(PhotoFeature, { media: section.media }),
              section.belowBodyVideo
                ? React.createElement(InlineSectionVideo, {
                    video: section.belowBodyVideo
                  })
                : null
            )
          )
        : React.createElement(
            "div",
            { className: contentClass },
            React.createElement(
              "div",
              { className: "story-column" },
              React.createElement(
                "div",
                { className: "story-copy" },
                section.quote
                  ? React.createElement("blockquote", { className: "story-quote" }, section.quote)
                  : null,
                section.body.map((paragraph, index) =>
                  React.createElement("p", { key: `${section.id}-${index}` }, paragraph)
                ),
                section.belowQuoteImage
                  ? React.createElement(InlineSectionPhoto, {
                      image: section.belowQuoteImage,
                      className: "story-inline-photo--inside"
                    })
                  : null
              ),
              section.belowBodyImage
                ? React.createElement(InlineSectionPhoto, {
                    image: section.belowBodyImage
                  })
                : null
            ),
            React.createElement("div", { className: "story-media" }, renderMedia(section.media))
          ),
      section.footerCallout
        ? React.createElement(
            "div",
            { className: "section-callout" },
            React.createElement("p", { className: "section-callout-label" }, section.footerCallout.label),
            React.createElement("h3", { className: "section-callout-text" }, section.footerCallout.text),
            React.createElement("p", { className: "section-callout-note" }, section.footerCallout.note)
          )
        : null
    )
  );
}
