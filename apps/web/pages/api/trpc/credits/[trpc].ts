import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";
import { creditsRouter } from "@calcom/trpc/server/routers/viewer/credits/_router";

export const runtime = "edge";

export default createNextApiHandler(creditsRouter);
