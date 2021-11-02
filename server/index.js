const http = require("http");

require("dotenv").config({});
const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const path = require("path");
const dummyData = require("./dummyData")

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  next();
});

if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static("build"));

  // Express serve up index.html file if it doesn't recognize route
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

app.get("/", function (req, res, next) {
    res.status(200).send({ data: "Beam Api Service" });
});

app.get("/data", (req, res, next) => {
    try {
        return res.status(200).send({data: dummyData});
    } catch (err){
        console.log(err)
        return res.status(500).send({error: '!Oops something went wrong, we are looking at it'})
    }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


const port = normalizePort(process.env.PORT || 5001);
app.set("port", port);

server.listen(port);

server.on("error", onError);
server.on("listening", onListening);


function normalizePort(val) {
  const port = typeof val === "string" ? parseInt(val, 10) : val;
  if (isNaN(port)) return val;
  else if (port >= 0) return port;
  else return false;
}

function onError(error) {
  if (error.syscall !== "listen") throw error;
  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  console.log(`Server started:Listening on ${port}`);
}

module.exports = server;
