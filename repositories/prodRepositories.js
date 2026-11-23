import Products from "../models/prodModels.js";



const getProdByID = async (req, res) => {
    const { id } = req.params;

    try {
        const catDB = await Products.findOne({ where: { id: id } });
        res.status(201).json({ success: true, data: catDB });
    } catch (error) {
        res.status(400).json({ 
            success: false, data: { message: error.message}  })
    }
}


const createProd = async (req, res) => {
    const prod = req.body;

    try {
        const prodDB = await Products.create(prod);
        res.status(201).json({ success: true, data: prodDB }); 
    } catch (error) {
           res.status(400).json({ 
            success: false, data: { message: error.message} 
        });
    }
}

const alterProd = async (req, res) => {
    const { id } = req.params
    const newData = req.body

    try {
        const prodDB = await Products.update(newData, { where: { id: id } });
        res.status(201).json({ success: true, data: prodDB });
    } catch (error) {
        res.status(400).json({ 
            success: false, data: { message: error.message}  })
    }
}

const deleteProd = async (req, res) => {
    const { id } = req.params

    try {
        const prodDB = await Products.destroy({ where: { id: id } });
         res.status(201).json({ success: true, data: prodDB });
    } catch (error) {
       res.status(400).json({ 
            success: false, data: { message: error.message} })
    }
}


const getProdAll = async (req, res) => {
    console.log(res.locals);
    
    try {
        const prodDB = await Products.findAll();
         res.status(201).json({ success: true, data: prodDB });
    } catch (error) {
       res.status(400).json({ 
            success: false, data: { message: error.message}  })
    }
}



export {
    createProd,
    getProdAll,
    getProdByID,
    alterProd,
    deleteProd,
}