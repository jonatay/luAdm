const express = require('express');
const router = express.Router();

const {employeesController, nitAuthLogController} = require('./controllers');

let controllers = {
  'employees': employeesController,
  'nitAuthLog': nitAuthLogController
}

//  ** route for /:resource **
router.get('/:resource', function (req, res, next) {
  let resource = req.params.resource;
  let controller = controllers[resource]
  if (controller == null) {
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource Request'
    })
    return
  }

  controller.get(req.query, function (err, results) {
    if (err) { // something went wrong
      res.json({
        confirmation: 'fail',
        message: err
      })
      return
    }
    res.json({
      confirmation: 'success',
      results: results
    })
    return
  })
});



module.exports = router;

