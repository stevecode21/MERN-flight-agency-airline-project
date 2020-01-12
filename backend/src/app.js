const express = require('express');
const cors = require('cors')
const app = express()

// settings
app.set('port', process.env.PORT || 4000);

//middlewares

app.use(cors())
app.use(express.json());

//routes
app.use('/api/users', require('./routes/users'))
app.use('/api/destinations', require('./routes/destinations.router'))
app.use('/api/quote/', require('./routes/quote.router'))
app.use('/api/flightprice', require('./routes/fligthPrice.router'))
app.use('/api/estimate', require('./routes/estimate.router'))
app.use('/api/hotelplan', require('./routes/hotelplan.router'))
app.use('/api/touristplan', require('./routes/touristPlan.router'))
app.use('/api/flight', require('./routes/flight.router'))
app.use('/api/extras', require('./routes/extra.router'))
app.use('/api/comboplan', require('./routes/comboPlan.router'))


module.exports = app;