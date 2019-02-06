const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const courtSchema = new Schema({
  sport: {
    type: String,
    enum: ['basketball','football','tennis']
  },
  location: { // location field follows the GeoJSON pattern
    type: { 
      type: String, 
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: {
      type: [Number],
      required: true,
    }
  }
});

const Court = mongoose.model('Court', courtSchema);
module.exports = Court;
