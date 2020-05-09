var express = require('express');
var router = express.Router();

/* GET user listing. */
router.get('/', function(req, res, next) {
    //res.send('Hello from Kurts Flower Shop');
    res.render('kurtsflowershop', { title: 'Kurts Flower Shop'})
});

/* GET users listing. */
router.get('/help', fucnction(req, res, next) {
    //res.send('Hello from Kurts Flower Shop');
    res.render('kurtshelp', { title: 'Kurts Flower Shop'})
})

/* GET users listing. */
router.get('/register', function(req, res, next) {
    //res.send('Hello from Kurts Flower Shop');
    res.render('kurtsregister', { title: 'Kurts Flower Shop'})
})

router.get('/about', function(req, res, next) {
    //res.send('Hello from Kurts Flower Shop');
    res.render('kurtsabout', { title: 'Kurts Flower Shop'})
})

module.exports = router;