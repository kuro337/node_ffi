const std = @import("std");
const CompileStep = std.Build.Step.Compile;
const Build = std.Build;
const Tag = std.Target.Os.Tag;
const Arch = std.Target.Cpu.Arch;
const OptimizeMode = std.builtin.OptimizeMode;

const OS = [_]Tag{ Tag.macos, Tag.linux };
const ARCH = [_]Arch{ Arch.aarch64, Arch.x86_64 };
const MODE = [_]OptimizeMode{ .Debug, .ReleaseSafe, .ReleaseSmall, .ReleaseFast };

const build_output_artifact_name = "zignapi";

pub fn build(b: *std.Build) !void {
    const base_target = b.standardTargetOptions(.{});

    for (ARCH) |arch| {
        for (OS) |os| {
            for (MODE) |optimization| {
                var resolved_target = base_target;
                resolved_target.result.cpu.arch = arch;
                resolved_target.result.os.tag = os;

                const cpuarch = @tagName(arch);
                const osystem = @tagName(os);
                const release = @tagName(optimization);

                const exe_name = try std.mem.concat(b.allocator, u8, &[_][]const u8{ build_output_artifact_name, "_", release });

                const lib = b.addStaticLibrary(.{
                    .name = exe_name,

                    .root_source_file = .{ .path = "funcs.zig" },
                    .target = resolved_target,
                    .optimize = optimization,
                });

                const target_output = b.addInstallArtifact(lib, .{
                    .dest_dir = .{
                        .override = .{
                            .custom = try std.fmt.allocPrint(b.allocator, "lib/{s}/{s}/{s}", .{ osystem, cpuarch, release }),
                        },
                    },
                });

                b.getInstallStep().dependOn(&target_output.step);
            }
        }
    }
}
