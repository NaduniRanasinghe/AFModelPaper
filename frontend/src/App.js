
import React,{Component} from 'react';
import AddCourse from "./components/AddCourseForm";
import {BrowserRouter as Router, Route,Switch,Link} from "react-router-dom";
import CoursesList from "./components/Courses";

class App extends Component {
  render(){
    return (
        <Router>
            <div className="App">
                <center><h3>SLIIT WEB</h3></center>
            </div>

            <Switch>
                <ul>
                    <li>
                        <Link to="/courses">Courses</Link></li>
                    <li> <Link to="/create">Add Course</Link></li></ul>


            </Switch>

            <Route path="/courses" exact component={CoursesList}/>
            <Route path="/create" exact component={AddCourse}/>



        </Router>
    );
  }
}

export default App;
