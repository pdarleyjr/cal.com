import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";
import { filterSegmentsRouter } from "@calcom/trpc/server/routers/viewer/filterSegments/_router";

export const runtime = "edge";

export default createNextApiHandler(filterSegmentsRouter);
