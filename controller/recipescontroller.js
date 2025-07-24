const Recipe = require("../model/Recipe");
let mongoose = require('mongoose')

let recipesController = {

     index: async (req, res) => {
          let recipes = await Recipe.find().sort({ createdAt: -1 });
          return res.json(recipes)
     },
     store: async (req, res) => {

          let { title, description, ingredients } = req.body;

          let recipe = await Recipe.create({
               title,
               description,
               ingredients
          })

          return res.json(recipe)
     }

     ,
     show: async (req, res) => {
          try {
               let id = req.params.id;
               if(!mongoose.Types.ObjectId.isValid(id)){
                     return res.status(400).json({ msg: "invaild id" })
               }
               let recipe = await Recipe.findById(id)
               if(!recipe) {
                    return res.status(404).json({ msg: "Recipe not found" })
               }
               return res.json(recipe)
          } catch (e) {
               return res.status(500).json({ msg: "internet server error" })
          }
     },

     delete: async(req, res) => {
       try {
               let id = req.params.id;
               if(!mongoose.Types.ObjectId.isValid(id)){
                     return res.status(400).json({ msg: "invaild id" })
               }
               let recipe = await Recipe.findByIdAndDelete(id)
               if(!recipe) {
                    return res.status(404).json({ msg: "Recipe not found" })
               }
               return res.json(recipe)
          } catch (e) {
               return res.status(500).json({ msg: "internet server error" })
          }
     },
     update: async(req, res) => {
           try {
               let id = req.params.id;
               if(!mongoose.Types.ObjectId.isValid(id)){
                     return res.status(400).json({ msg: "invaild id" })
               }
               let recipe = await Recipe.findByIdAndUpdate(id,{
                    ...req.body
               })
               if(!recipe) {
                    return res.status(404).json({ msg: "Recipe not found" })
               }
               return res.json(recipe)
          } catch (e) {
               return res.status(500).json({ msg: "internet server error" })
          }
     }


}

module.exports = recipesController