const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://bsy17171:bsy95989598@myfirst-back-end.hehnv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((e) => console.log(e));
mongoose.Promise = global.Promise;

app.get("/", (req, res) => res.send("hello Wolrd_ FUCK CHINA"));
app.listen(port, () => console.log(`Example app listening on port ${port}`));
