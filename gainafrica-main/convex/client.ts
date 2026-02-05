import { ConvexReactClient } from "convex/react";

// Use the Convex public URL from deployment
export const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL || "https://dependable-horse-13.convex.cloud"
);
