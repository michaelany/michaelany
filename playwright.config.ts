import {defineConfig, devices} from '@playwright/test'

const PORT = 3001
const BASE_URL = `http://127.0.0.1:${PORT}`

export default defineConfig({
  testDir: './tests',
  reporter: 'list',
  webServer: {
    command: `CI=1 bun run dev -- --host 127.0.0.1 --port ${PORT} --strictPort`,
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: {...devices['Desktop Chrome']},
    },
  ],
})
