{
    "targets": [
        {
            "target_name": "zig_core",
            "sources": ["src/zig_core.c", "src/napi_core.c"],  # Point to C source files
            "include_dirs": ["<!@(node -p \"require('node-addon-api').include\")"],
            "libraries": [  # Path to Zig-generated static libraries
                "/Users/kuro/Documents/Code/Zig/FileIO/vsfragments/c_exports/zig-out/lib/macos/aarch64/ReleaseFast/libvsfragment_cexports.a",
                # "/Users/kuro/Documents/Code/JS/FFI/zig_c_napi/ffi/src/zig_fn/zig-out/native/libzignapi_fast.a",
                "/Users/kuro/Documents/Code/Zig/FileIO/vsfragments/c_exports/zig-out/lib/native/libvsfragment_cexports_fast.a",
            ],
            "cflags!": ["-fno-exceptions"],
            "cflags_cc!": ["-fno-exceptions"],
        }
    ]
}
