import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";
import { availabilityRouter } from "@calcom/trpc/server/routers/viewer/availability/_router";

export const runtime = "edge";

export default createNextApiHandler(availabilityRouter);
