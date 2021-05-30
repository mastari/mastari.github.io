module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('style')
  eleventyConfig.addPassthroughCopy('imgs')
  eleventyConfig.addPassthroughCopy('fonts')
  return {
    passthroughFileCopy: true
  }
}