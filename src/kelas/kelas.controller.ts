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
