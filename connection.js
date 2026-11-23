import { Sequelize } from 'sequelize';

const sequelize = new Sequelize( {
    host: 'localhost',  
    dialect: 'sqlite',
    storage: './database.sqlite'
});

async function connect() {
    try {
        await sequelize.sync();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export {
    sequelize,
    connect
}