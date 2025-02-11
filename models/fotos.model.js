import mongoose from "mongoose";
import mongosee from "mongoose";

const fotoSchema = mongosee.Schema({
  name: {
    type: String,
  },
});

export default mongoose.model("Foto", fotoSchema);
