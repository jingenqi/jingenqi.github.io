import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // The custom domain is served from its root, rather than a repository subpath.
  base: '/',
  plugins: [react()],
  build: {
    target: 'es2020',
  },
  preview: {
    port: 4173,
  },
});
