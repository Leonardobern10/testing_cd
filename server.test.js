const request = require("supertest");
const express = require("express");

const app = express();
app.get("/", (req, res) => res.send("🚀 Deploy contínuo com Azure Pipeline funcionando!"));

describe("Teste da rota GET /", () => {
  it("deve retornar o texto correto", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("🚀 Deploy contínuo com Azure Pipeline funcionando!");
  });
});
