const { DataTypes } = require('sequelize');
const db = require('../database');
const Juriu = require('./Juriu');
const Echipa = require('./Echipa');

const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nume: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    parola: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: false, // "student" sau "profesor"
    },
    idEchipa: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Echipa,
            key: 'idEchipa',
        },
    },
    idJuriu: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Juriu,
            key: 'idJuriu',
        },
    },
}, {
    tableName: 'user',
    timestamps: false,
});

module.exports = User;
