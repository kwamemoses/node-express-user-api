const express = require("express");
const app = express();

app.use(express.json());

// USERS API

let users = [
    { id: 1, name: "Moses" },
    { id: 2, name: "John" },
    { id: 3, name: "Sarah" }
];

// GET all users
app.get("/api/users", (req, res) => {
    res.json(users);
});

// SEARCH users
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


//BUILDING TASKS API 

let tasks = [
    { id: 1, title: "Study Node.js" },
    { id: 2, title: "Build API" }
];

// GET all tasks
app.get("/api/tasks", (req, res) => {
    res.json(tasks);
});

// SEARCH tasks
app.get("/api/tasks/search", (req, res) => {
    const title = req.query.title;

    if (!title) {
        return res.json({ message: "Please provide a title" });
    }

    const result = tasks.filter(t =>
        t.title.toLowerCase().includes(title.toLowerCase())
    );

    res.json(result);
});

// CREATE task
app.post("/api/tasks", (req, res) => {
    if (!req.body.title) {
        return res.json({ message: "Title is required" });
    }

    const newTask = {
        id: tasks.length + 1,
        title: req.body.title
    };

    tasks.push(newTask);

    res.json(newTask);
});

// DELETE task
app.delete("/api/tasks/:id", (req, res) => {
    const taskId = parseInt(req.params.id);

    const index = tasks.findIndex(t => t.id === taskId);

    if (index === -1) {
        return res.json({ message: "Task not found" });
    }

    const deletedTask = tasks.splice(index, 1);

    res.json({
        message: "Task deleted",
        task: deletedTask[0]
    });
});


// BUILDING STUDENTS API

let students = [
    { id: 1, name: "Moses Kwame Mensah" },
    { id: 2, name: "Atiapa Samuel" },
    { id: 3, name: "Adom Bempong Franklin" }
];

// GET all students
app.get("/api/students", (req, res) => {
    res.json(students);
});

// SEARCH students
app.get("/api/students/search", (req, res) => {
    const name = req.query.name;

    if (!name) {
        return res.json({ message: "Please provide a name" });
    }

    const result = students.filter(s =>
        s.name.toLowerCase().includes(name.toLowerCase())
    );

    res.json(result);
});

// CREATE student
app.post("/api/students", (req, res) => {
    if (!req.body.name) {
        return res.json({ message: "Name is required" });
    }

    const newStudent = {
        id: students.length + 1,
        name: req.body.name
    };

    students.push(newStudent);

    res.json(newStudent);
});

// DELETE student
app.delete("/api/students/:id", (req, res) => {
    const studentId = parseInt(req.params.id);

    const index = students.findIndex(s => s.id === studentId);

    if (index === -1) {
        return res.json({ message: "Student not found" });
    }

    const deletedStudent = students.splice(index, 1);

    res.json({
        message: "Student deleted",
        student: deletedStudent[0]
    });
});


//BUILDING  PRODUCTS API

let products = [
    { id: 1, name: "Soap" },
    { id: 2, name: "Mobile Phone" },
    { id: 3, name: "Bag" }
];

// GET all products
app.get("/api/products", (req, res) => {
    res.json(products);
});

// SEARCH products
app.get("/api/products/search", (req, res) => {
    const name = req.query.name;

    if (!name) {
        return res.json({ message: "Please provide a name" });
    }

    const result = products.filter(p =>
        p.name.toLowerCase().includes(name.toLowerCase())
    );

    res.json(result);
});

// CREATE product
app.post("/api/products", (req, res) => {
    if (!req.body.name) {
        return res.json({ message: "Name is required" });
    }

    const newProduct = {
        id: products.length + 1,
        name: req.body.name
    };

    products.push(newProduct);

    res.json(newProduct);
});

// DELETE product
app.delete("/api/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);

    const index = products.findIndex(p => p.id === productId);

    if (index === -1) {
        return res.json({ message: "Product not found" });
    }

    const deletedProduct = products.splice(index, 1);

    res.json({
        message: "Product deleted",
        product: deletedProduct[0]
    });
});


//SERVER

app.listen(5000, () => {
    console.log("Server running on port 5000");
});