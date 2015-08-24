var webpack = require('webpack')

module.exports = {
	entry: "./src/main.js",
	output: {
		path: "./build",
		publicPath: "/build/",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.vue$/, loader: "vue-loader" },
			{ test: /\.styl$/, loader: "style!css!stylus" }
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress: {
				warnings: false
			}
		})
	]
}
