import { describe, expect, it, test } from 'vitest'

import * as hh from "./http-helper";

describe("Test function http code", () => {
  it('should return status code 201 with valid input data', async () => {
    const res = await hh.StatusHttpCreated()

    expect(res.statusCode).toEqual(201)
    expect(res.body).toMatchObject({
      message: 'Successful'
    })
  });

  it('should return status code 200', async () => {
    const data = { key: "value" };
    const res = await hh.StatusHttpOK(data)

    expect(res.statusCode).toEqual(200)
    expect(res.body).toMatchObject({
      key: 'value'
    })
  });

  it('should return status code 204 with not content', async () => {
    const res = await hh.StatusHttpNoContent()

    expect(res.statusCode).toEqual(204)
  });

  it('should return status code 404 with resource not found', async () => {
    const res = await hh.StatusHttpNotFound()

    expect(res.statusCode).toEqual(404)
    expect(res.body).toMatchObject({
      message: 'Resource not found.'
    })
  });
})