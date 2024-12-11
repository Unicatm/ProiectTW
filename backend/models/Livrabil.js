const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');
const Proiect = require('./Proiect');

const Livrabil = db.define('Livrabil', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idProiect: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Proiect,
            key: 'id',
        },
    },
    titlu: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descriere: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    linkVideo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    timestamps: false,
    tableName: 'livrabil',
});

module.exports = Livrabil;
