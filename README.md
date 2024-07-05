# Test-error-build

This project is an example to demonstrate a specific issue with components and plugins in Vue 3. Follow the steps below to install, compile, and run the application.

### Steps to Run the Application

1. **Install Dependencies**

   Run the following command to install all necessary dependencies:

   ```sh
   npm install
   ```

2. **Compile and Minify for Production**

   To compile the project for production, run the command:

   ```sh
   npm run build
   ```

3. **View the Application**

   After compilation, open the `index.html` file located in the root directory of the project to view the application working.

   ```sh
   open index.html
   ```

**Note:** Ensure that all mentioned paths and files are correct and that you have the necessary permissions to access and execute the above commands.

### Reproducing the Issue

To reproduce the problem, follow these steps:

1. **Clone the Repository**

   ```sh
   git clone https://github.com/Carlos-Alexandre-Leutz/erro-no-vue-3
   ```

2. **Navigate to the Project Directory**

   ```sh
   cd erro-no-vue-3
   ```

3. **Install the Dependencies**

   ```sh
   npm install
   ```

4. **Build the Components**

   ```sh
   npm run build
   ```

### Expected and Observed Results

- When only `comp_1` is included in `vue.config.js`, the build works correctly, and `comp_1` is displayed as expected.
- When `comp_2` is included in `vue.config.js` and built along with `comp_1`, neither component works, and no error is displayed in the console.

### Detailed Steps in `vue.config.js`

```javascript
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
    comp_2: {
      entry: "src/comp-2/main.js",
      filename: "comp-2.html",
      title: "app_comp-2",
    },
  },
});
```

### Specific Issue

- `comp_2` does not work when imported within `comp_1`.
- `comp_2` contains child components, and importing these components seems to be causing the problem.
- When `comp_2` has no child components, both components work correctly.

### Troubleshooting Steps

To resolve this, we have tried:

1. Ensuring that the import paths are correct.
2. Checking if the child components of `comp_2` are properly registered and exported.
3. Analyzing the webpack configuration file for potential conflicts.
