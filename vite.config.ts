import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Carrega as variáveis de ambiente baseadas no modo (development/production)
  // O terceiro argumento '' garante que carregue todas as vars, inclusive as do sistema (como no Vercel)
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react()],
    build: {
      outDir: 'dist',
    },
    server: {
      port: 3000
    },
    define: {
      // Isso substitui "process.env.API_KEY" pelo valor da string no código final
      // Evita o erro "process is not defined" no navegador
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      // Polyfill de segurança para caso alguma lib tente acessar process.env
      'process.env': {}
    }
  };
});