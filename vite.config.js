import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png', 'splash-screen.svg'],
      manifest: {
        name: 'Mandi Central',
        short_name: 'Mandi Central',
        description: 'Grain Market',
        theme_color: '#DA6901',
        background_color: '#DA6901',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],
        "splash_pages": [
          {
            "src": "splash-screen.svg",
            "sizes": "640x1136",
            "type": "image/svg+xml"
          },
          {
            "src": "splash-screen.svg",
            "sizes": "750x1334",
            "type": "image/svg+xml"
          },
          {
            "src": "splash-screen.svg",
            "sizes": "1242x2208",
            "type": "image/svg+xml"
          }
        ]
      }
    })
  ]
})