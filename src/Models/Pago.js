import {Model, DataTypes } from 'sequelize';
import { sequelize } from '../Config/sequelize.js';

export class Pago extends Model {}


Pago.init(
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            unique: true,
            field: "id"
        },
        total: {
            type: DataTypes.STRING(20),
            field: "total"
        },
        cantidad_boletos: {
            type: DataTypes.STRING(500),
            field: "cantidad_boletos"
        },
        postulante: {
            type: DataTypes.STRING(500),
            field: "postulante",
            defaultValue : "Cristina"
        }
    },
    {
        sequelize: sequelize, modelName: "pago", timestamps: false
    }
)