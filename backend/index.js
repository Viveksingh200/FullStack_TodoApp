import express, {json} from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";
import cors from "cors";
import TodoRoute from "./routes/todoRoutes.js"

const app = express();
dotenv.config();
connectDB();

app.get("/" , (req, res) => {
    res.send("server is running");
});

//middleware
app.use(cors());
app.use(json());

//routes
app.use("/api/todos", TodoRoute);

app.listen(5000, () => {
    console.log("port 5000")
})
