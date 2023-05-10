const mongoose = require("mongoose");

const toolSchema = mongoose.Schema({
  name: { type: String },
  description: { type: String },
  tags: [{ type: String }],
  website: { type: String },
  slug: { type: String },
});

module.exports = mongoose.model("AiTool", toolSchema);
