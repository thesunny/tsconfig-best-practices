import commonjs from "@rollup/plugin-commonjs"
import typescript from "rollup-plugin-typescript2"

export const baseConfig = {
  plugins: [commonjs(), typescript()],
  watch: {
    clearScreen: false,
  },
}
