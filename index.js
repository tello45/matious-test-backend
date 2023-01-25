const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { rowRouter } = require("./src/routes");
const { Row } = require("./src/models");
const bodyParser = require("body-parser");
const { join } = require("path");
const env = require("dotenv");
env.config({ path: join(__dirname, "..", ".env") });

const csv = require("csv-parser");
const fs = require("fs");

mongoose.connect(
  "mongodb+srv://matiousadmin:H2aWS8MgdN1O5hBc@cluster0.2inzdtq.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("Connected to MongoDB");
  }
);

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/api/row", rowRouter);

app.listen(4000, () => {
  console.log("Backend server is running! on port :", 4000);

  /* fs.createReadStream("./csvfile.csv")
    .pipe(csv())
    .on("data", (data) => {
      console.log("Data ", data);
      Row.create(data)
        .then((result) => {
          //console.log("Row saved ", result);
        })
        .catch((error) => {
          console.log("Error :", error);
        });
    })
    .on("end", () => {
      console.log("File saved ");
    }); */
});
