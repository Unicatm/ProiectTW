const { DataTypes } = require("sequelize");
const db = require("../database");
const User = require("./User");
const Livrabil = require("./Livrabil");

const Note = db.define(
  "Note",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    nota: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idLivrabil: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Livrabil,
        key: "id",
      },
    },
  },
  {
    tableName: "Note",
    timestamps: false,
  }
);

module.exports = Note;
