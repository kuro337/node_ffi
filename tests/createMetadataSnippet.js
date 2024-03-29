const addon = require("../build/Release/zig_core");

const filePath =
  "/Users/kuro/Documents/Code/JS/FFI/zig_c_napi/ffi/indexparsedcopy.js";
const title = "Zig Metadata Export";
const prefix = "zigmetadatatest";
const description = "Custom Description for Metadata Export";
const printOut = false;
const new_snippet_file = true;

/* Creates a Snippet with Metadata for Title, Prefix, and Description */

const result = addon.createSnippetWithMetadata(
  filePath,
  title,
  prefix,
  description,
  true,
  printOut
);
console.log(result);

const noEnclosing = addon.createSnippetWithMetadata(
  filePath,
  title,
  prefix,
  description,
  false,
  printOut
);
console.log(noEnclosing);

/*      
EXPECTED_OUTPUT
____________________________
 Creating Fragment
_____________________________

============================================================================
Successfully Generated Fragment from Input File.
============================================================================

Paste fragment into the VSCode .code-snippets file and begin typing Command + Space and the Prefix (gohttp...) to paste the Snippet into your IDE.
======================================

{
        "Zig Metadata Export": {
                "prefix": "zigmetadatatest",
                "body": [
                        "console.log(`Passing JS String Directly Worked.\\n\\${directResult}`);"
                ],
                "description": "Custom Description for Metadata Export"
        }
}

============================================================================

{
        "Zig Metadata Export": {
                "prefix": "zigmetadatatest",
                "body": [
                        "console.log(`Passing JS String Directly Worked.\\n\\${directResult}`);"
                ],
                "description": "Custom Description for Metadata Export"
        }
}


_____________________________
 Creating Fragment
_____________________________

============================================================================
Successfully Generated Fragment from Input File.
============================================================================

Paste fragment into the VSCode .code-snippets file and begin typing Command + Space and the Prefix (gohttp...) to paste the Snippet into your IDE.
======================================

        "Zig Metadata Export": {
                "prefix": "zigmetadatatest",
                "body": [
                        "console.log(`Passing JS String Directly Worked.\\n\\${directResult}`);"
                ],
                "description": "Custom Description for Metadata Export"
        }

============================================================================

        "Zig Metadata Export": {
                "prefix": "zigmetadatatest",
                "body": [
                        "console.log(`Passing JS String Directly Worked.\\n\\${directResult}`);"
                ],
                "description": "Custom Description for Metadata Export"
        }
*/
