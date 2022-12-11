import { Router } from "express";
import { ANPController } from "../Controllers/ANP.js";

export const anpRouter = Router();
const anp = new ANPController;

anpRouter.route("/anp").get(anp.getANP);
anpRouter.route("/anp").post(anp.postANP);