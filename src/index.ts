// https://github.com/ceorleorn/cli
// https://deno.land/x/clis

import * as emoji from "https://deno.land/x/emoji/mod.ts";

import * as messages from "./messages.ts";

export const clis = {
  log: messages.print,
  print: messages.print,
  printline: messages.printline,
  emoji: emoji,
};
