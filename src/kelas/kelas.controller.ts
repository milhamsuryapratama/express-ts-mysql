import { Request, Response } from "express";
import { connect } from "../server";
import { Kelas } from "./kelas.interface";

export async function ambilData(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {
    const conn = await connect();
    const kelas = await conn.query("SELECT * FROM kelas");
    return res.status(200).json(kelas[0]);
  } catch (error) {
    console.log(error);
  }
}

export async function simpanKelas(req: Request, res: Response) {
  const newKelas: Kelas = req.body;
  const conn = connect();
  (await conn).query("INSERT INTO kelas SET ? ", [newKelas]);
  return res.status(201).json({
    status: 201,
    pesan: "Sukses!!",
    data: newKelas,
  });
}

export async function ambilDataById(req: Request, res: Response) {
  const id: string = req.params.id;
  const conn = await connect();
  const data = await conn.query("SELECT * FROM kelas WHERE id = ? ", [id]);
  return res.status(200).json(data[0]);
}

export async function editKelas(req: Request, res: Response) {
  const id: string = req.params.id;
  const newKelas = req.body;
  const conn = await connect();
  await conn.query("UPDATE kelas SET ? WHERE id = ?", [newKelas, id]);
  return res.status(200).json({
    status: 200,
    pesan: "Sukses!!",
  });
}

export async function hapusKelas(req: Request, res: Response) {
  const id: string = req.params.id;
  const conn = await connect();
  await conn.query("DELETE FROM kelas WHERE id = ? ", [id]);
  return res.status(200).json({
    status: 200,
    pesan: "Sukses!!",
  });
}
