const express    = require('express'),
      bodyParser = require('body-parser'),         
      mongoose   = require('mongoose'),
      morgan     = require('morgan');
      require('dotenv/config')

const app = express();

app.set('port', process.env.PORT || 3000);

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(process.env.DB_CONNECTION, { 
  userNewUrlParse : true,  
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000 }, () => 
  console.log('connected to DB!')
)

//Middlewares 
app.use(morgan('dev'));

//ROUTES
const routes = require('./routes/routes');

app.use('/', routes);

app.listen(app.get('port'), () => {
    console.log('Corriendo en port 3000');
});
