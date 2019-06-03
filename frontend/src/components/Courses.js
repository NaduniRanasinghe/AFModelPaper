import React, {Component} from 'react';
import './courses.css';

import axios from 'axios';


const Course = props =>(
    <tr>
        <td>{props.course.course_name}</td>
        <td>{props.course.course_code}</td>
        <td>{props.course.course_passmark}</td>
        <td>{props.course.course_lic}</td>
    </tr>
)



class CoursesList extends Component{


    //create constructor
    constructor(props){
     super(props);

     this.state ={courses: []};

 }

 //request backend to list items
 componentDidMount() {
        axios.get('http://localhost:4000/courses')
            .then(res =>{
                this.setState({courses:res.data});
            })
            .catch(function(e){
                console.log(e);
            })
 }

    render(){
        return(

<center>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Code</th>
                    <th>Amount</th>
                    <th>Lecturer</th>
                </tr>
                </thead>
                <tbody>
                {this.courseList()}
                </tbody>

            </table>
</center>



        )
}

    courseList() {
        return this.state.courses.map(function(currentCourse,i){
            return <Course course ={currentCourse} key ={i}/>;
        });
    }
}

export default CoursesList;