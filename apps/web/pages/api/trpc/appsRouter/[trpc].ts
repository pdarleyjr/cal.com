import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";
import { appsRouter } from "@calcom/trpc/server/routers/viewer/apps/_router";

export const runtime = "edge";

export default createNextApiHandler(appsRouter);
