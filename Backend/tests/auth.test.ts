import supertest from "supertest";
import app from "../src/app";

describe("User Signup", () => {
  it("should return 200", async () => {
    const userResponse = await supertest(app).post("/api/v1/auth/signup").send({
      email: "test4@gmail.com",
      password: "123456",
    });
    expect(userResponse.status).toBe(201);
  });
});

describe("User Login", () => {
  it("should return 200", async () => {
    const userResponse = await supertest(app).post("/api/v1/auth/login").send({
      email: "test4@gmail.com",
      password: "123456",
    });
    expect(userResponse.status).toBe(200);
  });
});
