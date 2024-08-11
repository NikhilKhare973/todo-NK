const express = require("express");
const mongoose = require('mongoose'); 
const app = express();
const cors = require("cors");
require("./conn/conn"); 
const path = require("path");
const auth = require("./routes/auth");
const list = require("./routes/list");
app.use(express.json());
app.use(cors());

const DB = 'mongodb+srv://nikhilkhare212:Nikhil123@cluster0.gv4ygej.mongodb.net/';

mongoose.connect(DB, {
    useCreateIndex: true, 
   useFindAndModify: false, 
   useNewUrlParser: true, 
   useUnifiedTopology: true 
}).then(() =>{
    console.log(`connection successful`);
}).catch((err) => console.log(err));

app.get("/", (req,res)  => {
    res.json("Hello");
});

                                      

app.use("/api/v1", auth);
app.use("/api/v2", list);


const app = express()
app.use(cors({
        origin: ["https://todo-nk-frontend.vercel.app/"],
        methods: ["POST","GET"],
        credentials: true
    }));
    app.use(express.json());
    
    app.get("/", (req, res) => {
        app.use(express.static(path.resolve(__dirname, "frontend", "build")));
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
    });
    
app.listen(1000, () => {
    console.log("Server started");
});
