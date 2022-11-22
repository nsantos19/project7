import { readFile, writeFile } from "node:fs/promises";

// writeToJSONFile(path: string, data: object | object[]): Promise<void>
export async function writeToJSONFile(path, data) {
  await writeFile(path, JSON.stringify(data))
}

// readFromJSONFile(path: string): Promise<object | object[]>
export function readFromJSONFile(path) {
  return readFile(path).then(e => JSON.parse(e))
}
