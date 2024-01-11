{
    "targets": [
        {
            "target_name": "zig_core",
            "sources": [  # Point to C source files
                "src/native/c/zig_core.c",
                "src/native/c/napi_core.c",
            ],
            "include_dirs": ["<!@(node -p \"require('node-addon-api').include\")"],
            "libraries": [  # Path to Zig-generated static libraries
                "/Users/kuro/Documents/Code/Zig/FileIO/vsfragments/c_exports/zig-out/lib/macos/aarch64/ReleaseFast/libvsfragment_cexports.a",
                "/Users/kuro/Documents/Code/JS/FFI/zig_c_napi/ffi/src/native/zig/zig_fn/zig-out/lib/macos/aarch64/ReleaseFast/libzignapi_ReleaseFast.a",
            ],
            "cflags!": ["-fno-exceptions"],
            "cflags_cc!": ["-fno-exceptions"],
        }
    ]
}
