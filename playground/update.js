const {MongoClient, ObjectID} = require("mongodb")      ;





MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
    if(err){
       return console.log("unable to connect to the DB server")
    }

    console.log("connected to database");


     db.collection("Users").findOneAndUpdate({_id:new ObjectID("5c20df2a365e8d467c2020a4")},{
        $set:{
            name:"Diskson Adams"
        }
     },
     {
         returnOriginal:true
     }).then((k)=>(
         console.log(k)
     ));

    // db.close();

});