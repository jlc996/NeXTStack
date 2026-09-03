require('dotenv').config();

const dns = require('dns');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Game = require('./models/Game');

// Resolve DNS SRV lookups for MongoDB Atlas compatibility
dns.setServers(['8.8.8.8', '8.8.4.4']);

const MONGODB_URI = process.env.MONGODB_URI;

const seedDatabase = async () => {
  try {
    console.log('🔄 Connecting to MongoDB...');

    await mongoose.connect(MONGODB_URI);

    console.log('✅ Connected successfully to MongoDB');

    const seedFilePath = path.join(__dirname, 'seedData.json');
    const rawData = fs.readFileSync(seedFilePath, 'utf-8');
    const seedGames = JSON.parse(rawData);

    const deleted = await Game.deleteMany({});

    console.log(
      `🗑️ Purged ${deleted.deletedCount} existing records from games collection`
    );

    const inserted = await Game.insertMany(seedGames);

    console.log(
      `🚀 Successfully seeded ${inserted.length} games into MongoDB!`
    );

    await mongoose.connection.close();

    console.log('🔌 Database connection closed cleanly');

    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed:', err.message);

    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.close();
    }

    process.exit(1);
  }
};

seedDatabase();