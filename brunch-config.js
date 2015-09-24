/*eslint-env node */

module.exports = {
  config: {
    files: {
      javascripts: {
        joinTo: "app.js"
      },
      stylesheets: {
        joinTo: "app.css"
      }
    },
    plugins: {
      elmBrunch: {
        mainModules: ["src/Bingo.elm", "src/BingoUtils.elm"],
        outputFolder: "public"
      }
    }
  }
};
