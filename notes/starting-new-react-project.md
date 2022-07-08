# Easy one-command react boilerplate code

- Easiest way to create a basic React project is by using `npx create-react-app your-project-name-here`

## What is `npx`?

- comes bundled with `npm`

## OK, what's `npm` then?

- Node Package Manager
- online repository for publishing open-source node js projects
  - search for npm packages at [https://www.npmjs.com/](https://www.npmjs.com/)
- `npm` doesn't run any packages by itself. If you want to run a package using `npm`, you must specify that package in your `package.json` file
- you can also run scripts using `npm` when paired with the `run` command

## `npx` vs `npm`

- `npx` ia also a command line tool whose job is to make it easy to install and manage dependencies hosted in the `npm` registry
- `npx` stands for "Node Package Execution"
- `npx` allows you to run code directly from Github, execute packages that are not previously installed, and allows you to run locally installed packages easily
- `npx` helps avoid versioning and dependency issues

### installing packages: how both handle the process

#### `npm`

- `npm` installs packages in one of two ways:

- if the package is NOT already defined in `package.json`, then `npm i some-package-name` and it will also be added to the `package.json` file
- if the package is already defined in `package.json`, then `npm` will read from `package.json` and install the package and the specific version dictated
  ```json
  {
    "dependencies": {
      "gatsby": "^2.24.84"
    }
  }
  ```

#### `npx`

-`npx` is a package runner.

- Example. it can run the `create-react-app` package and provide you the latest version of `create-react-app` with all the necessary dependencies

## Working with `create-react-app` [docs](https://create-react-app.dev/docs/getting-started)
