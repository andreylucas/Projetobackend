import express from 'express';
import router from './routes/route.js';
import { sequelize } from './connection.js';

const app = express();
const port = 3000;


app.use(express.json());
app.use(router);

async function startServer() {
    try {
        await sequelize.sync({ alter: true });
        console.log("Banco de dados SQLite sincronizados com sucesso!");

        app.listen(port, () => {
            console.log(` Servidor rodando na porta ${port}`);
        });
    } catch (error) {
        console.error(" Erro ao sincronizar o banco de dados:", error);
    }
}

startServer();

