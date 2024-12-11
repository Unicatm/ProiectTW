const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');
const User = require('./User');

const Permisiuni = db.define('Permisiuni', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
    canEvaluate: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
}, {
    timestamps: false,
    tableName: 'permisiuni',
});

module.exports = Permisiuni;
