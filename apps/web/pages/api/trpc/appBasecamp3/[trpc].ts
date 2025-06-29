import appBasecamp3 from "@calcom/app-store/basecamp3/trpc-router";
import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";

export const runtime = "edge";

export default createNextApiHandler(appBasecamp3);
