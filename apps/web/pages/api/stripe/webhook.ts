// Cloudflare Pages Edge Runtime compatibility
export const runtime = "edge";

export const config = {
  api: {
    bodyParser: false,
  },
};

export { default } from "@calcom/features/ee/billing/api/webhook";
