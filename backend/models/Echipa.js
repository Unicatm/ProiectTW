const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');
const User = require('./User');

const Echipa = db.define('Echipa', {
    idEchipa: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nume: {
        type: DataTypes.STRING,
        allowNull: false,
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
    timestamps: false,
    tableName: 'echipa',
});

module.exports = Echipa;
