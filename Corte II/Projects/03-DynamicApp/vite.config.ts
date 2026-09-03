import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "/",
    server: { 
        port: 8080 
    },
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: [
                    "import",
                    "color-functions",
                    "global-builtin",
                ],
            },
        },
    },
});