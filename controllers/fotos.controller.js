import Foto from "../models/fotos.model.js";

export const getFotos = async (req, res) => {
  const fotos = await Foto.find();
  res.json(fotos);
};

export const postFoto = async (req, res) => {
  const { name } = req.body;

  const foto = new Foto({ name });

  await foto.save();

  res.json(foto);
};

export const putFotos = async (req, res) => {
  res.send("actualizando fotos...");
};

export const deleteFotos = async (req, res) => {
  res.send("eliminando fotos...");
};
