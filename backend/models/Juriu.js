const { DataTypes } = require('sequelize');
const db = require('../database');

const Juriu = db.define('Juriu', {
    idJuriu: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
}, {
    tableName: 'juriu',
    timestamps: false,
});

module.exports = Juriu;
