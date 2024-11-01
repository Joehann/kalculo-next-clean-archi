module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
}
