import "dotenv/config";
import express, { json } from "express";
import { petsRoutes } from "./routes/petsRoutes";
import { sequelize } from "./config/database";

const app = express();
const port = 3000;

app.use(json())
app.use(petsRoutes) 

sequelize.sync({force: true}).then(()=>{
  console.log("Database is synced")
  app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
})