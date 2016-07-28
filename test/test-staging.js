const config = require('..')
const assert = require('assert')

assert.deepEqual(config, {
    BASE_URL: 'http://staging.example.com/api',
    DB_NAME: 'staging'
})
