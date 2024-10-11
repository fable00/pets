import express from "express";
import { petsRoutes } from "./routes/petsRoutes";

const app = express();
const port = 3000;
app.use(petsRoutes) 


app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
