import test from "node:test";
import assert from "node:assert/strict";
import { setTimeout as delay } from "node:timers/promises";
import { countItems } from "../src/count.js";

test("counts items", async () => {
  await delay(60_000);
  assert.equal(countItems(["a", "b"]), 2);
});
