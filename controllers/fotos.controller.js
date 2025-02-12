import Foto from "../models/fotos.model.js";
import { uploadImage } from "../utils/cloudinary.js";
import fs from "fs-extra";

export const getFotos = async (req, res) => {
  try {
    const fotos = await Foto.find();
    res.json(fotos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const postFoto = async (req, res) => {
  try {
    const { name } = req.body;

    const foto = new Foto({ name });

    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      foto.image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      }

      await fs.unlink(req.files.image.tempFilePath)
    }

    await foto.save();

    res.json(foto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const putFotos = async (req, res) => {
  res.send("actualizando fotos...");
};

export const deleteFotos = async (req, res) => {
  res.send("eliminando fotos...");
};
