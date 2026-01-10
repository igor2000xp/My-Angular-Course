// vitest.config.ts
/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import angular from '@analogjs/vite-plugin-angular';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    angular({
      tsconfig: 'tsconfig.spec.json',
      jit: true,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, 'src/test-setup.ts')],
    // Exclude dist and other build output directories
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/out-tsc/**',
      '**/.{idea,git,cache,output,temp}/**',
    ],
    reporters: ['default'],
    sequence: {
      hooks: 'list',
    },
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
