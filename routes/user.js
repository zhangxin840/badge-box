var router = require('express').Router();

router.get('/', function (req, res, next) {
    res.render('user/dashboard', { currentTime: new Date() });
});

module.exports = router;
