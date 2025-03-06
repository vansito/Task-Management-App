const express = require("express");
const app = express();

app.use(express.json());


let items = [
    {
      id: 1,
      name: "Item 1",
    },
    {
      id: 2,
      name: "Item 2",
    },
    {
      id: 3,
      name: "Item 3",
    },
    {
      id: 4,
      name: "Item 4",
    },
  ];


  //GET ALL ITEMS
  app.get("/items", (req, res) => {
    res.json(items);
  });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));