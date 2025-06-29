import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";
import { timezonesRouter } from "@calcom/trpc/server/routers/publicViewer/timezones/_router";

export const runtime = "edge";

export default createNextApiHandler(timezonesRouter, true);
