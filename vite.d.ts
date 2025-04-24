// Private Variables
interface ImportMetaEnv {
  readonly SESSION_SECRET: string;
  readonly VITE_DOMAIN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
