import dotenv from "dotenv";
import { response } from "express";
import { ANP } from "../Models/ANP.js";

dotenv.config();

export class ANPController{
    getANP = async(req, res) => {
        try{
            const anp = await ANP.findAll({
                attributes : { exclude : ["id"]}
            })
            res.status(200).json(anp);
        }catch(e){
            console.log(e)
            return res.status(400).json(false, "ERROR :c", e.message);
        }
    };

    getANPById = async(req, res) => {
        try{
            const {id} = req.params;
            const apn = await ANP.findByPk(id)
            res.json(apn)
        }catch(e){
            console.log(e)
            return res.status(400).json(false, "ERROR :c", e.message);
        }
    };


    postANP = async(req, res) => {
        try{
            const{
                nombre, descripcion, precio, imagen
            } = req.body;
            const anp = await ANP.create({
                nombre,
                descripcion,
                precio,
                imagen
            });
            return res.status(200).json(true, "ANP Posteada", {nombre, descripcion, precio, imagen}).res();
        }catch(e){
            console.log(e)
            return res.status(400).json(false, "ERROR :c", e.message);
        }
    }
}