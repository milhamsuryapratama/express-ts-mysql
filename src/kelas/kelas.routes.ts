import express from "express";
import {
  ambilData,
  simpanKelas,
} from "./kelas.controller";

const router = express.Router();

router.route("/").get(ambilData).post(simpanKelas);
export default router;
