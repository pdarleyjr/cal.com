import { userAdminRouter } from "@calcom/features/ee/users/server/trpc-router";
import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";

// Cloudflare Pages Edge Runtime compatibility
export const runtime = "edge";

export default createNextApiHandler(userAdminRouter);
