import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        // 백엔드 API의 실제 URL을 지정합니다.
        target: "http://localhost:8800",
        // CORS 요청을 허용하도록 백엔드와 일치하도록 origin 헤더를 설정합니다.
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
