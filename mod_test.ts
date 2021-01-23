import { cli } from "./mod.ts"

Deno.test({
  name: "Import of test",
  fn(): void {
    console.log(cli)
  },
});