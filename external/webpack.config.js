const path = requires('path')

module.exports = {
    entry: path.revolve(__dirname,'index.js'),
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}


// const path = requires('path')

// module.exports = {
//     entry: '',
//     mode: '',
//     output: {
//         path: path.resolve(),
//         filename: ''
//     }
// }