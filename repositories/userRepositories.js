import User from "../models/userModels.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";



const getByID = async (req, res) => {
    const { id } = req.params;

    try {
        const userDB = await User.findOne({ where: { id: id } });
        res.status(201).json({ success: true, data: userDB });
    } catch (error) {
        res.status(400).json({ 
            success: false, data: { message: error.message } 
        });
    }
}

const createUser = async (req, res) => {
    const user = req.body;

    try {
        const userDB = await User.create(user);
        res.status(201).json({ success: true, data: userDB }); 
    } catch (error) {
        res.status(400).json({ 
            success: false, data: { message: error.message } 
        });
    }
}

const alterUser = async (req, res) => {
    const { id } = req.params;
    const newData = req.body;

    try {
        const userDB = await User.update(newData, { where: { id: id } });
        res.status(201).json({ success: true, data: userDB });
    } catch (error) {
        res.status(400).json({ 
            success: false, data: { message: error.message } 
        });
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const userDB = await User.destroy({ where: { id: id } });
        res.status(201).json({ success: true, data: userDB });
    } catch (error) {
        res.status(400).json({ 
            success: false, data: { message: error.message } 
        });
    }
}

const getAll = async (req, res) => {
    console.log(res.locals);
    
    try {
        const userDB = await User.findAll();
        res.status(201).json({ success: true, data: userDB });
    } catch (error) {
        res.status(400).json({ 
            success: false, data: { message: error.message } 
        });
    }
}

const Token = async (req, res) => {
    const { email, password } = req.body;
   

    if (!req.is("application/json") || !email || !password) {
        return res.status(400).json({ 
            message: "Dados da requisição incorretos" 
        });
    }

    try {
        const userDB = await User.findOne({ where: { email: email } });
        if (!userDB) {
            return res.status(400).json({ 
                message: "Email ou senha incorretos" 
            });
        }

        const isPasswordValid = await bcrypt.compare(password, userDB.password);

        if (!isPasswordValid) {
            return res.status(400).json({ 
                message: "Email ou senha incorretos" 
            });
        }

        const token = jwt.sign(
            { id: userDB.id, email: userDB.email },
            process.env.JWT_SECRET || "sua_chave_secreta",
            { expiresIn: "1h" }
        );

        return res.status(200).json({
            token: token
        });

    } catch (error) {
        return res.status(400).json({ 
            message: error.message 
        });
    }

}

export {
    createUser,
    getAll,
    getByID,
    alterUser,
    deleteUser,
    Token
}