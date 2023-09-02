import supertest from "supertest";
import app from "../src/app";

describe("Test app.ts", () => {
  describe("GET /", () => {
    it("should return 404", async () => {
      const res = await supertest(app).get("/");
      expect(res.status).toBe(404);
    });
  });
});
