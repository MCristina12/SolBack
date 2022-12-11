import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

/*export const sequelize = new Sequelize(
    'postgres', 'postulante', 'solucionatica2022', 
    {
        host : 'reclutamiento-instance-1.cgcdn4lykdst.us-east-1.rds.amazonaws.com',
        dialect : 'postgres'
    }
);*/

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    dialectOptions:
       process.env.NODE_ENV != "production"
          ? { decimalNumbers: true }
          : {
             ssl: { require: true, rejectUnauthorized: false },
             decimalNumbers: true,
          },
    timezone: "-05:00",
    logging: false
 });