import { prisma } from "../database/connectToDB.js";
import { uploadImage } from "../utils/cloudinary.js";
import fs from "fs-extra";

// Obtener todas las fotos
export const getFotos = async (req, res) => {
  try {
    const fotos = await prisma.foto.findMany();
    res.json(fotos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Subir una nueva foto
export const postFoto = async (req, res) => {
  try {
    const { name } = req.body;

    let public_id = "";
    let secure_url = "";

    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      public_id = result.public_id;
      secure_url = result.secure_url;
      await fs.unlink(req.files.image.tempFilePath);
    }

    const newFoto = await prisma.foto.create({
      data: {
        name,
        public_id,
        secure_url,
      },
    });

    res.json(newFoto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar una foto (puedes ampliar esto más adelante)
export const putFotos = async (req, res) => {
  res.send("actualizando fotos...");
};

// Eliminar una foto (también puedes borrar de Cloudinary si quieres)
export const deleteFotos = async (req, res) => {
  res.send("eliminando fotos...");
};
