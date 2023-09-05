import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import client from "../lib/Contentful";

import Heading from "@/content/Heading";

// Define an interface for the expected shape of the data
interface EntryData {
  fields: {
    headingType: string;
    headingTitle: string;
  };
  // Add more fields if necessary
}

const Home: React.FC = () => {
  const [data, setData] = useState<EntryData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntry("3jgCB9ratwhlqsxjGZpw7W");
        // Create formatted data with expected types
        const formattedRes: EntryData = {
          fields: {
            headingType: response.fields.headingType as string,
            headingTitle: response.fields.headingTitle as string,
          },
        };
        setData(formattedRes);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      {data ? <Heading data={data} /> : <p>Loading...</p>}
    </>
  );
};

export default Home;
