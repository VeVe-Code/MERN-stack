let express = require('express')
let recipesController = require('../controller/recipescontroller')
let router =express.Router()
const { body} = require('express-validator');
let errorhandle = require('../middleware/errorhandle')

// get all recipies
router.get('',recipesController.index)
// post single recipies
router.post('',[
    body('title').notEmpty(),
    body('description').notEmpty(),
     body('ingredients').notEmpty().isArray({min:3}),

], errorhandle ,recipesController.store)
// get  single recipies
router.get('/:id',recipesController.show)
//delete single recipies
router.delete('/:id',recipesController.delete)
// patch(update) single recipies
router.patch('/:id',recipesController.update)




module.exports= router;