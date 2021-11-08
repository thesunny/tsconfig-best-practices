# tsconfig Best Practices

The `tsconfig.json` files are best practices for our projects.

## Using these `tsconfig` files in your project

This command will pull the various `tsconfig` files and this `README_TSCONFIG.md` into your git repo.

```sh
# WARNING:
#
# Before pulling, you may wish to rename any existing `tsconfig.json` file.
# Other than that, the files are named to not conflict with your project.

# pull tsconfig-best-practices
git pull https://github.com/thesunny/tsconfig-best-practices.git
```

## The main `tsconfig` file

It includes a base `tsconfig.json` file that:

- outputs `commonjs`
- doesn't emit

The file has these characteristics:

- It was created by reading every tsconfig option before deciding (i.e. it's not a simple cut and paste of another working option)
- It is heavily commented to explain why each option was chosen
- The options are grouped according to the documentation at https://www.typescriptlang.org/tsconfig instead of alphabetically to improve understanding

## The alternate `tsconfig` files

There are many ways to augment `tsconfig` files to work with special use cases like `rollup` or `ts-node`; however, we've chosen to provide separate tsconfig file like `tsconfig.rollup.json`.

- Augmenting the `tsconfig` file in some other configuration file makes it difficult to know that it has happened.
- Even if we know that the `tsconfig` file is likely being augmented, it's not obvious where it is happening. Sometimes this can happen in more than one place.
- Even if we know that the `tsconfig` file may be modified in some areas, we may not remember all the use cases. For example, maybe we thought about `rollup` but forgot about a special configuration for `jest`.
- We chose to use separate named files to make it easy and obvious to see from the file structure that we have different `tsconfig` files for each use case.
- We chose to put the `tsconfig` files in the root even though it pollutes the root directory. This is because `tsconfig` files are highly sensitive to their placement. In order to augment their location, for example in a `config` directory, we end up having to augment many values inside the `tsconfig`. Ultimately, the pollution of the root directory is less painful than the complexity of having `tsconfig` not in the root.
- It's obvious by looking at the alternatives that they extend the original `tsconfig.json` file without additional documentation. This is because when we look at the file, the first line is `"extends": "./tsconfig.json"`.
