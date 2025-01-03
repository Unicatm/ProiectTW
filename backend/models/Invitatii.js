const { DataTypes } = require('sequelize');
const db = require('../database');
const Echipa = require('./Echipa');
const User = require('./User');

const Invitatii = db.define('Invitatii', {
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
    status: {
        type: DataTypes.STRING,
        allowNull: false, // "pending", "accepted", "rejected"
    },
}, {
    tableName: 'invitatii',
    timestamps: false,
});

module.exports = Invitatii;
