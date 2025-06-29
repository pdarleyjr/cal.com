import { featureFlagRouter } from "@calcom/features/flags/server/router";
import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";

export const runtime = "edge";

export default createNextApiHandler(featureFlagRouter, true, "features");
