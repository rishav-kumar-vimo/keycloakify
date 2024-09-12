import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";
import { resolve } from 'path';


const callaiSupportedStates = ['ga', 'pa', 'na', 'va'];
const callaiThemeNames = callaiSupportedStates.map(state => `callai-${state}`);

export default {
  plugins: [
    react(),
    keycloakify({
      themeName: callaiThemeNames,
      accountThemeImplementation: "none",
      keycloakifyBuildDirPath: resolve(__dirname, './dist/themes'), 
      artifactId: 'callai-keycloak-themes', 
    }),
  ]
};
