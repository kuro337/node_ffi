const addon = require("./build/Release/zig_core");

module.exports = {
  receiveStringFromJS: addon.receiveStringFromJS,
  parseStringFromJS: addon.parseStringFromJS,
  // Export other functions you might have
};
