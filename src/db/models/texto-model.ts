import { Model, DataTypes } from "sequelize";
import connection from "./connection";

class Texto extends Model {
  public id: number;

  public name: string;

  public createdAt: Date;

  public updatedAt: Date;
}

Texto.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'O campo "name" é obrigatório',
        },
        notEmpty: {
          msg: 'O campo "name" é obrigatório',
        },
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
  },
  { sequelize: connection, tableName: "Texto" }
);


export default Texto;
