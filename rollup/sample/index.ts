import { baseConfig } from "../base-config"

export default {
  ...baseConfig,
  input: "sample/index.ts",
  output: [
    {
      file: ".dist/sample/index.js",
      format: "cjs",
    },
  ],
  /**
   * Add any package names that you don't want to have the source code
   * embedded.
   */
  external: [],
}
