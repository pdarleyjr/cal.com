import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";
import { slotsRouter } from "@calcom/trpc/server/routers/viewer/slots/_router";

export const runtime = "edge";

export default createNextApiHandler(slotsRouter);
