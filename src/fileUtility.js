import { readFile, writeFile } from "node:fs/promises";

//writeToJSONFile(path: string, data: object | object[]): Promise<void>
export async function writeToJSONFile(path, data) {
  // TODO
  await copyFileSync(JSON.stringify(data), path)
  return;
}

export function readFromJSONFile(path) {
  // TODO
}
