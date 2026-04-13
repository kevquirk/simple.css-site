import yaml from "js-yaml";

export default function (eleventyConfig) {
  // YAML data file support
  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));

  // Pass through assets from project root
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });

  // Date filters
  eleventyConfig.addFilter("dateToString", (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  });

  eleventyConfig.addFilter("dateToRfc822", (date) => {
    return new Date(date).toUTCString();
  });

  // Posts collection, newest first
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByTag("posts").sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
}
