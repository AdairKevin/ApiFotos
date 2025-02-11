import { Router } from "express";
import {
  getFotos,
  postFoto,
  putFotos,
  deleteFotos,
} from "../controllers/fotos.controller.js";

const router = Router();

router.get("/fotos", getFotos);

router.post("/fotos", postFoto);

router.put("/fotos", putFotos);

router.delete("/fotos", deleteFotos);

export default router;
