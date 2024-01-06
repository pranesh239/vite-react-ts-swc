import path from "path";

export default {
  process(sourceText, sourcePath, options) {
    console.log("sourcePath", sourcePath);

    return {
      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
    };
  },
};
