const { DataTypes } = require('sequelize');
const db = require('../database');
const Proiect = require('./Proiect');

const Livrabil = db.define('Livrabil', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titlu: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descriere: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    idProiect: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Proiect,
            key: 'id',
        },
    },
}, {
    tableName: 'livrabil',
    timestamps: false,
});

module.exports = Livrabil;
