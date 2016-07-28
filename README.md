# Node.js mock for react-native-config
We love [react-native-config](https://github.com/luggg/react-native-config), a module which offers an elegant way to inject environment-specific variables to [react-native](https://facebook.github.io/react-native/).

We'd like to **test** react-native code in Node.js.
As `react-native-config` contains native codes, it cannot be run in Nodejs environment.
We provide a way to mock the module.

# Installation
```js
npm install --save-dev react-native-config-node
```

# Usage (using mocha)
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
