module.exports = {
  clearMocks: true,
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/file-transformer.js",
    "^.+\\.(css|scss|sass|less)$": "<rootDir>/__mocks__/style-transformer.js",
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        // jsc: {
        //   parser: {
        //     syntax: "typescript",
        //     jsx: true,
        //   },
        //   transform: {
        //     react: {
        //       runtime: "automatic",
        //     },
        //   },
        // },
        configFile: "./.swcrc",
      },
    ],
  },
};
