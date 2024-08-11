const mongoose = require("mongoose");

const conn = async (req, res) => {
    try {
        await mongoose
            .connect("mongodb+srv://nikhilkhare212:Nikhil123@cluster0.gv4ygej.mongodb.net/")
            .then(() =>{
                console.log("Connected");
            });
    } 
    catch (error) {
        ({
            message: "Not Connected",
        });
    } 
  
      
   
};
conn();


// 