const config = require("../config/auth.config");
const db = require("../models");

const Emploi = db.emploi;


exports.addEmploi = async(req, res) => {
    const { titre, desc, salaire, horaire, adresse, lien} = req.body

    try {
        const newEmploi = new Emploi({
            titre, desc, salaire, horaire, adresse, lien
        })

        await newEmploi.save()
        res.status(200).send({msg:"emploi added",newEmploi})
    } catch (error) {
        res.status(500).send({msg:"impossible to add emploi",error})
    }
}

exports.getAllEmplois = async(req, res) => {
    try {
        const emplois = await Emploi.find() 
        res.status(200).send({msg: 'All Emplois', emplois})
    } catch (error) {
        res.status(500).send({msg:"impossible to get emplois",error})
    }
}