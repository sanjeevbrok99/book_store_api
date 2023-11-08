import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });
import connectDB from "./config/db.js";
import logger from "morgan";
import colors from "colors";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();
connectDB();
app.use(express.json({ extended: false }));
app.use(logger("dev"));

app.use("/books",bookRoutes);
app.get("/", (req, res) => {
  res.send("Hello, This is Book Managment Store server!");
});
// Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(
        `API is listening on PORT: ${PORT} in ${process.env.NODE_ENV} mode`
        .underline.green.bold
          
      );
}); 