const express = require('express');
const kue     = require('kue');
const port = process.env.PORT || 9000;
const queue   = kue.createQueue({
	// jobEvents: false,
	redis: process.env.REDIS_URL
});
 
// Application setup. 
const app = express();
app.use(kue.app)
app.listen(port, () => console.log(`Server started on port: ${port}`));
