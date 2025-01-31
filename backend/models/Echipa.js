const { DataTypes } = require('sequelize');
const db = require('../database');

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
}, {
    tableName: 'echipa',
    timestamps: false,
});

module.exports = Echipa;
