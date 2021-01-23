// https://github.com/ceorleorn/cli
// https://deno.land/x/cli

import * as emoji from "https://deno.land/x/emoji/mod.ts";

export function print(message: string, code: string) {
  console.log(emoji.get(code) + " " + message);
}

export function printline(messages: any, code: string) {
  for (var line in messages) {
    if (line == messages[0]) {
      console.log(emoji.get(code) + " " + line);
    } else {
      console.log("  " + line);
    }
  }
}
