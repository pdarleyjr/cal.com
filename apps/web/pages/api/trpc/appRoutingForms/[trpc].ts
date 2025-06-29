import appRoutingForms from "@calcom/app-store/routing-forms/trpc-router";
import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";

export const runtime = "edge";

export default createNextApiHandler(appRoutingForms);
