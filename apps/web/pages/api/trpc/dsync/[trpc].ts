import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";
import { dsyncRouter } from "@calcom/trpc/server/routers/viewer/dsync/_router";

export const runtime = "edge";

export default createNextApiHandler(dsyncRouter);
