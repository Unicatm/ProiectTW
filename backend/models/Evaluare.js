const { DataTypes } = require('sequelize');
const db = require('../database');
const Echipa = require('./Echipa');
const User = require('./User');

const Evaluare = db.define('Evaluare', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idEchipa: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Echipa,
            key: 'idEchipa',
        },
    },
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
}, {
    tableName: 'Evaluare',
    timestamps: false,
});

module.exports = Evaluare;
