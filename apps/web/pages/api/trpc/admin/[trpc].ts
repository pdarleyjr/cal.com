import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";
import { adminRouter } from "@calcom/trpc/server/routers/viewer/admin/_router";

export const runtime = "edge";

export default createNextApiHandler(adminRouter);
