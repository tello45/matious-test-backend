const mongoose = require("mongoose");

const Row = new mongoose.Schema(
  {
    'Invoice ID': { type: String, required: false, default: "" },
    Branch: { type: String, required: false, default: "" },
    'Customer type': { type: String, required: false, default: "" },
    Gender: { type: String, required: false, default: "" },
    'Product line': { type: String, required: false, default: "" },
    'Unit price': { type: String, required: false, default: "" },
    Quantity: { type: String, required: false, default: "" },
    'Tax 5%': { type: String, required: false, default: "" },
    Total: { type: String, required: false, default: "" },
    Date: { type: String, required: false, default: "" },
    Time: { type: String, required: false, default: "" },
    Payment: { type: String, required: false, default: "" },
    cogs: { type: String, required: false, default: "" },
    'gross margin percentage': { type: String, required: false, default: "" },
    'gross income': { type: String, required: false, default: "" },
    Rating: { type: String, required: false, default: "" },
    
  },
  {
    versionKey: false,
    timestamps: true,
    id: true,
    //toJSON,
  }
);

module.exports = mongoose.model("Row", Row);
