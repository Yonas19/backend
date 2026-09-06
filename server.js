const express = require("express");
const app = express();
const port = 3009;

app.get("/", (req, res) => {
  res.json({
    name: "Task API",
    version: "1.0",
    endpoints: ["/tasks"],
  });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
