import supertest from "supertest";
import app from "../../app";

describe("Test app.ts", () => {
  describe("GET /", () => {
    it("should return 404", async () => {
      const res = await supertest(app).get("/");
      expect(res.status).toBe(404);
    });
  });
});
