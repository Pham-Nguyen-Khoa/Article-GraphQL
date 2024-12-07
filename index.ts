import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
import * as database from "../Artical/config/database"
import Articel from "./models/articel.model";

database.connect();


const app: Express = express();
const port: number | string = process.env.PORT || 3000;



// Rest API
app.get("/articles", async (req: Request, res: Response) => {
    const articels = await Articel.find({
        deleted: false
    })
    
    res.json({
        articles: articels
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});