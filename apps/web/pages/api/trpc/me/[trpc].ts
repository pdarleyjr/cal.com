import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";
import { meRouter } from "@calcom/trpc/server/routers/viewer/me/_router";

export const runtime = "edge";

export default createNextApiHandler(meRouter);
