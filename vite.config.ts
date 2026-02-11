import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Carrega as variáveis de ambiente baseadas no modo (development/production)
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
      // Garante que a chave da API seja injetada corretamente
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      // Define process.env como objeto vazio APENAS se não houver conflito,
      // para evitar erros em bibliotecas que acessam process.env diretamente
      'process.env': {}
    }
  };
});