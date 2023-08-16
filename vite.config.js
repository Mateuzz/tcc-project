import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    manifest: true,

    rollupOptions: {
      input: [
        resolve(__dirname, './appThree.mjs'),
      ],
    },
  },
});
