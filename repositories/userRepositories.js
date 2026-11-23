import User from "../models/userModels.js";


const getByID = async (req, res) => {
    const { id } = req.params;

    try {
        const userDB = await User.findOne({ where: { id: id } });
        res.status(201).json({ success: true, data: userDB });
    } catch (error) {
        res.status(400).json({ 
            success: false, data: { message: error.message}  })
    }
}


const createUser = async (req, res) => {
    const user = req.body;

    try {
        const userDB = await User.create(user);
        res.status(201).json({ success: true, data: userDB }); 
    } catch (error) {
           res.status(400).json({ 
            success: false, data: { message: error.message} 
        });
    }
}

const alterUser = async (req, res) => {
    const { id } = req.params
    const newData = req.body

    try {
        const userDB = await User.update(newData, { where: { id: id } });
        res.status(201).json({ success: true, data: userDB });
    } catch (error) {
        res.status(400).json({ 
            success: false, data: { message: error.message}  })
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params

    try {
        const userDB = await User.destroy({ where: { id: id } });
         res.status(201).json({ success: true, data: userDB });
    } catch (error) {
       res.status(400).json({ 
            success: false, data: { message: error.message} })
    }
}


const getAll = async (req, res) => {
    console.log(res.locals);
    
    try {
        const userDB = await User.findAll();
         res.status(201).json({ success: true, data: userDB });
    } catch (error) {
       res.status(400).json({ 
            success: false, data: { message: error.message}  })
    }
}



export {
    createUser,
    getAll,
    getByID,
    alterUser,
    deleteUser,
   
}