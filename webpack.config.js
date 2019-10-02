const path = require('path')
// Common JS / Node
// Similar al import nombreName from 'fileName'

module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    }
}

// npx webpack --mode development