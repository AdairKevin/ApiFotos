import indexRoutes from "./routes/index.routes.js";
import express from "express";
import fotosRouter from "./routes/fotos.routes.js";

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use(fotosRouter);

export default app;
