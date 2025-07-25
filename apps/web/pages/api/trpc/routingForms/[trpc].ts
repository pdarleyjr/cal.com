import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";
import { routingFormsRouter } from "@calcom/trpc/server/routers/viewer/routing-forms/_router";

export const runtime = "edge";

export default createNextApiHandler(routingFormsRouter);
