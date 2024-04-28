import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import emailRoute from "./routes/emailRoute.js";
import userRoute from "./routes/userRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Define your routes here
app.use("/emails", emailRoute);
app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
