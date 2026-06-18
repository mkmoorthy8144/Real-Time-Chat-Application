const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static("public"));

let messages = [];

app.get("/messages", (req, res) => {
    res.status(200).json(messages);
});

app.post("/messages", (req, res) => {

    const { message } = req.body;

    messages.push({
        id: Date.now(),
        message
    });

    res.status(201).json({
        msg: "Message Sent"
    });
});

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});