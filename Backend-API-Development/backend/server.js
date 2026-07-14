const express = require("express");

const app = express();

app.use(express.json());

let users = [
  {
    id: 1,
    name: "Piyush",
    email: "piyush@example.com"
  },
  {
    id: 2,
    name: "Rahul",
    email: "rahul@example.com"
  }
];

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 Backend API is Running Successfully!");
});

// Get All Users
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// Add User
app.post("/users", (req, res) => {

  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and Email are required."
    });
  }

  // Check duplicate email
  const existingUser = users.find(
    (user) => user.email === email
  );

  if (existingUser) {
    return res.status(409).json({
      message: "Email already exists."
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);

  res.status(201).json({
    message: "User added successfully!",
    user: newUser
  });

});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});