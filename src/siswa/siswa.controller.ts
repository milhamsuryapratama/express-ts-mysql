import { Request, Response } from "express";
import { connect } from "../server";
import { Siswa } from "./siswa.interface";

export class SiswaController {
  async ambil(req: Request, res: Response) {
    const conn = await connect();
    const siswa = await conn.query("SELECT * FROM siswa");
    return res.status(200).json(siswa[0]);
  }

  async ambilById(req: Request, res: Response) {
    const nis = req.params.nis;
    const conn = await connect();
    const siswa = await conn.query(
      "SELECT * FROM siswa JOIN kelas ON kelas.id = siswa.kelas_id WHERE nis = ? ",
      [nis]
    );
    return res.status(200).json(siswa[0]);
  }
}
