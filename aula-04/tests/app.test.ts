import supertest from 'supertest';
import app from '../src/app'


const server = supertest(app);

describe("api test", () => {
  it("shoul return status 200 and response OK! at /health", async () => {
    const result = await server.get("/health");
    console.log(result);

    const { statusCode } = result;
    expect(statusCode).toBe(200);
  });
});
