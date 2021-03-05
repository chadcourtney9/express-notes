
const express = require("express");
const apiR = require("./routes/apiroutes");
const htmlR = require("./routes/htmlroutes");
const PORT = process.env.PORT || 3001;
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", apiR)
app.use("/", htmlR)


app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});