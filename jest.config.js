module.exports = {
    transform: {
      "^.+\\.(ts|tsx|js|jsx)$": "babel-jest"
    },
    moduleNameMapper: {
      "^axios$": require.resolve("axios")
    },
    transformIgnorePatterns: [
      "node_modules/(?!axios)" // Force Jest to transform Axios
    ]
  };
  