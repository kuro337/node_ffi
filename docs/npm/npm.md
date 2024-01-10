# Loading Deps

Why not "dependencies": { "my-own-module": "file:../my-own-module" } ? – 

 
- Local paths can be saved using 
  
```bash
npm install -S   

# or

npm install --save 
```

```bash
../foo/bar
~/foo/bar
./foo/bar
/foo/bar
```

- Example package.json:

```json

{
  "name": "baz",
  "dependencies": {
    "bar": "file:../foo/bar"
  }
}
```

```bash

npm ls:

app@0.0.1 /private/tmp/app
└── somelocallib@0.0.1 -> /private/tmp/somelocallib
```

### Trying to see if ESM Works for `node-gyp`

DOES NOT WORK

```json

{
  "name": "ffi-example",
  "version": "1.0.0",
  "type": "module",
  "gypfile": true,
  "dependencies": {
    "node-addon-api": "^3.0.0"
  },
  "scripts": {
    "install": "node-gyp rebuild"
  }
}
```
- Try using
  
```js
// Before
const addon = require("./build/Release/fromzig");

// After
import addon from "./build/Release/fromzig.js";
```


- Working Config

```json
{
  "name": "ffi-example",
  "version": "1.0.0",
  "gypfile": true,
  "dependencies": {
    "node-addon-api": "^3.0.0"
  },
  "scripts": {
    "install": "node-gyp rebuild"
  }
}

```