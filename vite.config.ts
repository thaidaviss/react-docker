import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import macrosPlugin from 'vite-plugin-babel-macros';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), macrosPlugin()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // Here
    strictPort: true,
    port: 3000,
  },
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, './src/'),
      '@components': `${path.resolve(__dirname, './src/components/')}`,
      '@public': `${path.resolve(__dirname, './public/')}`,
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@services': path.resolve(__dirname, './src/services/'),
      '@modules': path.resolve(__dirname, './src/modules/'),
      '@assets': path.resolve(__dirname, './src/assets/'),
      '@layout': path.resolve(__dirname, './src/layout/'),
      '@constants': path.resolve(__dirname, './src/constants/'),
      '@type': path.resolve(__dirname, './src/types/'),
      '@style': path.resolve(__dirname, './src/styles/'),
    },
  },
});
