const rootPath = "./npm";
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
  if (fileInfo.isFile && path.endsWith(".js")) {
    const content = decoder.decode(Deno.readFileSync(path));
    const fixed = content.replaceAll(".ts", ".js");

    Deno.writeFileSync(path, encoder.encode(fixed));
  }

  if (fileInfo.isFile && path.endsWith(".d.ts")) {
    const content = decoder.decode(Deno.readFileSync(path));
    const fixed = content.replaceAll(".ts", ".d.ts");

    Deno.writeFileSync(path, encoder.encode(fixed));
  }

  if (fileInfo.isFile && path.endsWith("types.js")) {
    Deno.remove(path);
  }
});

Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
Deno.copyFileSync("CHANGELOG.md", "npm/CHANGELOG.md");
Deno.copyFileSync("package.json", "npm/package.json");
Deno.copyFileSync("package-lock.json", "npm/package-lock.json");


type CB = { path: string; fileInfo: Deno.FileInfo };
