import { Router } from "express";
import { PagoController } from "../Controllers/Pago.js";

export const pagoRouter = Router();
const pago = new PagoController;

pagoRouter.route("/getPagos").get(pago.getPagos);
pagoRouter.route("/postPago").post(pago.postPago);
pagoRouter.route("/getBoletos").get(pago.getBoletos);