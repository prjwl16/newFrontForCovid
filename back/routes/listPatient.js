var express = require('express')
var router = express.Router()

const { SearchPatients } = require("../controllers/searchByNumber")
const { listAllPatients,trying } = require('../controllers/listAll')

router.post("/searchpatients", SearchPatients)
router.get("/listpatients",listAllPatients)
router.get("/tiii",trying)
module.exports = router