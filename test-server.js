import express from "express";
import cors from "cors";
import handler from "./api/send.js";
import bodyParser from "body-parser";

const app = express();

app.use(cors());

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["POST"],
  allowedHeaders: ["Content-Type"],
}));

app.use(bodyParser.json());

app.post("/api/send", handler);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
