const app = require("./bin/configExpress");
const https = require("https").Server(app);
const port = process.env.port || 8080;
const address = process.env.ip || "127.0.0.1";


https.listen(port,address, function() {
    console.log(`Server running on ${address}:${port}`);
});