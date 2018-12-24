const {MongoClient, ObjectID} = require("mongodb")      ;





MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
    if(err){
       return console.log("unable to connect to the DB server")
    }

    console.log("connected to database");

    db.collection('Todos').find({text2:"call Dad"}).count().then((docs)=>{
        console.log(docs);
    });
     db.close();

});