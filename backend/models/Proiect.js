const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');
const Echipa = require('./Echipa');

const Proiect = db.define('Proiect', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titlu: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    descriere: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    idEchipa: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Echipa,
            key: 'idEchipa',
        },
    },
}, {
    timestamps: false,
    tableName: 'proiect',
});

module.exports = Proiect;
