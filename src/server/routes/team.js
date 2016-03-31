var router = require('express').Router();

router.get('/', function (req, res, next) {
    res.render('team/dashboard', { currentTime: new Date() });
});

module.exports = router;
