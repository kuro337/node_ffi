cmd_Release/zig_core.node := c++ -bundle -undefined dynamic_lookup -Wl,-search_paths_first -mmacosx-version-min=11.0 -arch arm64 -L./Release -stdlib=libc++  -o Release/zig_core.node Release/obj.target/zig_core/src/zig_core.o Release/obj.target/zig_core/src/napi_core.o /Users/kuro/Documents/Code/Zig/FileIO/vsfragments/c_exports/zig-out/lib/macos/aarch64/ReleaseFast/libvsfragment_cexports.a /Users/kuro/Documents/Code/Zig/FileIO/vsfragments/c_exports/zig-out/lib/native/libvsfragment_cexports_fast.a