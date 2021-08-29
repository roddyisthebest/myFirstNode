const express = require("express");
const app = express();
const port = 5000;
const { User } = require("./models/User");
const config = require("./config/key");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongoose = require("mongoose");

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((e) => console.log(e));
mongoose.Promise = global.Promise;

app.get("/", (req, res) => res.send("hello Wolrd_ FUCK CHINA AND TANgasd"));

app.post("/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
