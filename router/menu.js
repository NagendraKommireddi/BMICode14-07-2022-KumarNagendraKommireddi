const router = require('express').Router();
const bmiConstructor = require('./../controller/menu');

router.get('/', function (req, res, next) {
    bmiConstructor
    .getallBmiDetails()
    .then((data) => {
      res.locals.data = data;
      next();
    })
    .catch((err) => {
      console.log('Error', err);
      next(err);
    });
});

router.get('/overweightcount', function (req, res, next) {
    bmiConstructor
    .getoverWeightBmiCount()
    .then((data) => {
      res.locals.data = data;
      next();
    })
    .catch((err) => {
      console.log('Error', err);
      next(err);
    });
});

router.post('/add',function(req,res,next){
    console.log(req.headers);
    bmiConstructor
    .calculateNewBmi(req.body,req.headers)
    .then((data) => {
      res.locals.data = data;
      next();
    })
    .catch((err) => {
      console.log('Error', err);
      next(err);
    });
})

module.exports = router;