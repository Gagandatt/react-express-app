const express = require("express")
const path = require("path")
const app = express()
const PORT = process.env.PORT || 5000
app.get("/", (req, res) => {
    res.send("hello from root side")
})

app.use(express.static(path.resolve(__dirname, 'build')))
app.get("/api", (req, res) => {
    res.json(
        {
            "employees": [
                { "name": "Shyam", "email": "shyamjaiswal@gmail.com" },
                { "name": "Bob", "email": "bob32@gmail.com" },
                { "name": "Jai", "email": "jai87@gmail.com" }
            ]
        }
    )
})
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
})