# Learning more about webpack

# Getting started

After cloning this directory, run `yarn` to install dependencies

`yarn start:dev` to start development server for the front end on localhost 3000

# Scripts

### `yarn tsc`

Transpiles files from typescript to javascript. Output is in dist/ folder.

### `yarn start:dev`

Starts the development server on localhost 3000 to see live changes on the client side.

### `yarn test`

Runs jest testing framework

### `yarn lint`

Runs eslint and prints errors to the console. If there are errors with Prettier (a code formatter), those will be printed as eslint errors.

### `yarn f-lint`

Runs eslint --fix and auto-fixes all auto-fixable errors. Not all errors are auto-fixable.

## Eslint and Prettier

- Eslint is configured to consume both Typescript and JS files and is configured for React. It is configured in .eslintrc.js.
- Prettier is a code formatter that is configured to run as part of eslint.
- Webstorm and VSCode (and other popular code editors) both have options to auto-format code after save.

## Jest

- Jest is pre-configured to discover test files with _.test.js or _.spec.js or files with .js suffix in a \_\_tests\_\_ folder
- It is configured in _jest.config.js_.

## Typescript

- This app is written in Typescript, a typed superset of JavaScript. You can see how it is set up in _tsconfig.json_. Typescript transpiles all code in the "include" array to the target ECMA script version.
- [Read more about Typescript](https://www.typescriptlang.org/docs/home.html) The handbook is quite good.
- [Read more about configuring Typescript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

# App config

- React hot loader supports live reloading of changes as you save them

## Webpack

- Webpack is a bundler that transforms modules into static assets. It is configured in webpack.config.js.
- The webpack dev server serves the files located in dist at localhost:3000.

## Thank you 

- To Wes Higbee for the inspiration for the example of the codegen loader in his [Pluralsight course](https://www.pluralsight.com/courses/transpiling-bundling-javascript-webpack).
- [Find the github repo from that course here](https://github.com/g0t4/optimizing-web-apps-webpack/tree/webpack-javascript-end). 
 
