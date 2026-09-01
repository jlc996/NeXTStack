// Line 1: Loads database connection URL from .env[cite: 1, 2]
require('dotenv').config();


// Line 2: Imports Node's built-in file system module to read the seed JSON file[cite: 1]
const fs = require('fs');


// Line 3: Imports Node's path module for cross-platform file path resolution[cite: 1]
const path = require('path');


// Line 4: Imports Mongoose ODM[cite: 1]
const mongoose = require('mongoose');


// Line 5: Imports the Book model to execute database writes[cite: 1]
const Book = require('./models/Book');


// Line 6: Reads connection string from environment variables[cite: 1, 2]
const MONGODB_URI = process.env.MONGODB_URI;


// Line 7: Declares asynchronous function to run the seeding routine[cite: 1]
const seedDatabase = async () => {
  // Line 8: Opens try block for error safety[cite: 1]
  try {
    // Line 9: Logs start of database connection[cite: 1]
    console.log('🔄 Connecting to MongoDB...');
    // Line 10: Connects Mongoose to the MongoDB database[cite: 1]
    await mongoose.connect(MONGODB_URI);
    // Line 11: Logs connection confirmation[cite: 1]
    console.log('✅ Connected to MongoDB');


    // Line 12: Resolves absolute path to seedData.json[cite: 1]
    const seedFilePath = path.join(__dirname, 'seedData.json');
    // Line 13: Reads the raw text content of the file synchronously[cite: 1]
    const rawData = fs.readFileSync(seedFilePath, 'utf-8');
    // Line 14: Parses the JSON string into native JavaScript array of objects[cite: 1]
    const seedBooks = JSON.parse(rawData);


    // Line 15: Clears existing documents from the collection to avoid duplicates[cite: 1]
    const deleted = await Book.deleteMany({});
    // Line 16: Logs count of cleared documents[cite: 1]
    console.log(`🗑️  Purged ${deleted.deletedCount} existing records from books collection`);


    // Line 17: Inserts all seed objects into MongoDB in a single atomic operation[cite: 1]
    const inserted = await Book.insertMany(seedBooks);
    // Line 18: Logs success message with the number of inserted records[cite: 1]
    console.log(`🚀 Seeded ${inserted.length} books into MongoDB successfully!`);


    // Line 19: Closes database connection cleanly[cite: 1]
    await mongoose.connection.close();
    // Line 20: Logs connection close confirmation[cite: 1]
    console.log('🔌 Connection closed');
    // Line 21: Exits Node process with success code 0[cite: 1]
    process.exit(0);
  // Line 22: Catches seeding runtime errors[cite: 1]
  } catch (err) {
    // Line 23: Logs error message to console[cite: 1]
    console.error('❌ Seeding failed:', err.message);
    // Line 24: Checks if the database connection was left open[cite: 1]
    if (mongoose.connection.readyState !== 0) {
      // Line 25: Closes hanging connection[cite: 1]
      await mongoose.connection.close();
    // Line 26: Closes if statement
    }
    // Line 27: Exits Node process with error code 1[cite: 1]
    process.exit(1);
  // Line 28: Closes catch block
  }
// Line 29: Closes seed function
};


// Line 30: Executes the seed runner function[cite: 1]
seedDatabase();
