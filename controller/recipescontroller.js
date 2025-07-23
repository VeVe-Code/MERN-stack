const { updateWith } = require("lodash")

let recipesController = {

    index: (req,res) => {
         return res.json ({msg : "get all recipes"})
    },
    store: (req,res) => {
         return res.json ({msg : "store recipes"})
    },
    show:(req,res) => {
         return res.json ({msg : "show recipes"})
    },
    
    delete:(req,res) => {
         return res.json ({msg : "delete recipes"})
    },
     update:(req,res) => {
         return res.json ({msg : "update recipes"})
    }
    

}

module.exports = recipesController