const litPlugin = require('@lit-labs/eleventy-plugin-lit');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(litPlugin, {
        mode: 'worker',
        componentModules: [
            './src/js/demo-greeter.js',
            './src/js/my-element.js'
        ],
    });

    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    let markdownIt = require("markdown-it");
    let options = {
        html: true,
    };

    eleventyConfig.setLibrary("md", markdownIt(options));

    eleventyConfig.addPassthroughCopy('./src/css');

    // Return your Object options:
    return {
        dir: {
            input: "src",
            output: "public"
        },
        passthroughFileCopy: true,
    }
};
