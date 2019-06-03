
import React,{Component} from 'react';
import AddCourse from "./components/AddCourseForm";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Courses from "./components/Courses";

class App extends Component {
  render(){
    return (
        <Router>
            <Route path="/courses" exact component={Courses}/>
            <Route path="/create" exact component={AddCourse}/>


        <div className="App">
            <center><h3>SLIIT WEB</h3></center>
        </div>
        </Router>
    );
  }
}

export default App;
