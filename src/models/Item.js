const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Item', itemSchema);
