const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Hello !")
})

const PORT = 3333;
app.listen(PORT, () =>console.log(`Server ir running on Port ${PORT}`));