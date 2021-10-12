const config = require("../config/auth.config");
const db = require("../models");

const Contactus = db.contactus;


exports.addContactus = async(req, res) => {
    const {name, email, msg} = req.body
    try {
        const newContactus = new Contactus({
            name, email, msg
        })
        await newContactus.save()
        res.status(200).send({msg:"newContactus added",newContactus})
    } catch (error) {
        res.status(500).send({msg:"impossible to add newContactus",error})
    }
}


// get all Contactus
exports.getAllContactus = async(req, res) => {
    try {
        const contactus = await Contactus.find() 
        res.status(200).send({msg: 'All Contactus', contactus})
    } catch (error) {
        res.status(500).send({msg:"impossible to get contactus",error})
    }
}

// delete Contactus
exports.deleteContactus = async(req, res) => {
    const {ID} = req.params
    try {
        const contactus = await Contactus.findByIdAndDelete(ID)
        res.status(200).send({msg : 'contactus deleted'})
    } catch (error) {
        res.status(500).send({msg:"impossible to delete contactus",error})
        
    }
}
