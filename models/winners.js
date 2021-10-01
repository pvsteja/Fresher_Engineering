const mongoose = require("mongoose");
// mongoose.set('useCreateIndex', true)

const winnerSchema = new mongoose.Schema({
  year: {
    type: String,
  },
  category: {
    type: String,
  },
  overallMotivation: {
      type: String,
  },
  id: {
    type: String,
  },
  firstname: {
    type: String,
  
  },
  surname: {
    type: String,
  
  },
  motivation: {
    type: String,
  
  },
  share: {
    type: String,
  
  }
});

module.exports = mongoose.model("Winner", winnerSchema);