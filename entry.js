const mongoose = require("mongoose");
const bp = require("body-parser");
const app = require("express")();
const cors = require("cors");

const assignmentRoute = require("./routes/assignments");

async function main() {
  await mongoose.connect(process.env.MONGOURI).then(() => {
    console.log("database connected");
  });
}

main();

app.use(cors());

app.use(bp.json());

app.use("", assignmentRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("server listening on port 5000");
});
