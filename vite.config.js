import { fileURLToPath, URL } from 'node:url';

import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';
import { defineConfig } from 'vite';
import Pages from 'vite-plugin-pages';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Pages(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'react',
        'react-router',
        { 'usehooks-ts': ['useCounter', 'useDarkMode'] }
      ],
      dts: 'src/auto-imports.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000
  }

});
