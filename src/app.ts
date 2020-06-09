import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

// Routes
import KelasRoutes from "./kelas/kelas.routes";
import SiswaRoutes from "./siswa/siswa.routes";

class App {
  app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private routes() {
    this.app.use("/kelas", KelasRoutes);
    this.app.use("/siswa", SiswaRoutes);
  }

  private middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    // this.app.use(cors());
  }

  async listen(): Promise<void> {
    await this.app.listen(3000);
    console.log("Server is running on port 3000");
  }
}

const app = new App();
app.listen();
