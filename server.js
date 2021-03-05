
const express = require("express").Router();
const app = express();
const apiR = require("./routes/apiroutes");
const htmlR = require("./routes/htmlroutes");
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//changes?

require(htmlR)(app);
require(apiR)(app);

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});