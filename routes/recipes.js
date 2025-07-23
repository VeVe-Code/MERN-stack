let express = require('express')
let recipesController = require('../controller/recipescontroller')
let router =express.Router()

// get all recipies
router.get('',recipesController.index)
// post single recipies
router.post('',recipesController.store)
// get  single recipies
router.get('/:id',recipesController.show)
//delete single recipies
router.delete('/:id',recipesController.delete)
// patch(update) single recipies
router.patch('/:id',recipesController.update)




module.exports= router;