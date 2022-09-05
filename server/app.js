const express = require("express");
const app = express();
const fs = require("fs");
const https = require("https");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(express.json({ limit: "50mb" }));
app.use(cors());

// Database 연결
const db = require("./models");
db();

// Routing 설정
const routes = require("./routes");
app.use("/", routes);

const PORT = process.env.HTTPS_PORT || 4000;

let server;
if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
    const privateKey = fs.readFileSync(__dirname + "/key.pem", "utf8");
    const certificate = fs.readFileSync(__dirname + "/cert.pem", "utf8");
    const credentials = { key: privateKey, cert: certificate };

    server = https.createServer(credentials, app);
    server.listen(PORT, () => console.log("Server is working"))
} else {
    server = app.listen(PORT);
}

module.exports = server;