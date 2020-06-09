import { Request, Response } from "express";
import { connect } from "../server";
import { Siswa } from "./siswa.interface";

export class SiswaController {
  async ambil(req: Request, res: Response) {
    const conn = await connect();
    const siswa = await conn.query(
      "SELECT * FROM siswa JOIN kelas ON kelas.id = siswa.kelas_id"
    );
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

  async simpanSiswa(req: Request, res: Response) {
    const siswa = req.body;
    const conn = await connect();
    await conn.query("INSERT INTO siswa SET ? ", [siswa]);
    return res.status(201).json({
      status: 201,
      pesan: "Sukses!!",
    });
  }

  async editSiswa(req: Request, res: Response) {
    const nis = req.params.nis;
    const newSiswa = req.body;
    const conn = await connect();
    await conn.query("UPDATE siswa SET ? WHERE nis = ? ", [newSiswa, nis]);
    return res.status(201).json({
      status: 200,
      pesan: "Sukses!!",
    });
  }

  async hapusSiswa(req: Request, res: Response) {
    const nis = req.params.nis;
    const conn = await connect();
    await conn.query("DELETE FROM siswa WHERE nis = ? ", [nis]);
    return res.status(201).json({
      status: 200,
      pesan: "Sukses!!",
    });
  }
}
