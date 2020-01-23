let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */
const tailwindcss = require('tailwindcss');

mix
  .js('src/app.js', 'dist/')
  .sass('src/app.scss', 'dist/')
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('./tailwind.config.js')]
  });

if (process.env.NODE_ENV === 'development') {
  mix.webpackConfig({
    //   entry: './src/app.js',
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    devServer: {
      proxy: {
        '!**/*.(js|css)': { target: 'http://localhost:3000' }
      }
    }
  });
}
