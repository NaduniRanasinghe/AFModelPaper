import React,{Component} from 'react';



class AddCourse extends Component{
    render(){
        return(
            <center>
                <h2>Add Courses</h2>
                <table>
            <form>

                <p>Course name:</p>
                <input
                    type="text" id="cname"
                />
                <p>Course code:</p>
                <input
                    type="text" id="code"
                />
                <p>Course Passmark:</p>
                <input
                    type="number" id="passmark"
                />
                <p>Lecturer in Charge:</p>
                <input
                    type="text" id="lic"
                />
            </form>
                </table>
            </center>
        )
    }


}
export default AddCourse;