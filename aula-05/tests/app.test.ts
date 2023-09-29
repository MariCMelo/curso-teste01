import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test, /health end point", () => {
  it("should return 200 when ask /health", async () => {
    const { status, text } = await api.get("/health");
    expect(status).toBe(200);
    expect(text).toBe("OK!");
  });
});

describe("Fibonacci test from /fibonacci end point", () => {
  it("should return status 400 when param is not a number", async () => {
    const { status } = await api.get("/fibonacci?elements=NaN");
    expect(status).toBe(400);
  });

  it("should return 400 when param < 1 ", async () => {
    const { status } = await api.get("/fibonacci?elements=-10");
    expect(status).toBe(400);
  });

  it("should return 400 when param not present", async () => {
    const { status } = await api.get("/fibonacci?elements");
    expect(status).toBe(400);
  });
  it("should return status 200, and an array when param is a valid number", async () => {
    const { status, body } = await api.get("/fibonacci?elements=10");
    expect(status).toBe(200);
    expect(body).toHaveLength(10);
    expect(body).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});
