const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

// Load /path/to/project-root/path/to/.env file and returns the key-value object
function main() {
    const projectRoot = getProjectRoot()
    const envFile = getEnvFile()
    const file = loadEnvFile(projectRoot, envFile)
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

// Find .env file from projectRoot and ENVFILE
// Returns Buffer
function loadEnvFile(projectRoot, envFile) {
    const filePath = projectRoot + '/.env';

    if (envFile) {
        if (fs.existsSync(projectRoot + '/' + envFile)) {
            return fs.readFileSync(projectRoot + '/' + envFile)
        }
    }
    return fs.readFileSync(filePath)
}


// Get environment variable: ENVFILE
function getEnvFile() {
    return process.env.ENVFILE
}

module.exports = main()
