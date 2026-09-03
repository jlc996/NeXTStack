require('dotenv').config();
const dns = require('dns');
const express = require('express');
const mongoose = require('mongoose');
const Game = require('./models/Game');

// Bypass restrictive DNS resolvers for Atlas SRV lookups
dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Global Middleware to parse incoming JSON payloads
app.use(express.json());

// Database Connection Lifecycle
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => {
    console.error('❌ Database Connection Error:', err.message);
    process.exit(1);
  });

// 1. Root Health Check
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Retro Games Library API is active.'
  });
});

// 2. Fetch All Games with Query Filtering
// GET /api/games?platform=NES&genre=Platformer
app.get('/api/games', async (req, res, next) => {
  try {
    const { platform, genre, developer, releaseYear, completed } = req.query;
    const filter = {};

    if (platform) {
      filter.platform = platform;
    }

    if (genre) {
      filter.genre = genre;
    }

    if (developer) {
      filter.developer = developer;
    }

    if (releaseYear) {
      filter.releaseYear = Number(releaseYear);
    }

    if (completed !== undefined) {
      filter.completed = completed === 'true';
    }

    const games = await Game.find(filter);

    res.status(200).json({
      success: true,
      count: games.length,
      data: games
    });
  } catch (err) {
    next(err);
  }
});

// 3. Dynamic Single Resource Lookup
// GET /api/games/:id
app.get('/api/games/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const game = await Game.findById(id);

    if (!game) {
      return res.status(404).json({
        success: false,
        error: 'Game not found.'
      });
    }

    res.status(200).json({
      success: true,
      data: game
    });
  } catch (err) {
    next(err);
  }
});

// 4. Create New Game
// POST /api/games
app.post('/api/games', async (req, res, next) => {
  try {
    const {
      title,
      platform,
      releaseYear,
      genre,
      developer,
      publisher,
      rating,
      completed
    } = req.body;

    if (!title || !platform || !releaseYear || !genre || !developer) {
      return res.status(400).json({
        success: false,
        error:
          'title, platform, releaseYear, genre, and developer are required.'
      });
    }

    const newGame = await Game.create({
      title,
      platform,
      releaseYear,
      genre,
      developer,
      publisher,
      rating,
      completed: completed !== undefined ? completed : false
    });

    res.status(201).json({
      success: true,
      data: newGame
    });
  } catch (err) {
    next(err);
  }
});

// 5. Update Game
// PATCH /api/games/:id
app.patch('/api/games/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid MongoDB ObjectId format.'
      });
    }

    const updatedGame = await Game.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!updatedGame) {
      return res.status(404).json({
        success: false,
        error: `Game with ID ${id} not found.`
      });
    }

    res.status(200).json({
      success: true,
      message: 'Game properties updated successfully.',
      data: updatedGame
    });
  } catch (err) {
    next(err);
  }
});

// 6. Delete Game Record
// DELETE /api/games/:id
// app.delete('/api/games/:id', async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({
//         success: false,
//         error: 'Invalid MongoDB ObjectId format.'
//       });
//     }

//     const deletedGame = await Game.findByIdAndDelete(id);

//     if (!deletedGame) {
//       return res.status(404).json({
//         success: false,
//         error: `Game with ID ${id} not found.`
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: `Game ${id} permanently deleted.`,
//       deletedRecord: deletedGame
//     });
//   } catch (err) {
//     next(err);
//   }
// });

// app.delete('/api/games/:title', async (req, res) => {
//   try {
//     const game = await Game.findOneAndDelete({
//       title: req.params.title
//     });

//     if (!game) {
//       return res.status(404).json({
//         message: 'Game not found'
//       });
//     }

//     res.json({
//       message: 'Game deleted successfully',
//       game
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message
//     });
//   }
// });

// 6. Delete Game Record
// DELETE /api/games/:id
app.delete('/api/games/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    let deletedGame;

    // Delete by MongoDB ObjectId
    if (mongoose.Types.ObjectId.isValid(id)) {
      deletedGame = await Game.findByIdAndDelete(id);
    } else {
      // Delete by game title
      deletedGame = await Game.findOneAndDelete({
        title: id
      });
    }

    if (!deletedGame) {
      return res.status(404).json({
        success: false,
        error: `Game "${id}" not found.`
      });
    }

    res.status(200).json({
      success: true,
      message: `Game "${deletedGame.title}" permanently deleted.`,
      deletedRecord: deletedGame
    });
  } catch (err) {
    next(err);
  }
});

// Centralized 4-Argument Error Middleware
app.use((err, req, res, next) => {
  console.error(
    'Server Internal Error:',
    err.stack || err.message
  );

  res.status(500).json({
    success: false,
    error: 'Internal Server Error',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(
    `🚀 Retro Games Server listening on http://localhost:${PORT}`
  );
});
