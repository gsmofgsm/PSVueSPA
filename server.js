const express = require("express");
const app = express();

// this handles all get request, since this is a SPA
app.get("*", (req, res) => {
  res.write("hey there");
  res.end();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
