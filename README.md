# Node.js mock for react-native-config

A mock for [react-native-config](https://github.com/luggg/react-native-config), a module which offers an elegant way to inject environment-specific variables to [react-native](https://facebook.github.io/react-native/).

As `react-native-config` contains native codes, it cannot be run in Nodejs environment.
We provide a way to mock the module.

# Installation

via NPM: 

```sh
npm install --save-dev react-native-config-node
```

via Yarn:

```sh
yarn add -D react-native-config-node
```

# Usage

## Mocha

Create a compiler file using `babel-register`.

`test/lib/babel-register.js`
```js
module.exports = require('babel-register')({
    plugins: ['react-native-config-node/transform']
})
```

Use it via command.
```sh
mocha --compilers js:./test/lib/babel-register test/spec/*.js
```

Alternatively, you can set [mocha.opts](https://mochajs.org/#mochaopts).

```text
--compilers js:./test/lib/babel-register
```

You can pass specific environment via `ENVFILE` variable.

```sh
ENVFILE=.env.staging mocha --compilers js:./test/lib/babel-register test/spec/*.js
```
`.env.staging` will be loaded.

```sh
ENVFILE=env/.env.staging mocha --compilers js:./test/lib/babel-register test/spec/*.js
```
`env/.env.staging will be loaded.`

## Jest

In order to use this mock with jest, you will need to add a plugin that renames imported module.

```
npm i babel-plugin-import-rename --save-dev
```

Add the following to your .babelrc

```
{
  "presets": ["module:metro-react-native-babel-preset"],
  "env": {
    "test": {
      "plugins": [
        [
          "import-rename",
          {
            "^react-native-config$": "react-native-config-node"
          }
        ]
      ]
    }
  }
}
```

You can pass specific environment via `NODE_ENV` variable.

```sh
NODE_ENV=staging mocha --compilers js:./test/lib/babel-register test/spec/*.js
```

# How it works
`react-native-config-node/transform` is a babel-plugin transforming the following code

```js
import Config from `react-native-config`
```

into

```js
import Config from `react-native-config-node`
```

`react-native-config-node` offers the same API as `react-native-config` using [dotenv](https://www.npmjs.com/package/dotenv).


## License

MIT
