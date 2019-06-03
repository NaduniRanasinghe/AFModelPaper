const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());


let Subject = require('./Subject/subject-model');
let Course = require('./Course/course-model');

const subjectRoutes = express.Router();
const courseRoutes = express.Router();


app.use('/subjects', subjectRoutes);
app.use('/courses', courseRoutes);

app.listen(PORT, function () {
    console.log("Server is started at: "+ PORT);
});

mongoose.connect('mongodb://127.0.0.1:27017/sliitWeb', {useNewUrlParser:true});
const connection = mongoose.connection;

connection.once('open',function () {
    console.log("MongoDB is started");
});

subjectRoutes.route('/').get(function (req,res) {
        Subject.find(function(err,subjects) {
        if(err){
            console.log(err)
        }else{
            res.json(subjects);
        }
    });
});

courseRoutes.route('/').get(function (req,res) {
    Course.find(function (err,courses) {
        if(err){
            console.log(err)
        }else{
            res.json(courses);
        }
    });
});

subjectRoutes.route('/add').post(function (req,res) {

    let subject = new Subject(req.body);
    subject.save()
        .then(subject => {
            res.status(200).json({'subject':'subject added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

courseRoutes.route('/add').post(function (req,res) {
    let course = new Course(req.body);
    course.save()
        .then(course => {
            res.status(200).json({'course':'course added successfully'});
        })
        .catch(err =>{
            res.status(400).send('adding course failed')
        });
});