import {Model, DataTypes } from 'sequelize';
import { sequelize } from '../Config/sequelize.js';

export class ANP extends Model {}

ANP.init(
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            unique: true,
            field: "id"
        },
        nombre: {
            type: DataTypes.STRING(20),
            field: "nombre"
        },
        descripcion: {
            type: DataTypes.STRING(500),
            field: "descripcion"
        },
        precio: {
            type: DataTypes.STRING(500),
            field: "precio"
        },
        imagen: {
            type: DataTypes.STRING(500),
            field: "imagen"
        },
    },
    {
        sequelize: sequelize, modelName: "anp", timestamps: false
    }
)