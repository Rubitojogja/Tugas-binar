var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');//require dependencies mongoose

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var articlesRouter = require('./routes/articles');

var app = express();

//set Data Base connection
var mongo_db_url ='mongodb+srv://rubito:m3kanikisuzu@company-website-db-iam0p.mongodb.net/test?retryWrites=true&w=majority'; //url database
mongoose.connect(mongo_db_url,{useNewUrlParser:true,useUnifiedTopology:true
}); //connect to database

var db = mongoose.connection; //create object db
db.on('error', console.error.bind(console,'connetion error:'));
db.once('open', function(){
  console.log('Succes connect to database Yeay!')
});
//testing connection


// mongoose example
//schema

//dipindahke models/cat
// var kittySchema = new mongoose.Schema({
//   name: String,
//   age:{ 
//         type: Number,
//         min: [2, 'Kucingnya terlalu muda'],
//         max:[5, 'Melampaui batas maksimum umur yang ditentukan'],
//         required: true
//         }
// });

//define method into schema
// kittySchema.methods.hello = function(){
//   let teks = `Hello my name ${this.name}, and i'am ${this.age} y.o, miaow`
//   console.log(teks);
// }


//model
// const Cat = mongoose.model('Cat', kittySchema);
//set data into model
// const kitty = new Cat({ name: 'Harchi' , age: 4});

//call method
// kitty.hello()


//dipindah ke model/cat
// kitty.save(function(err, kitty){   //error handling
//   if (err){
//     console.log(err);
//   }else{
//     kitty.hello();
//   }
// });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/articles', articlesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
