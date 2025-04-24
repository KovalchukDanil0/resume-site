interface ImportMetaEnv {
  readonly VITE_DOMAIN?: string;
  readonly VITE_EMAIL: string;
  readonly VITE_PHONE: string;
  readonly VITE_GITHUB: string;
  readonly VITE_LINKEDIN: string;
  readonly VITE_LOCATION: string;
  readonly VITE_META_SITE: string;

  // Private Variables
  readonly SESSION_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
