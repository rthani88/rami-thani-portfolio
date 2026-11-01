import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Skip static files, API routes, and Next internals
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"]
};
