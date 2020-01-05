const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss');

const production = !process.env.ROLLUP_WATCH;

module.exports = {
   plugins: [
      require("postcss-import")(),
      require('tailwindcss'),
      cssnano({
         autoprefixer: false,
         preset: ['default'],
      }),
      production &&
         purgecss({
            content: ['./**/*.html', './**/*.svelte'],
            defaultExtractor: content =>
               content.match(/[A-Za-z0-9-_:/]+/g) || [],
         }),
   ],
};
