const litPlugin = require('@lit-labs/eleventy-plugin-lit');

module.exports = function(eleventyConfig) {
    let markdownIt = require("markdown-it");
    let options = {
        html: true,
    };

    eleventyConfig.setLibrary("md", markdownIt(options));

    // eleventyConfig.addPassthroughCopy(
    //     "../src/style.css"
    // );

    eleventyConfig.addPassthroughCopy('css');

    eleventyConfig.addPlugin(litPlugin, {
        mode: 'worker',
        componentModules: [
            'js/demo-greeter.js',
            'js/other-component.js',
        ],
    });
    // Return your Object options:
    return {
        dir: {
            input: "src",
            output: "public"
        },
        passthroughFileCopy: true,
    }
};
