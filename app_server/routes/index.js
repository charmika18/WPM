var express = require('express');
var router = express.Router();
var ctrllocation = require('../controller/location');
var ctrlothers = require('../controller/others');

/* GET Locations page */
router.get('/', ctrllocation.homeList);
router.get('/location', ctrllocation.locationInfo);
router.get('/location/review/new', ctrllocation.addReview);

/*GET others page */
router.get('/about', ctrlothers.about);


module.exports = router;