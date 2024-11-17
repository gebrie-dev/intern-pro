const express = require("express");
const name = require("./routes/name");
const hobby = require("./routes/hobby");
const dream = require("./routes/dream");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/name", name);
app.use("/hobby", hobby);
app.use("/dream", dream);

// Connection
const port = process.env.PORT || 9002;
app.listen(port, () => console.log(`Listening on port ${port}`));
