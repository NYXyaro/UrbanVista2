const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
const mapRoutes = require("./routes/map");
const chartRoutes = require("./routes/charts");
const contactRoutes = require("./routes/contact");

app.use("/api/map", mapRoutes);
app.use("/api/charts", chartRoutes);
app.use("/api/contact", contactRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
