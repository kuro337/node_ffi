{
    "targets": [
        {
            "target_name": "zig_core",
            "sources": [  # Point to C source files
                "src/native/c/zig_core.c",
                "src/native/c/napi_core.c",
            ],
            "include_dirs": ["<!@(node -p \"require('node-addon-api').include\")"],
            "libraries": [  # zig static library build artifacts
                "<!(pwd)/src/build/libvsfragment_cexports.a",
                "<!(pwd)/src/build/libzignapi_ReleaseFast.a",
            ],
            "cflags!": ["-fno-exceptions"],
            "cflags_cc!": ["-fno-exceptions"],
        }
    ]
}
