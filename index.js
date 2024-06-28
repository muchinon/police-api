import express from "express";
import 'dotenv/config'
import { dbConnection } from "./config/db.js";

import statementRouter from "./routes/statement.js";

const app = express();

dbConnection()

app.use(express.json())

app.use(statementRouter);




app.listen(5151, () => {
    console.log("Police api is listening")
});