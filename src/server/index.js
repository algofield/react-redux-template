const express = require('express');
const cors = require('cors');
const path = require('path');
// const fs = require('fs');
// const http2Express = require('http2-express-bridge')
// const http2 = require('http2')
// const dev = process.env.NODE_ENV !== 'production';
app = express();
const port = parseInt(process.env.PORT, 10) || 3000;
// const options = {
//   key: fs.readFileSync(path.join(__dirname, '/privateKey.key')),
//   cert: fs.readFileSync(path.join(__dirname, '/certificate.crt')),
//   // allowHTTP1: true
// };
// only change required
// const app = http2Express(express)
app.use(cors());
app.use(express.static('dist'));
// const server = http2.createSecureServer(options, app)
// server.listen(3000)
app.listen(port, e => e ? console.error(e) : console.log(`Server launched on localhost:${port}`))
