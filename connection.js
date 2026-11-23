import { Sequelize } from 'sequelize';

const sequelize = new Sequelize( {
    host: 'localhost',  
    dialect: 'sqlite',
    storage: './database.sqlite'
});



export {
    sequelize,
    }