import express from "express";
import { SiswaController } from "./siswa.controller";

const router = express.Router();
const controller = new SiswaController();

router.route("/").get(controller.ambil);
router.route("/:nis").get(controller.ambilById);

export default router;
