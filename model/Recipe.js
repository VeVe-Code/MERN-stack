const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  title: {
    type: String,
    required: true, // <-- Fix: `require` ➤ `required`
  },
  description: {
    type: String,
    required: true, // <-- Fix: `require` ➤ `required`
  },
  ingredients: {
    type: Array, // <-- Better: Use [String] instead of generic `Array`
    required: true, // <-- Fix: `require` ➤ `required`
  },
}, {
  timestamps: true
});

module.exports = mongoose.model("Recipe", RecipeSchema);