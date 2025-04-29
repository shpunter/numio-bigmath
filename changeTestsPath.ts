const rootPath = "./src";
const decoder = new TextDecoder("utf-8");
const encoder = new TextEncoder();

async function walk(path: string, cb: ({ path, fileInfo }: CB) => void) {
  const fileInfo = await Deno.lstat(path);

  cb({ fileInfo, path });

  if (fileInfo.isDirectory) {
    const entries = await Deno.readDir(path);

    for await (const entry of entries) {
      await walk(`${path}/${entry.name}`, cb);
    }
  }
}

await walk(rootPath, ({ path, fileInfo }) => {
  if (fileInfo.isFile && path.endsWith(".test.ts")) {
    const content = decoder.decode(Deno.readFileSync(path));
    const fixed = content.replaceAll("/index.ts", "/npm/index.js");

    Deno.writeFileSync(path, encoder.encode(fixed));
  }
});


type CB = { path: string; fileInfo: Deno.FileInfo };
