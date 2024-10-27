import express from "express";
import bodyParser from "body-parser";
//import redisClient from "../config/redis.js";
import messageQueue from "../config/bull.js";

const router = express.Router();
router.use(bodyParser.json());

router.post("/bookEvent", async (req, res) => {
  const { name, email, theatreName, movieName, seatNumbers } = req.body;

  // await redisClient.set(name, email);
  console.log("redis lo value set chesam");

  let value = await redisClient.get(name);
  console.log("redis nundi techam value", value);

  //await redisClient.del(name);
  console.log("redis nundi delete chesam");

  // value = await redisClient.get(name);
  console.log("redis nundi malli techam value null", value);

  messageQueue.add({
    name: name,
    email: email,
    theatreName: theatreName,
    movieName: movieName,
    seatNumbers: seatNumbers,
  });

  res.status(200).send("Message Queued. You will receive email shortly");
});

export default router;
