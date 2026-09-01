// Loads environment variables from a local .env file into
process.env
require('dotenv').config();

// Import Express framework to handle routing and HTTP
//servers
const express = require('express');
// Import Mongoose library to interact with MongoDB
const mongoose = require('mongoose');

// Import the Book model to interact with the 'books'
//collection in MongoDB
const Book = require('./models/Book');

// Initialize the Express app
const app = express();
// Sets the application port from environment variables or
//defaults to 3000 if not specified.
// 5000 is the default port for many development servers, but
// 3000 is commonly used for Node.js applications.
const PORT = process.env.PORT || 3000;

// Extract the MongoDB connection URI from environment
// variables.This URI is used to connect to the MongoDB
// database.
const MONGODB_URI = process.env.MONGODB_URI;
// Middleware to parse incoming JSON requests.
// This allows the server to handle JSON payloads in HTTP
//requests, making it easier to work with APIs that send and
//receive JSON data.

app.use(express.json());

// Connect to MongoDB using Mongoose. The connection is
//established using the URI specified in the environment
//variables.
mongoose
    // passes the connection string URI to Mongoose
    .connect(MONGODB_URI)
    // If the connection is successful, log a success message
    //to the console
    .then(() => {
        console.log('✅ Connected to MongoDB');
    })
    // If the connection fails, log an error message to the
    //console
    .catch((error) => {
        console.error('❌ Error connecting to MongoDB:',

            error);

        process.exit(1); // Exit the process with a failure

        code
    });

// Define a route to handle GET requests to the root URL
//('/').
// This route responds with a simple JSON message indicating
//that the API is running.
app.get('/', (req, res) => {
    res.json({ message: 'Library API is running' });
});

// Define a route to handle GET requests to '/books'.
// This route retrieves all books from the database and
//returns them as a JSON response.

app.get('/books', async (req, res) => {
    // open try block for async database operations
    try {
        // Use the Book model to find all books in the

        //database

        const books = await Book.find();
        // Send the retrieved books as a JSON response
        res.status(200).json(books);
    } catch (error) {
        // Return a 500 Internal Server Error response if

        //there is an error fetching books from the database

        console.error('❌ Error fetching books:', error);
        res.status(500).json({
            error: 'Internal Server Error, failed to fetch books'
        });
    }
});

app.get('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // 1. Validate MongoDB ObjectId format first
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        error: `Invalid ID format: '${id}' is not a valid 24-character hexadecimal ObjectId.`
      });
    }

    // 2. Query MongoDB
    const book = await Book.findById(id);

    // 3. Custom 404 Guard Clause when ID does not exist in the collection
    if (!book) {
      return res.status(404).json({
        success: false,
        error: `Book with ID ${id} was not found in our records.`,
        suggestion: 'Please verify the ID or fetch all books at GET /books to inspect valid records.'
      });
    }

    // 4. Return document if found
    res.status(200).json({
      success: true,
      data: book
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server Error while retrieving book.'
    });
  }
});

// Registers a POST route to handle the creation of new books
//in the database.
app.post('/books', async (req, res) => {
    // open try block for async database operations
    try {
        // Destructure the title, author, and price from the
        //request body.These fields are expected to be sent in the
        //JSON payload of the POST request.

        const { title, author, price, ...otherProperties } =

            req.body;

        // Guard clause to check if any unexpected properties
        //are present in the request body.If there are, return a 400
        //Bad Request response with an error message.

        if (!title || !author || price === undefined || price

            < 0 || Object.keys(otherProperties).length > 0) {

            return res.status(400).json({
                error: 'Invalid book data.Ensure title, author, and price are provided and valid.'
            });
        }
        // Create a new book instance using the Book model
        //and the validated data with core and dynamic properties.
        const newBook = await Book.create({
            title,

            author, price, ...otherProperties
        });

        // Send a 201 Created response with the newly created

        //book as JSON.

        res.status(201).json(newBook);
    } catch (error) {
        // Return a 500 Internal Server Error response if
        //there is an error creating the book in the database
        console.error('❌ Error creating book:', error);
        res.status(500).json({
            error: 'Internal Server Error, failed to create book'
        });
    }
});

// Registers a PATCH route to handle updates to existing
//books in the database.
app.patch('/books/:id', async (req, res) => {
    // open try block for async database operations
    try {
        // Extracts the document ID from URL parameter
        const { id } = req.params;
        // Captures new or modified fields sent in the
        //request body.These fields will be used to update the
        //existing book document.

        const updates = req.body;
        // Validates that the ID matched the 24-character hex

        //MongoDB ObjectId format.

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                error: 'Invalid book ID format'
            });

        }

        // Finds record by ID and applies updates using the

        //atomic $set operator

        const updatedBook = await Book.findByIdAndUpdate(
            // target document id
            id,
            // apply updates to the document
            { $set: updates },
            // options: return the updated document and run

            //validators on the update

            { new: true, runValidators: true }
        );

        // check if the book was found and updated. If not,

        //return a 404 Not Found response.
        if (!updatedBook) {
            return res.status(404).json({
                error: 'Book with ID ${ id } not found'
            });

        }
        // Send a 200 OK response with the updated book as

        JSON.

            res.status(200).json({
                message: 'Book updated successfully',
                book: updatedBook
            });
    } catch (error) {
        // Return a 500 Internal Server Error response if
        //there is an error updating the book in the database
        console.error('❌ Error updating book:', error);

        res.status(500).json({
            error: 'Internal Server Error, failed to update book'
        });
    }
});

// Registers a DELETE route to handle the deletion of books
//from the database.
app.delete('/books/:id', async (req, res) => {
    // open try block for async database operations
    try {
        // Extracts the document ID from URL parameter
        const { id } = req.params;
        // Validates that the ID matched the 24-character hex

        //MongoDB ObjectId format.

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                error: 'Invalid book ID format'
            });

        }

        // Finds record by ID and deletes it from the

        //database

        const deletedBook = await Book.findByIdAndDelete(id);

        // check if the book was found and deleted. If not,

        //return a 404 Not Found response.
        if (!deletedBook) {
            return res.status(404).json({
                error: 'Book with ID ${ id } not found'
            });

        }
        // Send a 200 OK response with the deleted book as

        JSON.

            res.status(200).json({

                message: 'Book with ID ${id} deleted successfully',

                book: deletedBook
            });
    } catch (error) {
        // Return a 500 Internal Server Error response if
        //there is an error deleting the book from the database
        console.error('❌ Error deleting book:', error);
        res.status(500).json({
            error: 'Internal Server Error, failed to delete book'
        });
    }
});

// Binds server to port and starts listening for incoming
//HTTP requests.
app.listen(PORT, () => {
    console.log(`🚀 Server is running on
http://localhost:${PORT}`);
});

// CRUD Operations
// Create (POST)
// Read (GET)
// Update (PATCH)
// Delete (DELETE)