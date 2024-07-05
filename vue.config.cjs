const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  productionSourceMap: false,
  transpileDependencies: true,
  filenameHashing: false,
  outputDir: "./public/dist/vue-3",
  pluginOptions: {
    webpack: {
      dir: ["./webpack"],
    },
  },
  pages: {
    comp_1: {
      entry: "src/comp-1/main.js",
      filename: "comp-1.html",
      title: "comp-1",
    },
    // Comment on this section to see the project working
    comp_2: {
      entry: "src/comp-2/main.js",
      filename: "comp-2.html",
      title: "app_comp-2",
    },
    // Comment on this section to see the project working
  },
});
