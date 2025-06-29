import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";
import { oAuthRouter } from "@calcom/trpc/server/routers/viewer/oAuth/_router";

export const runtime = "edge";

export default createNextApiHandler(oAuthRouter);
