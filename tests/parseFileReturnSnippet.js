const addon = require("../build/Release/zig_core");

const abs_path =
  "/Users/kuro/Documents/Code/Zig/FileIO/vsfragments/tests/unit_tests.zig";

const curr_path = "testfile.txt";

const string_from_file = addon.parseFileGetSnippet(curr_path, true, false);
console.log("String Returned\n\n", string_from_file);

const snippet_existing = addon.parseFileGetSnippet(abs_path, false, true);
console.log("String Returned Existing\n\n", snippet_existing);

/*      
EXPECTED_OUTPUT
_____________________________
 Creating Fragment
_____________________________

============================================================================
Successfully Generated Fragment from Input File.
============================================================================

Paste fragment into the VSCode .code-snippets file and begin typing Command + Space and the Prefix (gohttp...) to paste the Snippet into your IDE.
======================================

        "Go HTTP Server Snippet": {
                "prefix": "gohttpserver",
                "body": [
                        "# Threading OS Threads",
                        "",
                        "```rust",
                        "const std = @import(\"std\");",
                        "const expect = std.testing.expect;",
                        "const print = std.debug.print;",
                        "const ArrayList = std.ArrayList;",
                        "const test_allocator = std.testing.allocator;",
                        "const eql = std.mem.eql;",
                        "const Thread = std.Thread;",
                        "",
                        "pub fn main() !void {",
                        "   \tstd.debug.print(\"{s}\\n\", .{\"Hello, world!\"});",
                        "}",
                        "```"
                ],
                "description": "Some Useful Snippet Descriptor. Pass --desc <string> to set explicitly."
        }

============================================================================

String Returned

 {
        "Go HTTP Server Snippet": {
                "prefix": "gohttpserver",
                "body": [
                        "# Threading OS Threads",
                        "",
                        "```rust",
                        "const std = @import(\"std\");",
                        "const expect = std.testing.expect;",
                        "const print = std.debug.print;",
                        "const ArrayList = std.ArrayList;",
                        "const test_allocator = std.testing.allocator;",
                        "const eql = std.mem.eql;",
                        "const Thread = std.Thread;",
                        "",
                        "pub fn main() !void {",
                        "   \tstd.debug.print(\"{s}\\n\", .{\"Hello, world!\"});",
                        "}",
                        "```"
                ],
                "description": "Some Useful Snippet Descriptor. Pass --desc <string> to set explicitly."
        }
}

*/

// const snip_file =
//   "/Users/kuro/Library/Application Support/Code/User/snippets/Chingod.code-snippets";
