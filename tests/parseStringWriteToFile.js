const addon = require("../build/Release/zig_core");

// inputs

const somestr = `"  status = register_napi_function(env, exports, "parseStringWriteToFile", ZigParseStringWriteToFile);
  if (status != napi_ok)
  {
    napi_throw_error(env, NULL, "Unable to register function for parseStringWriteToFile");
  }"`;

const test_s = "../curr.json";

const test_new_snip = addon.parseStringWriteToFile(
  somestr,
  test_s,
  "",
  "",
  "",
  true,
  true,
  true
);

console.log(test_new_snip);

// results
// console.log(`${result} for read file write file.`);

// console.log(`${only_input_output_paths} for read file write file.`);
