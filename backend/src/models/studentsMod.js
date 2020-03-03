const Sequelize = require('sequelize');
const db = require('../../database/db');


module.exports = db.sequelize.define(
    'students',
    {
        student_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        post_id: {
            type: Sequelize.INTEGER,
            references: {
                model: posts,
                key: 'post_id'
            }
        },
        first_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        contact: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        location: {
            type: Sequelize.STRING,
            allowNull: false
        },
        age: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        education: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
);