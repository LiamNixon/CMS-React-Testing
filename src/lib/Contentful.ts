// Import Package
import { createClient } from "contentful";

// Construct Contentful Client for API calls
const client = createClient({
  space: import.meta.env.VITE_CTFL_SPACE_ID,
  accessToken: import.meta.env.VITE_CTFL_ACCESS_TOKEN,
});

// Export Client Object
export default client;