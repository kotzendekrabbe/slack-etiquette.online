const CleanCSS = require('clean-css');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addFilter(
    'cssmin',
    code => new CleanCSS({}).minify(code).styles
  );

  return {
    dir: {
      input: 'site',
      output: 'dist'
    }
  };
};
