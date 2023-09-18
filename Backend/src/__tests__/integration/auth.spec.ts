import supertest from "supertest";
import app from "../../app";

describe("User Signup", () => {
  it("should return 200", async () => {
    const userResponse = await supertest(app).post("/api/v1/auth/signup").send({
      email: "testg4@gmail.com",
      password: "123456",
      username: "test4s",
      name: "Full Name",
    });
    expect(userResponse.status).toBe(201);
    //reset remove the above user
    await supertest(app).delete("/api/v1/user/4");
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
