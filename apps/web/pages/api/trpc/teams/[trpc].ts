import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";
import { viewerTeamsRouter } from "@calcom/trpc/server/routers/viewer/teams/_router";

export const runtime = "edge";

export default createNextApiHandler(viewerTeamsRouter);
