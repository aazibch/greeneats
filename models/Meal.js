const mongoose = require('mongoose');
require('./User');

const mealSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  instructions: {
    type: String,
    required: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Meal = mongoose.models.Meal || mongoose.model('Meal', mealSchema);

module.exports = Meal;
