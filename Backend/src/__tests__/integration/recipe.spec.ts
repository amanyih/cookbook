import supertest from "supertest";
import app from "../../app";

let token = "";

beforeAll(async () => {
  const response = await supertest(app).post("/api/v1/auth/login").send({
    email: "someonesw@gmail.com",
    password: "password",
    name: "Full Name",
    username: "usernamesw",
  });
  expect(response.status).toBe(200);
  token = response.body.data.token;
});

describe("Testing Recipe", () => {
  describe("GET / {invalid route}", () => {
    it("should return 404", async () => {
      const res = await supertest(app).get("/");
      expect(res.status).toBe(404);
    });
  });
  describe("GET /api/v1/recipe {valid route}", () => {
    it("should return 200", async () => {
      const res = await supertest(app).get("/api/v1/recipe");
      expect(res.status).toBe(200);
      expect(res.body.status).toBe("success");
      expect(res.body.data).toHaveProperty("recipe");
      expect(res.body.data.recipe).toBeInstanceOf(Array);
      expect(res.body.data.recipe[0]).toHaveProperty("id");
    });
  });

  describe("GET /api/v1/recipe/:id {valid route}", () => {
    it("should return 200", async () => {
      const res = await supertest(app).get("/api/v1/recipe/1");

      expect(res.status).toBe(200);
      expect(res.body.status).toBe("success");
      expect(res.body.data).toHaveProperty("recipe");
      expect(res.body.data.recipe).toBeInstanceOf(Object);
      expect(res.body.data.recipe).toHaveProperty("id");
    });
  });
});

describe("Testing User", () => {
  describe("GET /api/v1/user {valid route}", () => {
    it("should return 200", async () => {
      const res = await supertest(app)
        .get("/api/v1/users")
        .set("Authorization", `Bearer ${token}`);
      expect(res.status).toBe(200);
      expect(res.body.status).toBe("success");
      expect(res.body.data).toHaveProperty("users");
      expect(res.body.data.users).toBeInstanceOf(Array);
      expect(res.body.data.users[0]).toHaveProperty("id");
    });
  });
});
