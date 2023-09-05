// Import Package
import { createClient } from "contentful";

// Construct Contentful Client for API calls
const client = createClient({
  space: 'hcn7d4w6tlrq',
  accessToken: 'dT1_c6M99hGwfYLsSEimheDkiW4hWG31Zweu4PH2NYM',
});

// Export Client Object
export default client;