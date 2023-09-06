// Import Packages
import React from "react";

// Import Types
import { HeadingSkeleton } from "./types/SkeletonTypes";

// Define Dynamic Element Map
const headingMap: {
  element: { [key: string]: string };
  class: { [key: string]: string };
} = {
  element: {
    "Main Heading": "h1",
    "Section Heading": "h2",
    "Section Subheading": "h3",
    "Subheading": "h4",
  },
  class: {
    "Main Heading": "text-4xl font-bold tracking-tight lg:text-5xl",
    "Section Heading":
      "border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
    "Section Subheading": "text-2xl font-semibold tracking-tight",
    "Subheading": "text-xl font-semibold tracking-tight",
  },
};

// Render the Dynamic Component
const Heading: React.FC<HeadingSkeleton> = ({ fields }) => {
  const { headingType, headingTitle } = fields;

  return (
    <>
      {headingType && headingTitle
        ? React.createElement(
            headingMap.element[headingType],
            {
              className: `scroll-m-20 ${headingMap.class[headingType]}`,
            },
            headingTitle
          )
        : null}
    </>
  );
};

// Export Component
export default Heading;
