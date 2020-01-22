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

mix.options({
  hmrOptions: {
    host: 'laravel.dev.local', // site's host name
    port: 8080
  }
});
