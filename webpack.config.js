import path, {dirname} from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const resolvePath = relativePath => path.resolve(__dirname, relativePath)

const Modes = {
  NONE: 'none',
  DEVELOPMENT: 'development',
  PRODUCTION: 'production'
}


export default {
  mode: Modes.NONE,

  devServer: {
    static: {
      directory: resolvePath('./'),
    },
    port: 8080,
    // Redirect not found routes to index.html
    historyApiFallback: {
      index: './dist/index.html'
    },
    https: false,
  },

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: resolvePath('dist')
  },

  resolveLoader: {
    modules: ['node_modules', resolvePath('custom-webpack/loaders')]
  },
  module: {
    rules: [
      {
        test: /\.json/,
        loader: 'jsonc-loader.cjs'
      },
      {
        test: /\.txt/,
        loader: 'txt-loader.cjs'
      },
      {
        test: /\.css/,
        use: [
          {loader: 'constructed-stylesheets-loader.cjs'},
          {loader: 'postcss-loader'},
        ]
      },
      {
        test: /\.html/,
        loader: 'html-document-fragment-loader.cjs'
      }
    ]
  }
}
