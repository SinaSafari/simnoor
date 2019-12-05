const withPlugins = require('next-compose-plugins')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const withCSS = require('@zeit/next-css')
const withImages = require('next-optimized-images')
const withFonts = require('next-fonts')

const nextConfig = {
    exportTrailingSlash: true,
    webpack(config, options) {
        config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}))

        return config
    }
}

module.exports = withPlugins([
    [withCSS],
    [withImages],
    [withFonts]
], nextConfig)