import "dotenv/config";
import  express from "express"
import mongoose from "mongoose"

import router from "./routes/dataRouter.js";

const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/",(req,res)=>{
    res.send("Hey from server!")
})

app.use("/data",router);

mongoose
  .connect("mongodb+srv://raunakraj6377:gWuJ79AM9GbzwE1d@cluster0.i2gyy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("MongoDB connected");
    // Start the server
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error", err);
  });