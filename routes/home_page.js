const express = require('express');
const router = express.Router();
// const db = require('../db')
const HomeController = require('../controllers/HomeController');
// router.get('/', (req, res) => {
//     db.any("select * from casts;")
//         .then(e => {
//             // console.log(e);
//             res.json(e);
//         })
//         .catch(err => { console.log(err) })
// })

router.get('/', HomeController.index);
router.get('/movies/:id', HomeController.getOne);
router.post('/search', HomeController.search);
router.get('/search', HomeController.search);
router.get('/search/:title', HomeController.search);

module.exports = router;