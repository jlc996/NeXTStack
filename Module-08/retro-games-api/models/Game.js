const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Game title is required"],
      trim: true,
    },

    platform: {
      type: String,
      required: [true, "Platform is required"],
      trim: true,
    },

    releaseYear: {
      type: Number,
      required: [true, "Release year is required"],
      min: [1950, "Release year must be valid"],
    },

    genre: {
      type: String,
      required: [true, "Genre is required"],
      trim: true,
    },

    developer: {
      type: String,
      required: [true, "Developer is required"],
      trim: true,
    },

    publisher: {
      type: String,
      trim: true,
    },

    rating: {
      type: Number,
      min: [0, "Rating cannot be less than 0"],
      max: [10, "Rating cannot be greater than 10"],
    },

    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;