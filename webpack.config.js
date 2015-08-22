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
			{ test: /\.styl$/, loader: "style!css!stylus" },
			{ test: /\.css$/, loader: "style!css!" },
			{ test: /\.html$/, loader: "html" }
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