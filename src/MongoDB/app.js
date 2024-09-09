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
        select : false,
        validate(value){
            if(value.length<8)
            {
                throw new Error("Password must be atleast 8 characters");
            }
        }
    }

});

const AppModel = new mongoose.model("AppModel",AppSchema);

const createDocument = async () => {
    try{
        const App = new AppModel({
            firstname : "Shivansh",
            lastname  : "Rao",
            DOB : new Date("2004/12/24"),
            password : "786ty"
        });
        const result = await App.save();
        console.log(result);
    }
    catch(err)
    {
        console.log(err);
    }
};
createDocument();

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
// getDocument();

const updateDocument = async (_id) =>{
    try{
        //const objectId = new mongoose.Types.ObjectId(_id);
        const result = await AppModel.findByIdAndUpdate({_id},{
            $set : {lastname: "Singh"},
            new : true,
            useFindAndModify : false
        });
        console.log(result);
    }
    catch(err)
    {
        console.log(err);
    }
};

// updateDocument('66d82411bbd12bda75f153d4');

const deleteDocument = async (_id) =>{
    try{
        const result = await AppModel.findByIdAndDelete({_id});
        console.log(result);
    }
    catch(err)
    {
        console.log(err);
    }
};

// deleteDocument("66d772e8028702a7e20da71e")


