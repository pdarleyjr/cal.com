import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";
import { credentialsRouter } from "@calcom/trpc/server/routers/viewer/credentials/_router";

export const runtime = "edge";

export default createNextApiHandler(credentialsRouter);
