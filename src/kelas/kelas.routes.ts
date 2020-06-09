import express from "express";
import {
  ambilData,
  simpanKelas,
  ambilDataById,
  editKelas,
  hapusKelas,
} from "./kelas.controller";

const router = express.Router();

router.route("/").get(ambilData).post(simpanKelas);
router.route("/:id").get(ambilDataById).put(editKelas).delete(hapusKelas);

export default router;
