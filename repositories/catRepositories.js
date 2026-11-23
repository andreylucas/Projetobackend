import Categories from "../models/catModels.js";


const getCatByID = async (req, res) => {
    const { id } = req.params;

    try {
        const catDB = await Categories.findOne({ where: { id: id } });
        res.status(201).json({ success: true, data: catDB });
    } catch (error) {
        res.status(400).json({ 
            success: false, data: { message: error.message}  })
    }
}


const createCat = async (req, res) => {
    const user = req.body;

    try {
        const catDB = await Categories.create(user);
        res.status(201).json({ success: true, data: catDB }); 
    } catch (error) {
           res.status(400).json({ 
            success: false, data: { message: error.message} 
        });
    }
}

const alterCat = async (req, res) => {
    const { id } = req.params
    const newData = req.body

    try {
        const userDB = await Categories.update(newData, { where: { id: id } });
        res.status(201).json({ success: true, data: userDB });
    } catch (error) {
        res.status(400).json({ 
            success: false, data: { message: error.message}  })
    }
}

const deleteCat = async (req, res) => {
    const { id } = req.params

    try {
        const userDB = await Categories.destroy({ where: { id: id } });
         res.status(201).json({ success: true, data: userDB });
    } catch (error) {
       res.status(400).json({ 
            success: false, data: { message: error.message} })
    }
}


const getCatAll = async (req, res) => {
    console.log(res.locals);
    
    try {
        const userDB = await Categories.findAll();
         res.status(201).json({ success: true, data: userDB });
    } catch (error) {
       res.status(400).json({ 
            success: false, data: { message: error.message}  })
    }
}



export {
    createCat,
    getCatAll,
    getCatByID,
    alterCat,
    deleteCat,
}