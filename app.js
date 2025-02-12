import indexRoutes from "./routes/index.routes.js";
import express from "express";
import cors from "cors";
import fotosRouter from "./routes/fotos.routes.js";

import morgan from "morgan";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(indexRoutes);
app.use(fotosRouter);

export default app;
