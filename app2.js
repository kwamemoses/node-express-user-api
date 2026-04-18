const express = require("express");
const app = express();

app.use(express.json());

// Dataset
let users = [
    { id: 1, name: "Moses" },
    { id: 2, name: "John" },
    { id: 3, name: "Sarah" },
     { id: 4, name: "kwame" },
     { id: 5, name: "Adom" },
    { id: 6, name: "Sarah" },
     { id: 7, name: "Gifty" },
     { id: 8, name: "Micheal" }
];

// GET all users
app.get("/api/users", (req, res) => {
    res.json(users);
});

// SEARCH users (query params)
app.get("/api/users/search", (req, res) => {
    const { name, id } = req.query;

    let result = users;

    if (name) {
        result = result.filter(u =>
            u.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    if (id) {
        result = result.filter(u =>
            u.id === parseInt(id)
        );
    }

    res.json(result);
});

// GET one user
app.get("/api/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);

    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.json({ message: "User not found" });
    }

    res.json(user);
});

// CREATE user
app.post("/api/users", (req, res) => {
    if (!req.body.name) {
        return res.json({ message: "Name is required" });
    }

    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };

    users.push(newUser);

    res.json(newUser);
});

// DELETE user
app.delete("/api/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);

    const index = users.findIndex(u => u.id === userId);

    if (index === -1) {
        return res.json({ message: "User not found" });
    }

    const deletedUser = users.splice(index, 1);

    res.json({
        message: "User deleted",
        user: deletedUser[0]
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
