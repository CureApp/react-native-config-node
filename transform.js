module.exports = function () {
    return {
        visitor: {
            ImportDeclaration: function(path) {
                if (path.node.source.value === 'react-native-config') {
                    path.node.source.value = 'react-native-config-node'
                }
            }
        }
    }
}
