import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";
import { viewerOrganizationsRouter } from "@calcom/trpc/server/routers/viewer/organizations/_router";

export const runtime = "edge";

export default createNextApiHandler(viewerOrganizationsRouter);
