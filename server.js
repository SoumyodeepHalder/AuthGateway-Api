require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Allow all cross-origin requests 
app.use(cors()); 

// Base Route Integration
app.use('/api', userRoutes);

// Database Connection and Server Startup
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Successfully connected to MongoDB Database.'))
    .catch((error) => console.error('Database connection error:', error.message));

app.listen(PORT, () => {
    console.log(`Server executing live on http://localhost:${PORT}`);
});
