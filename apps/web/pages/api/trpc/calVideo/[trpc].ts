import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";
import { calVideoRouter } from "@calcom/trpc/server/routers/viewer/calVideo/_router";

export const runtime = "edge";

export default createNextApiHandler(calVideoRouter);
