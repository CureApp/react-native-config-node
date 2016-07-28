const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

// Load /path/to/project-root/.env file and returns the key-value object
// Load .env.staging, .env.production if NODE_ENV environment variable is defined.
function main() {
    const projectRoot = getProjectRoot()
    const nodeEnv = getNodeEnv()
    const file = loadEnvFile(projectRoot, nodeEnv)
    return dotenv.parse(file)
}

// Find project root from current working directory.
function getProjectRoot() {
    var currentDir = process.cwd()
    while(! fs.existsSync(currentDir + '/package.json') && currentDir) {
        currentDir = path.dirname(currentDir)
    }
    if (!currentDir) {
        throw new Error('no project root is found.')
    }
    return currentDir
}

// Find .env file from projectRoot and NODE_ENV
// Returns Buffer
function loadEnvFile(projectRoot, nodeEnv) {

    const filePath = getProjectRoot() + '/.env'

    if (nodeEnv) {
        if (fs.existsSync(filePath + '.' + nodeEnv)) {
            return fs.readFileSync(filePath + '.' + nodeEnv)
        }
    }
    return fs.readFileSync(filePath)
}


// Get environment variable: NODE_ENV
function getNodeEnv() {
    return process.env.NODE_ENV
}

module.exports = main()
