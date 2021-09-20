const fg = require('fast-glob');

function getAllProfiles() {
    const files = fg.sync('./src/profiles/*/*.js', { absolute: true });
    return files.map(file => require(file));
}

module.exports = {
    all: getAllProfiles(),
}