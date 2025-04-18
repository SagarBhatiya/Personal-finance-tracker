import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/FinanceTrackerDb');

const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);
});

db.on('open', () => {
    console.log('Connected to database');
});

export default db;
