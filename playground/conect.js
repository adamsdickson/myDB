const {MongoClient, ObjectID} = require("mongodb")      ;





MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
    if(err){
       return console.log("unable to connect to the DB server")
    }

    console.log("connected to database");

    db.collection('Todos').insertOne({
        text:"Do Nodejs",
        text2:"call Dad",
        compelet:false
    },(err,result)=>{
        if(err){
            return ("unable to coonect",err)
        }
        console.log(result.ops[0]._id.getTimestamp());

    });

    db.close();

});