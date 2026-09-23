import request from "supertest";
import app from "../../src/app";

describe("GET /api/health", () => {
  it("should return 200 with API status", async () => {
    const res = await request(app).get("/api/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      success: true,
      message: "CAKE SPARK API is running",
    });
  });
});
