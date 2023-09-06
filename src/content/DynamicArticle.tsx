/* eslint-disable @typescript-eslint/no-unused-vars */
// Import Packages
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

// Import Utility
import client from "@/lib/Contentful";

// Import Types
import { BlogPageSkeleton } from "./types/SkeletonTypes";

// Import Dynamic Classes
import Heading from "./Heading";

const DynamicArticle: React.FC = () => {
  // Component state
  const [data, setData] = useState<BlogPageSkeleton | null>(null);

  // Capture the page Slug
  const { slug } = useParams();

  // Component Mapping
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const componentMapping: {[key: string]: React.FC<any>} = {
  heading: Heading
  };

  // Fetch data with current URL slug
  useEffect(() => {
    if (slug) {
      // Retrieve the page content
      const fetchData = async () => {
        try {
          client
            .getEntries({
              content_type: "page",
              "fields.urlSlug": slug,
              include: 3,
            })
            .then((res) => {
              if (res.items.length > 0) {
                setData(res.items[0].fields as BlogPageSkeleton);
              }
            });
        } catch (err) {
          console.warn(err);
        }
      };
      fetchData();
    }
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>Blog Page</title>
      </Helmet>
      {data !== null ? (
        <ul>
          {data.pageElements.map((element, index) => {
            const ComponentToRender = componentMapping[element.sys.contentType.sys.id];
            if (ComponentToRender) {
              return (
                <li key={index}>
                  <ComponentToRender fields={element.fields} />
                </li>
              );
            }
            return null;
          })}
        </ul>
      ) : (
        <span>LOADING...</span>
      )}
    </>
  );
};

export default DynamicArticle;
