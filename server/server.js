require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models");
const cors = require("cors");
const router = require("./routes");
const { errorHandlingMiddleware } = require("./middleware");
const fileUpload = require("express-fileupload");
const path = require("path");

const PORT = process.env.PORT ?? 5001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);
app.use(errorHandlingMiddleware);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
