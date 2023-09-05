// Import Packages
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

// Import Utility
import client from "@/lib/Contentful";
import componentMap from "./ComponentMapping";

// Import Types
import BlogPageSkeleton from "./types/SkeletonTypes";

// Import Dynamic Classes
import Heading from "./Heading";

const DynamicArticle: React.FC = () => {
  // Component state
  const [data, setData] = useState<BlogPageSkeleton | null>(null);
  // Capture the page Slug
  const { slug } = useParams();

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
                // console.log(res.items[0])
                // console.log(componentMap.id[res.items[0].sys.contentType.sys.id]);
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

  // Check data is fetched

  useEffect(() => {
    if (data) {
      console.log(data)
    }
  }, [data])

  return (
    <>
      <Helmet>
        <title>Blog Page</title>
      </Helmet>
      {
        data !== null ?
        data.map((el) => (
          React.createElement(
            componentMap.id[el.sys.contentType.sys.id],
            {
              className: `scroll-m-20 ${headingMap.class[headingType]}`,
            },
            headingTitle
          )
        )) :
        <span>loading...</span>
      }
    </>
  );
};

export default DynamicArticle;
