	// Dependencies
	const express = require('express');
	const app = express();
	const port = process.env.PORT || 3000;
	
	
	app.listen(port, ()=> {
		console.log(`BIA : I am listening on port: ${port}`);
});