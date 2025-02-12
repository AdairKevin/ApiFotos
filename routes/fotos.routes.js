import { Router } from "express";
import {
  getFotos,
  postFoto,
  putFotos,
  deleteFotos,
} from "../controllers/fotos.controller.js";
import fileUpload from "express-fileupload";

const router = Router();

router.get("/fotos", getFotos);

router.post(
  "/fotos",

  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  }),
  
  postFoto,
);

router.put("/fotos", putFotos);

router.delete("/fotos", deleteFotos);

export default router;
