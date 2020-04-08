# react-native-config-node
[![Version][version-badge]][package]
[![semantic-release][semantic-release-badge]](https://github.com/semantic-release/semantic-release)
[![MIT License][license-badge]][license]

Node.js mock for react-native-config

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

You can pass specific environment via `NODE_ENV` variable.

```sh
NODE_ENV=staging mocha --compilers js:./test/lib/babel-register test/spec/*.js
```
`.env.staging` will be loaded.

## Jest


Add the following plugin to your `babel.config.js` or `.babelrc`

```
{
  "presets": ["module:metro-react-native-babel-preset"],
  "env": {
    "test": {
      "plugins": ['react-native-config-node/transform']
    }
  }
}
```

You can pass specific environment via `NODE_ENV` variable.

```sh
NODE_ENV=staging jest
```
`.env.staging` will be loaded.

# How it works
`react-native-config-node/transform` is a babel-plugin transforming the following code

```js
import Config from 'react-native-config'
```

into

```js
import Config from 'react-native-config-node'
```

`react-native-config-node` offers the same API as `react-native-config` using [dotenv](https://www.npmjs.com/package/dotenv).


## License

MIT

[semantic-release-badge]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[license]: https://opensource.org/licenses/MIT
[version-badge]: https://img.shields.io/npm/v/react-native-config-node.svg
[package]: https://www.npmjs.com/package/react-native-config-node
[license-badge]: https://img.shields.io/npm/l/react-native-config-node.svg
