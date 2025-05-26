import indexRoutes from "./routes/index.routes.js";
import express from "express";
import cors from "cors";
import fotosRouter from "./routes/fotos.routes.js";

import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(indexRoutes);
app.use(fotosRouter);

app.use(
  cors({
    origin: "https://albumdigital-fotografico.netlify.app",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

export default app;
