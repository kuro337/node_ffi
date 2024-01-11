const addon = require("../build/Release/zig_core");

// inputs
const dir_path = "path/to/dir";
const output_file = "path/to/outputfile";

// func calls
const num_files_converted_a = addon.convertDirToSnippet(dir_path, output_file);
const num_files_converted_b = addon.convertDirToSnippet(dir_path, "here.json");

// results
console.log(`${num_files_converted_a} files converted to ${output_file}`);
console.log(`${num_files_converted_b} files converted to here.json`);
