import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ['ko', 'en', 'es'],
    defaultLocale: 'ko'
});

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
}