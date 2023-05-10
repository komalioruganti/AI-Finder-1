const express = require("express");
const router = require("./routes/aiToolsRoutes");
const app = express();
const cors = require("cors");
const connectDB = require("./db");

connectDB();
// app.use(
//   cors({
//     origin:"https://main--elaborate-eclair-6eb7bd.netlify.app",
//     // origin:"http://localhost:5173",
//     credentials: true,
//   })
// );
app.use(cors());
app.use("/api", router);

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
