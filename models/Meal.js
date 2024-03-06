const mongoose = require('mongoose');
const validator = require('validator');

const databaseString = process.env.DB.replace(
  '<password>',
  process.env.DB_PASS
);

mongoose
  .connect(databaseString)
  .then(() => console.log('Connected to database...'));

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
    type: String,
    required: true
  },
  creator_email: {
    type: String,
    required: true,
    validate: validator.isEmail
  }
});

const Meal = mongoose.models.Meal || mongoose.model('Meal', mealSchema);

module.exports = Meal;
