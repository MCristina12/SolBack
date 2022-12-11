import { Router } from "express";
import { ANPController } from "../Controllers/ANP.js";

export const anpRouter = Router();
const anp = new ANPController;

anpRouter.route("/getANPs").get(anp.getANP);
anpRouter.route("/postANP").post(anp.postANP);