const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/App")
.then(()=>{
    console.log("Connected");
}).catch((err)=>{
    console.log("Not Connected");
    console.log(err);
});

const AppSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    DOB : {
        type : Date,
        required : true
    },
    password : {
        type : String,
        required : true,
        select : false
    }

});

const AppModel = new mongoose.model("AppModel",AppSchema);

const AppDocument = async () => {
    try{
        const App = new AppModel({
            firstname : "Ayush",
            lastname  : "Rao",
            DOB : new Date("2003/12/24"),
            password : "ayushRao"
        });
        const result = await App.save();
        console.log(result);
    }
    catch(err)
    {
        console.log(err);
    }
};
AppDocument();

