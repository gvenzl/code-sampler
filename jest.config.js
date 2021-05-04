module.exports = {
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
      "\\.(css|less|scss|sass)$": "<rootDir>/tests/mock/styleMock.js"
    },
    moduleNameMapper: {
      "languageIndex": "<rootDir>/tests/mock/searchMock/language-index.js",
      "topTags": "<rootDir>/tests/mock/searchMock/topTags-index.js",
      "tagsIndex" : "<rootDir>/tests/mock/searchMock/tags-index.js"
    }
  };