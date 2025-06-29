import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";
import { deploymentSetupRouter } from "@calcom/trpc/server/routers/viewer/deploymentSetup/_router";

export const runtime = "edge";

export default createNextApiHandler(deploymentSetupRouter);
