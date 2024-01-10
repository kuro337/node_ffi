const addon = require("../build/Release/zig_core");

console.log(addon.zigAdd(10, 20)); // Should use the Zig 'add' function
console.log(addon.getString()); // Should use the Zig 'getString' function

if (addon.testWriteSampleFile() == 0) {
  console.log("Test Write Success\n");
} else {
  console.log("Test Write Failure\n");
}

/* Write Hardcoded File - pass a path and func gets Absolute Path of caller and adds */
if (addon.writeFileCurrPath("mock_data/newzig.txt") == 0) {
  console.log("Full Success\n");
} else {
  console.log("Test\n");
}

/* Write Hardcoded File to an Absolute Path */
if (
  addon.writeFileToPathAbs(
    "/Users/kuro/Documents/Code/JS/vsfragments/hellofrag/out/output/testfile.txt"
  ) == 0
) {
  console.log("Full Success\n");
} else {
  console.log("Test\n");
}

const absolutePath = addon.getPath("");

console.log(`${absolutePath}.txt`);

console.log(absolutePath);

const string_from_file = addon.parseFileGetSnippet("testfile.txt", true);

console.log("String Returned\n\n", string_from_file);

// zig-out/native/libzignapi_fast.a

/* Test JS Passing string to C */

const inputString = "asdajsnd\\n\\\\nnnnasdkaskmaskdm";
const result = addon.receiveStringFromJS(inputString);

if (result == 0) {
  console.log("The C function succeeded.");
} else {
  console.log("The C function failed.");
}

if (result == 0) {
  console.log("The C function succeeded.");
} else {
  console.log("The C function failed.");
}

const directResult = addon.parseStringFromJS(inputString);

console.log(`Passing JS String Directly Worked.\n${directResult}`);
