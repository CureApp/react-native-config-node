const config = require('..')
const assert = require('assert')

assert.deepEqual(config, {
    BASE_URL: 'http://localhost:8000/api',
    DB_NAME: 'local'
})
