import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";
import { attributesRouter } from "@calcom/trpc/server/routers/viewer/attributes/_router";

export const runtime = "edge";

export default createNextApiHandler(attributesRouter);
