// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for capturing Searchs. We'll use SearchID to update the same SearchCounter
var SearchSchema = new Schema({
    searchQuery: {
        type: String
    }
});

// Create the Model
var Search = mongoose.model("Search", SearchSchema);

// Export it for use elsewhere
module.exports = Search;