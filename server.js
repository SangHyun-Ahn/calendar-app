// server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors()); // React에서 호출 가능

app.get("/fortune/:zodiac", async (req, res) => {
  const zodiac = req.params.zodiac;
  try {
    const response = await fetch(`https://aztro.sameerkumar.website/?sign=${zodiac}&day=today`, {
      method: "POST"
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "운세를 불러오지 못했습니다." });
  }
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
