module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('style')
  eleventyConfig.addPassthroughCopy('imgs')
  return {
    passthroughFileCopy: true
  }
}