import indexRoutes from "./routes/index.routes.js";
import express from "express";
import cors from "cors";
import fotosRouter from "./routes/fotos.routes.js";

import morgan from "morgan";

const cors = require("cors");

const corsOptions = {
  origin: "https://albumdigital-fotografico.netlify.app", // tu dominio en Netlify
  methods: ["GET", "POST"],
  credentials: true,
};

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(indexRoutes);
app.use(fotosRouter);

app.use(cors(corsOptions));

export default app;
