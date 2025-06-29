import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";
import { delegationCredentialRouter } from "@calcom/trpc/server/routers/viewer/delegationCredential/_router";

export const runtime = "edge";

export default createNextApiHandler(delegationCredentialRouter);
