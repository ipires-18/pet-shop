const express = require("express")
const cors = require("cors")

const server = express();

server.use(express.json());
server.use(cors());






server.listen(3333, () => {
  console.log("Server started on port 3333");
});