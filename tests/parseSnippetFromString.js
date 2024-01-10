const addon = require("../build/Release/zig_core");

const inputString = "asdajsnd\\n\\\\nnnnasdkaskmaskdm";
const result = addon.receiveStringFromJS(inputString);

if (result == 0) {
  console.log("The C function succeeded.");
} else {
  console.log("The C function failed.");
}

const directResult = addon.parseStringFromJS(inputString);

console.log(`Passing JS String Directly Worked.\n${directResult}`);

/*      
EXPECTED_OUTPUT
_______________
Received string from JavaScript: asdajsnd\n\\nnnnasdkaskmaskdm
String received in Zig from JS-C: asdajsnd\n\\nnnnasdkaskmaskdm
The C function succeeded.
Passing JS String Directly Worked.
{
        "Go HTTP Server Snippet": {
                "prefix": "gohttpserver",
                "body": [
                        "asdajsnd\\n\\\\nnnnasdkaskmaskdm"
                ],
                "description": "Some Useful Snippet Descriptor. Pass --desc <string> to set explicitly."
        }
}




*/
