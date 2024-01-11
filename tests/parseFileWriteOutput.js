const addon = require("../build/Release/zig_core");

// inputs
const input_file = "path/to/outputfile";
const output_file = "path/to/outputfile";
const test_new = "path/to/outputfile";
const test_s = "path/to/outputfile";

// Can handle input with Spaces!

//const output_file =
// "/Application Support/Code/User/snippets/c.json";

// func calls

const test_new_snip = addon.parseFileWriteOutput(
  test_new,
  test_s,
  "C_NAPI_run",
  "cnapi_testsnip",
  "napi run test desc",
  true,
  true,
  true
);

console.log(test_new_snip);

// results

// console.log(`${result} for read file write file.`);

// console.log(`${only_input_output_paths} for read file write file.`);
