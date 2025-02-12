import mongoose from "mongoose";
import mongosee from "mongoose";

const fotoSchema = mongosee.Schema({
  name: {
    type: String,
  },
  image: {
    public_id: String,
    secure_url: String,
  }
});

export default mongoose.model("Foto", fotoSchema);
