import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'alfamedicalgroup.com',
  appName: 'svelt-testing',
  webDir: 'build',
  server: {
    cleartext:true,
    androidScheme:"https",
    hostname:"localhost:8080",
    allowNavigation: [
        "localhost:8080"
      ]
  }
};

export default config;
