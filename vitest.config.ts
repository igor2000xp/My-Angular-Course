// vitest.config.ts
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
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    sequence: {
      hooks: 'list',
    },
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
