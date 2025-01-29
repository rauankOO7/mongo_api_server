import "dotenv/config";
import  express from "express"
import mongoose from "mongoose"

import router from "./routes/dataRouter.js";

const app = express();
const port = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/",(req,res)=>{
    res.send("Hey from server!")
})

app.use("/data",router);

mongoose
  .connect(process.env.MONGODB_URI)
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