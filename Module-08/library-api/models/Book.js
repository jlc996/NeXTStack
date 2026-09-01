// Line 1: Imports the Mongoose ODM library to interact with MongoDB
const mongoose = require('mongoose');


// Line 2: Initializes a new Schema definition for the Book entity
const bookSchema = new mongoose.Schema(
  // Line 3: Opens the configuration object for fixed/core document fields
  {
    // Line 4: Defines the 'title' property configuration
    title: {
      // Line 5: Enforces string data type
      type: String,
      // Line 6: Requires the field and provides a custom validation error message
      required: [true, 'Book title is required'],
      // Line 7: Trims leading and trailing whitespace automatically
      trim: true
    // Line 8: Closes the 'title' field configuration
    },
    // Line 9: Defines the 'author' property configuration
    author: {
      // Line 10: Enforces string data type
      type: String,
      // Line 11: Marks author as mandatory
      required: [true, 'Author is required'],
      // Line 12: Trims whitespace
      trim: true
    // Line 13: Closes the 'author' field configuration
    },
    // Line 14: Defines the 'price' property configuration
    price: {
      // Line 15: Enforces numeric data type
      type: Number,
      // Line 16: Marks price as mandatory
      required: [true, 'Price is required'],
      // Line 17: Prevents negative values with a min boundary validator
      min: [0, 'Price must be positive']
    // Line 18: Closes the 'price' field configuration
    }
  // Line 19: Closes the field object definition
  },
  // Line 20: Opens the Mongoose schema options object
  {
    // Line 21: Automatically creates and updates 'createdAt' and 'updatedAt' fields
    timestamps: true,
    // Line 22: Allows dynamic, undeclared key/value pairs to be saved to MongoDB
    strict: false
  // Line 23: Closes schema options
  }
// Line 24: Closes Schema instantiation
);


// Line 25: Compiles the schema into a Model and exports it for application use
module.exports = mongoose.model('Book', bookSchema);
