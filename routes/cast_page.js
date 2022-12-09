const express = require('express');
const router = express.Router();
// const db = require('../db')
const CastController = require('../controllers/CastController');
// router.get('/', (req, res) => {
//     db.any("select * from casts;")
//         .then(e => {
//             // console.log(e);
//             res.json(e);
//         })
//         .catch(err => { console.log(err) })
// })

router.get('/', CastController.index);

module.exports = router;