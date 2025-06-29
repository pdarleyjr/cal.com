import { collectApiHandler } from "next-collect/server";

import { extendEventData, nextCollectBasicSettings } from "@calcom/lib/telemetry";

// Cloudflare Pages Edge Runtime compatibility
export const runtime = "edge";

export default collectApiHandler({
  ...nextCollectBasicSettings,
  cookieName: "__clnds",
  extend: extendEventData,
});
