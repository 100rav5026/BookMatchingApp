const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/BookDB');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

mongoose.set('strictQuery', false);

const BookAppUserDetailsSchema = new mongoose.Schema({
  userGenreSelected: String,
  userPagesSelected: Number
});

const BookAppBookDetailsSchema = new mongoose.Schema({
  Score: Number,
  BookSelectedDetails: [{Genre: String, Pages: Number}]
});

const BookAppUser = mongoose.model("BookAppUser",BookAppUserDetailsSchema);
const BookSelectedDetails = mongoose.model("BookSelectedDetails",BookAppBookDetailsSchema);

// app.get('/', (req, res) => {
  
// });

app.post('/', (req, res) => {
  let userGenre = req.body.selectedValueGenre;
  let userPages = req.body.selectedValuePages;

  const userDetails = new BookAppUser({
    userGenreSelected: userGenre,
    userPagesSelected: userPages
  });

  BookSelectedDetails.find({},function(err, bookDetails){
    if (err) {
      console.log(err);
    } else {
      console.log(bookDetails[1].BookSelectedDetails[0].Genre);
    }
  });

  userDetails.save();
});

app.listen(8000, () => {
  console.log('Server is running on port 8000.');
});
