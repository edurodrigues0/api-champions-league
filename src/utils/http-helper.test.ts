import { it, describe } from "node:test"
import assert from "node:assert"

import { StatusHttpCreated } from "./http-helper";

describe("Test function http code", () => {
  it('should return status code 201 with valid input data', async () => {
    const data = { key: "value" };
    const res = await StatusHttpCreated(data)

    assert.equal(res.statusCode, 201)
  });
})