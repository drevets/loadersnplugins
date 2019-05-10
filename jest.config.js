module.exports = {
  roots: ["<rootDir>/app", "<rootDir>/server"],
  setupFiles: ["./setupTests.js"],
  testPathIgnorePatterns: [
    "./app/__tests__/testData",
    "./server/__tests__/testData"
  ],
  testRegex: "/__tests__/.*\\.(ts|tsx|js)$",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.ts?$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  collectCoverageFrom: ["app/**/*", "server/**/*"],
  coverageThreshold: {
    global: {
      statements: 33,
      branches: 6,
      functions: 18,
      lines: 33
    }
  }
};
