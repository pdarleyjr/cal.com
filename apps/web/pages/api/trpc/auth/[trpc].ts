import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";
import { authRouter } from "@calcom/trpc/server/routers/viewer/auth/_router";

export const runtime = "edge";

export default createNextApiHandler(authRouter);
