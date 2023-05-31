const express = require("express");
const app = express();
const port = 6000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/faker.routes")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
