type BlogPageSkeleton = {
  pageTitle: string;
  pageDescription: string;
  pageElements: {
    items: Array<Reference>;
  };
  urlSlug: string;
  pageMetaTags: string[];
};

type Reference = {
  sys: {
    type: "Link";
    linkType: "Entry";
    id: string; // ID of the referenced entry
  };
};

export default BlogPageSkeleton;
