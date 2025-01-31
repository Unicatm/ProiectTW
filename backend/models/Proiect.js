const { DataTypes } = require('sequelize');
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
        allowNull: false,
    },
    descriere: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    idEchipa: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Echipa,
            key: 'idEchipa',
        },
    },
}, {
    tableName: 'proiect',
    timestamps: false,
});

module.exports = Proiect;
