const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));