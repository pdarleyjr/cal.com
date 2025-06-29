import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";
import { i18nRouter } from "@calcom/trpc/server/routers/viewer/i18n/_router";

export const runtime = "edge";

export default createNextApiHandler(i18nRouter, true, "i18n");
