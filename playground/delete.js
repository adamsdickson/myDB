const {MongoClient, ObjectID} = require("mongodb")      ;





MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
    if(err){
       return console.log("unable to connect to the DB server")
    }

    console.log("connected to database");

    // db.collection('Todos').deleteOne({text:"Do Nodejs"});

     db.collection("Users").findOneAndDelete({_id:new ObjectID("5c20ded9dd3eba45185e6c12")}).then((k)=>(
         console.log(k)
     ));

    // db.close();

});