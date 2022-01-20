# Rollup

## Add Dependencies

```sh
# add dependencies
yarn add --dev typescript ts-node tsconfig-paths
```

## Copy files

- Copy `tsconfig.base.json` if not there
- Copy `tsconfig.ts-node.json` if not there

## Modify `package.json`

```json
{
  "scripts": {
    "--- build": "#",
    "start": "ts-node --project tsconfig.ts-node.json rollup/sample/build-sample.ts"
  }
}
```
