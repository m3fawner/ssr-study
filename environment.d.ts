declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GA_ID: string,
      NEXT_PUBLIC_BASE_URL: string,
      ALPHAVANTAGE_KEY: string,
    }
  }
  interface Window {
    gtag: (...arguments: unknown[]) => void,
    dataLayer: Array,
    twttr: {
      _e: Array,
      ready: (event: unknown) => void
    }
  }
}

export { };
