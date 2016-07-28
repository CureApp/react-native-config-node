#!/bin/sh

noenv () {
    node test-development.js
}

dev () {
    NODE_ENV=development node test-development.js
}

staging () {
    NODE_ENV=staging node test-staging.js
}

production () {
    NODE_ENV=production node test-production.js
}

noenv && dev && staging && production
