// Import Packages
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
// Change to redirect when using Contentful, see react-router-dom documentation
import { useParams, useNavigate } from "react-router-dom";

const Article: React.FC = () => {
  // Capture the Page Slug
  const [slug] = useState(useParams());

  // Init navigation function
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the slug is not equal to "123"
    if (slug !== '123') {
      // Redirect the user to the Home page
      navigate('/');
    }
  }, [slug, navigate]);

  return (
    <>
      <Helmet>
        <title>Blog Page</title>
      </Helmet>
      <p>Slug: {slug}</p>
    </>
  );
};

export default Article;
