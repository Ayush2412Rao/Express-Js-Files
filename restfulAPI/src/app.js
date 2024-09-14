const express = require("express");
const app = express();
const port = process.env.PORT || 3020;
require("./database/connection");
const Student = require("./models/students");

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hey");
});

app.post("/students",(req,res)=>{
    console.log(req.body);
    const user = new Student(req.body);
    user.save();
    res.send("Hello from the students How are you?");
});

app.get("/students",async (req,res)=>{
    const result = await Student.find();
    res.send(result);
});

app.get("/students/:id",async (req,res)=>{
    try{
        const id = await req.params.id;
        const result = await Student.findById(id);
        if(!result)
        {
            res.status(404).send();
        }
        else{
            res.send(result);
        }
    }
    catch(err)
    {
        res.status(404).send(err);
    }
});

// app.get("students/name/:name",async (req,res)=>{
//     try{
//         const name = req.params.name;
//         const result = await Student.findOne({name:name});
//         if(!result)
//         {
//             res.status(404).send();
//         }
//         else
//         {
//             res.status(200).send(result);
//         }
//     }
//     catch(err)
//     {
//         res.send(err);
//     }
// });

app.delete("/students/:id",async (req,res)=>{
    try{
        const id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(id);
        if(!id)
        {
            return res.status(400).send();
        }
        res.send(deletedStudent);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
});

app.patch("/students/:id",async (req,res)=>{
    try{
        const id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(id,req.body);
        if(!id)
        {
            return req.status(400).send();
        }
        //req.status(200).send(updateStudent);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
})

app.listen(port,()=>{
    console.log(`The connection is running at ${port}`);
});