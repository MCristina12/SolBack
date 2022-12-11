import {Model, DataTypes } from 'sequelize';
import { sequelize } from '../Config/sequelize.js';
import { ANP } from './ANP.js';
import { Pago } from './Pago.js';

export class Boleto extends Model {}


Boleto.init(
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            unique: true,
            field: "id"
        },
        postulante: {
            type: DataTypes.STRING(500),
            field: "postulante",
            defaultValue : "Cristina"
        }
    },
    {
        sequelize: sequelize, modelName: "boleto", timestamps: false
    }
)

Pago.hasOne(Boleto, {foreignKey: "id", sourceKey: "id"})
Boleto.hasOne(Pago, {foreignKey: "id", sourceKey: "id"})

ANP.hasMany(Boleto, {foreignKey: "id", sourceKey: "id"})
Boleto.hasOne(ANP, {foreignKey: "id", sourceKey: "id"})