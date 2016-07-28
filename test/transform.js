const assert = require('assert')
const fs = require('fs')
const path = require('path')
const babel = require('babel-core')

const pluginPath = __dirname + '/../transform'

it('transforms "react-native-config"" to "react-native-config-node"', function () {
    const code = 'import abc from "react-native-config";'
    const expected = 'import abc from "react-native-config-node";'

    const actual = babel.transform(code, { plugins: [pluginPath] }).code
    assert(actual === expected)
})

it('does not transform "react-native-config-node"', function () {
    const code = 'import abc from "react-native-config-node";'
    const expected = 'import abc from "react-native-config-node";'

    const actual = babel.transform(code, { plugins: [pluginPath] }).code
    assert(actual === expected)
})

it('does not transform "React-native-config"', function () {
    const code = 'import abc from "React-native-config";'
    const expected = 'import abc from "React-native-config";'

    const actual = babel.transform(code, { plugins: [pluginPath] }).code
    assert(actual === expected)
})
