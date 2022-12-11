import express from "express";
import morgan from "morgan";
import cors from "cors";
import { sequelize } from "./sequelize.js";
import dotenv from "dotenv"
import { anpRouter } from "../Routes/ANP.js";
import { pagoRouter } from "../Routes/Pago.js";

dotenv.config();

export default class Server{
    app;
    port = "";

    constructor(){
        this.app = express();
        this.port = process.env.PORT || "8000";
        this.useMiddleWares();
        this.routes();
    }

    useMiddleWares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(morgan("dev"));
    }

    routes(){
        this.app.get("/")
        this.app.use(anpRouter)
        this.app.use(pagoRouter)
    }

    start() {
        this.app.listen(this.port, async () => {
           console.log("Servidor corriendo exitosamente");
           try {
              await sequelize.sync();
              console.log("Base de datos sincronizada");
           } catch (e) {
              console.error(e.message)
           }
        })
    }
}