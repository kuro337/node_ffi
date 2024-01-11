/* Interface for Module Exposed from napi */

interface Addon {
  zigAdd(a: number, b: number): number;
  getString(): string;
  testWriteSampleFile(): number;
  getPath(filePath: string): string;
  writeFileCurrPath(filePath: string): number;
  writeFileToPathAbs(filePath: string): number;
  parseFileGetSnippet(filePath: string, print: boolean): string;
  parseStringFromNode(text: string): string;

  createSnippetWithMetadata(
    filePath: string,
    title: string,
    prefix: string,
    description: string,
    newFile: boolean,
    printOut: boolean
  ): string;

  parseFileWriteOutput(
    inputFilePath: string,
    outputFilePath: string,
    prefix: string,
    description: string,
    newFile: boolean,
    printOut: boolean
  ): number;

  convertDirToSnippet(dir_path: string, outputFile: string): number;
  parseStringWriteToFile(filePath: string, metadata: Metadata): number;
  parseRawGetSnippet(rawStr: string): string;
  parseRawWriteSnippetToPath(rawStr: string): number;
}

interface Snippet {
  title: string;
  prefix: string;
  body: string[];
  description: string;
  create_flag: boolean;
}

interface Metadata {
  inputPath: string;
  title: string;
  prefix: string;
  description: string;
  false: string;
  newFile: string;
}

/* 

FFI Struct for Fragment

pub const Snippet = struct {
    title: []const u8,
    prefix: []const u8,
    body: [][]const u8,
    description: []const u8,
    create_flag: bool,
  }

*/

interface AddonTest {}

declare const addon: Addon;

export = addon;
