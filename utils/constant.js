const isProduction = process.env.NODE_ENV === 'production'
export const baseUrl = isProduction ? process.env.NEXTAUTH_URL_INTERNAL : 'http://localhost:3000'