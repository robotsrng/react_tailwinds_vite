/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    coverage: {
      provider: 'c8',
    },
    environment: 'happy-dom',
    include: ['src/**/__tests__/**/*.test.tsx'],
    exclude: ['node_modules/**/*', '.templates/**/*'],
  }
});
