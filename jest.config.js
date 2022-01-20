/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  globals: {
    "ts-jest": {
      /**
       * Change the tsconfig file used to `tsconfig.ts-jest.json`
       */
      tsconfig: "tsconfig.ts-jest.json",
      /**
       * Disable type checking which speeds up test running from about 3000ms
       * on a tiny test to 122ms or a 250x speed up.
       *
       * We still get type checking in VSCode so it can be a good trade off.
       *
       * https://kulshekhar.github.io/ts-jest/docs/getting-started/options/
       */
      isolatedModules: true,
    },
  },
  /**
   * Configuration for getting `ts-jest` running
   * https://github.com/kulshekhar/ts-jest
   */
  preset: "ts-jest",
  testEnvironment: "node",
}
