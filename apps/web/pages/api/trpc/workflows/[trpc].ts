import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";
import { workflowsRouter } from "@calcom/trpc/server/routers/viewer/workflows/_router";

export const runtime = "edge";

export default createNextApiHandler(workflowsRouter);
