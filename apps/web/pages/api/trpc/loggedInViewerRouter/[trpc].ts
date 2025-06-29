import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";
import { loggedInViewerRouter } from "@calcom/trpc/server/routers/loggedInViewer/_router";

export const runtime = "edge";

export default createNextApiHandler(loggedInViewerRouter);
