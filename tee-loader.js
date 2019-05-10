const loaderUtils = require("loader-utils"); // provided by webpack

module.exports = function(source) {
  const options = loaderUtils.getOptions(this) || { label: "" };

  console.log(`[tee-loader-${options.label}]: ${this.resource}`);
  console.log(source);

  return source;
};
