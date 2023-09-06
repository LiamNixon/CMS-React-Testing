export type BlogPageSkeleton = {
  pageTitle: string;
  pageDescription: string;
  pageElements: {
    fields: {
      [key: string]: string;
    };
    sys: {
      contentType: {
        sys: {
          id: string;
        };
      };
    };
  }[];
  urlSlug: string;
  pageMetaTags: string[];
};

export type HeadingSkeleton = {
  fields: {
    [key: string]: string;
  };
};