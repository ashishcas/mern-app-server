const express = require('express');

const app = express();

const mongoose = require('mongoose');

const cors = require('cors');

const  PORT = process.env.port || 4000;

const routes = require('./routes');

// mongoose - nodejs library  database connection

// 

const DB_URL = 'mongodb+srv://admin:admin@cluster0.yh0wg.mongodb.net/todo?retryWrites=true&w=majority';

try {
	mongoose.connect(DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true
	});

	console.log('Database connected succesfully');
} catch(error){
	console.log(error);
}

app.use(cors()); // cross-origin-resource sharing 

app.use(express.json());

app.use(routes);


app.listen(PORT,()=> {
    console.log(`listening to the port ${PORT}`);
});


// we will connect backend to database

// we will expose one route  www.facebook.com/register 

// backend api to register the user 