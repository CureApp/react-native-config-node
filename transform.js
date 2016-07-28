module.exports = function () {
    return {
        visitor: {
            ImportDeclaration(path) {
                if (path.node.source.value === 'react-native-config') {
                    path.node.source.value = 'react-native-config-node'
                }
            }
        }
    }
}
