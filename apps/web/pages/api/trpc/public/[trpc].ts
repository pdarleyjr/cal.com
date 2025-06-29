import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";
import { publicViewerRouter } from "@calcom/trpc/server/routers/publicViewer/_router";

// Cloudflare Pages Edge Runtime compatibility
export const runtime = 'edge';

export default createNextApiHandler(publicViewerRouter, true);
