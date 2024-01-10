const addon = require("../build/Release/zig_core");

// inputs
const input_file =
  "/Users/kuro/Documents/Code/Zig/FileIO/vsfragments/tests/mock/backup/control_char_data/contains_controlchars.txt";

const output_file =
  "/Users/kuro/Documents/Code/Zig/FileIO/vsfragments/tests/mock/backup/output/cnapi_writesnippet.json";

const test_new =
  "/Users/kuro/Documents/Code/JS/vsfragments/hellofrag/src/samples/helloworld.ts";

const test_s =
  "/Users/kuro/Library/Application Support/Code/User/snippets/helloworld.code-snippets";

// Can handle input with Spaces!
//const output_file =
// "/Users/kuro/Library/Application Support/Code/User/snippets/c.json";

// /Users/kuro/Library/Application Support/Code/User/snippets/c.json

// func calls

// const result = addon.parseFileWriteOutput(
//   input_file,
//   output_file,
//   "C_NAPI_run",
//   "cnapi_testsnip",
//   "napi run test desc",
//   true,
//   true,
//   true
// );

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

// const only_input_output_paths = addon.parseFileWriteOutput(
//   input_file,
//   output_file,
//   "",
//   "",
//   "",
//   true,
//   true,
//   true
// );

// results
// console.log(`${result} for read file write file.`);

// console.log(`${only_input_output_paths} for read file write file.`);
