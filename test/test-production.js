const config = require('..')
const assert = require('assert')

assert.deepEqual(config, {
    BASE_URL: 'http://production.example.com/api',
    DB_NAME: 'production'
})
