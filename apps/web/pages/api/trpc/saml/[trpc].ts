import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";
import { samlRouter } from "@calcom/trpc/server/routers/viewer/saml/_router";

export const runtime = "edge";

export default createNextApiHandler(samlRouter);
