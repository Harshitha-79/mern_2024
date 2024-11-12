const mongoose = require('mongoose');
const mongo_URL ="mongodb+srv://harshitha:1234@cluster0.lxeqm.mongodb.net/"

const connectToMongo =async() =>{
    mongoose.Promise =global.Promise;
    try{
        await mongoose.connect(mongo_URL);
        console.log("connectd to database")
    }catch(error){
        console.error("Failed to connect");
    }
}
const TrainerModel =(()=>{
    const collection_name = 'Trainer';
    const collection
})