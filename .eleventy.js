const CleanCSS = require('clean-css');

module.exports = function(eleventyConfig) {
  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy({ "site/img/*.*": "img" });
  eleventyConfig.addFilter(
    'cssmin',
    code => new CleanCSS({}).minify(code).styles
  );

  eleventyConfig.addPassthroughCopy({ "site/favicon": "/" });

  return {
    dir: {
      input: 'site',
      output: 'dist'
    }
  };
};
