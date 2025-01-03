const ex = require("express");
const StudentRoute = ex.Router();
const studentModel = require("../model/Student");

//Get method
StudentRoute.get("/", (req,res)=>{

    studentModel.find()
    .then((response)=>{
        // console.log(res);
        return res.json({
            "status": 200,
            "message":"Data retrieved",
            "response": response
        })
    })
    .catch((e)=>{
        console.log(e);
    })

})


//Post method
StudentRoute.post("/", (req,res)=>{

    let student = req.body;

    if(student.name == null){
        throw new "Name is null";
    }

    studentModel.create(student)
    .then((response)=>{
        return res.json({
            "status": 201,
            "message":"Data saved",
            "response": response
        })
    })
    .catch((e)=>{
        console.log(e);
    })

})

//Get By ID
StudentRoute.get("/:id",(req,res)=>{

    let id = req.params.id;

    studentModel.findById(id)
    .then((response)=>{
        // console.log(res);
        return res.json({
            "status": 200,
            "message":"Data retrieved",
            "response": response
        })
    })
    .catch((e)=>{
        console.log(e);
    })

})


//Update
StudentRoute.put("/:id",(req,res)=>{

    let id = req.params.id;
    let student = req.body;

    studentModel.findByIdAndUpdate(id,student)
    .then((response)=>{
        return res.json({
            "status": 200,
            "message":"Data updated",
            "response": response
        })
    })
    .catch((e)=>{
        console.log(e);
    })

})


//Delete
StudentRoute.delete("/:id",(req,res)=>{

    let id = req.params.id;

    studentModel.findByIdAndDelete(id)
    .then((response)=>{
        return res.json({
            "status": 200,
            "message":"",
            "response": response
        })
    })
    .catch((e)=>{
        console.log(e);
    })

})

module.exports = StudentRoute;