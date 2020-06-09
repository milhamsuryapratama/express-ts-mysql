import { Request, Response } from "express";
import { connect } from "../server";
import { Siswa } from "./siswa.interface";

export class SiswaController {
  async ambil(req: Request, res: Response) {
    const conn = await connect();
    const siswa = await conn.query("SELECT * FROM siswa");
    return res.status(200).json(siswa[0]);
  }
}
