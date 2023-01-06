/// <reference types="vitest" />

import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    coverage: {
      provider: 'c8',
      exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.tsx', '**/*.stories.ts', '**/**/index.ts'],
    },
    environment: 'happy-dom',
    include: ['src/**/__tests__/**/*.test.tsx'],
    exclude: [...configDefaults.exclude, '.templates/**/*',],

  }
});
