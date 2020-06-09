enum JK {
  L = "Laki - Laki",
  P = "Perempuan",
}

export interface Siswa {
  nis: string;
  nama: string;
  alamat: string;
  jk: JK;
  kelas_id: number;
}
