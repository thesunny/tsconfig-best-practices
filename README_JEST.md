# Jest

## Copy `tsconfig.ts-jest.json`

- Copy `tsconfig.ts-jest.json` into package root.
- Copy `tsconfig.base.json` if you don't already have a `base` package

## Add dependencies

Execute in `package.json` directory or below.

```sh
yarn add --dev jest ts-jest type-fest typescript @types/node @types/jest
```

## Modify package.json

Modify `package.json` in the `scripts` section

```json
{
  "scripts": {
    "--- test": "#",
    "test:once": "jest --config=jest.config.js",
    "test:watch": "jest --watch --config=jest.fast.config.js",
    "test:watch:types": "jest --watch --config=jest.config.js"
  }
}
```
