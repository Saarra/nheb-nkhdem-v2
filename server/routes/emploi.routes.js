const express = require('express')
const{addEmploi} = require("../controllers/emploi.controller")
const{getAllEmplois} = require("../controllers/emploi.controller")

const router = express.Router()

// @desc add new emploi
// @method post
// @req.body
router.post('/add', addEmploi)


// @desc get all emplois
// @method get
router.get('/', getAllEmplois)

module.exports = router 
