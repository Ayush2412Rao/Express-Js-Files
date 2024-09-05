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
            firstname : "Harsh",
            lastname  : "Rao",
            DOB : new Date("2004/12/24"),
            password : "harshRao"
        });
        const result = await App.save();
        console.log(result);
    }
    catch(err)
    {
        console.log(err);
    }
};
// AppDocument();

const getDocument = async ()=>{
    try{
        const result = await AppModel.find({password : "ayushRao"}).select({name:1});
        console.log(result);
    }
    catch(err)
    {
        console.log(err);
    }
}
getDocument();

