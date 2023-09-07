import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildOptions } from './types/config'

export const buildPlugins = ({ isDev, paths }: BuildOptions): webpack.WebpackPluginInstance[] => {
    console.log(path.resolve(__dirname, 'public', 'index.html'))
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            IS_DEV: JSON.stringify(isDev)
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
