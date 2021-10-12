const express = require('express')
const router = express.Router()
const { addContactus, getAllContactus, deleteContactus } = require('../controllers/contactus.controller')


// @desc add new contactus
// @method post
// @req.body
router.post('/', addContactus)


// @desc get all contactus
// @method get
router.get('/', getAllContactus)


// @desc delete contactus
// @method delete
// @req.params

router.delete('/:ID', deleteContactus)

module.exports = router 
