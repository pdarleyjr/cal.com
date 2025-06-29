import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";
import { travelSchedulesRouter } from "@calcom/trpc/server/routers/viewer/travelSchedules/_router";

export const runtime = "edge";

export default createNextApiHandler(travelSchedulesRouter);
