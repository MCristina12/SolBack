import dotenv from "dotenv";
import { Boleto } from "../Models/Boleto.js";
import { Pago } from "../Models/Pago.js";

dotenv.config();

export class PagoController{
    postPago = async(req, res) =>{
        try{
            const{
                id_anp, total, cantidad_boletos
            } = req.body;
            const pago = await Pago.create({
                total,
                cantidad_boletos
            });
            const id_pago = await pago.getDataValue("id");
            console.log(id_pago);
            const boleto = await Boleto.create({
                id_anp, id_pago
            });

            return res.status(200).json({pago, boleto});
        }catch(e){
            console.log(e)
            return res.status(400).json(e.message);
        }
    };
    getPagos = async(req, res) =>{
        try{
            const pago = await Pago.findAll({
                exclude : ["id"]
            });
            res.status(200).json(pago)
        }catch(e){
            console.log(e)
            return res.status(400).json(e.message);
        }
    };
    getBoletos = async(req, res) =>{
        try{
            const boleto = await Boleto.findAll({
                exclude : ["id"]
            });
            return res.status(200).json(boleto);
        }catch(e){
            console.log(e);
            return res.status(400).json(e.message);
        }
    };
}