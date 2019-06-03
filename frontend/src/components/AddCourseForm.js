import React,{Component} from 'react';
import axios from 'axios';



class AddCourse extends Component{

    constructor(props){
       super(props);

       this.onChangeCourseName = this.onChangeCourseName.bind(this);
       this.onChangeCourseCode=this.onChangeCourseCode.bind(this);
       this.onChangeCourseAmount=this.onChangeCourseAmount.bind(this);
       this.onChangeCourseLic=this.onChangeCourseLic.bind(this);
       this.onSubmit=this.onSubmit.bind(this);

       this.state ={
           course_name:'',
           course_code:'',
           course_number:0.0,
           course_lic:''
       }
    }


    onChangeCourseName(e){
        this.setState({
            course_name :e.target.value
        });

    }

    onChangeCourseCode(e){
        this.setState({
            course_code:e.target.value
        });

    }

    onChangeCourseAmount(e){
        this.setState({
            course_amount:e.target.value
        });

    }

    onChangeCourseLic(e){
        this.setState({
            course_lic:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();


        //
        // console.log('Form Submitted:');
        // console.log('Name'+ this.state.course_name);
        // console.log('Code'+ this.state.course_code);
        // console.log('Amount'+ this.state.course_amount);

        const newCourse ={
            course_name:this.state.course_name,
            course_code:this.state.course_code,
            course_amount:this.state.course_amount,
            course_lic:this.state.course_lic
        }

        axios.post('http://localhost:4000/courses/add',newCourse)
            .then(res=> console.log(res.data));

        this.setState({
            course_name:'',
            course_code:'',
            course_number:0,
            course_lic:''
        })

    }
    render(){
        return(
            <center>
                <h2>Add Courses</h2>

            <form onSubmit={this.onSubmit}>

                <p>Course name:</p>
                <input
                    type="text" id="cname" value={this.state.course_name}
                    onChange={this.onChangeCourseName}
                />
                <p>Course code:</p>
                <input
                    type="text" id="code"value={this.state.course_code}
                    onChange={this.onChangeCourseCode}
                />
                <p>Course Passmark:</p>
                <input
                    type="number" id="passmark" value={this.state.course_amount}
                    onChange={this.onChangeCourseAmount}
                />
                <p>Lecturer in Charge:</p>
                <input
                    type="text" id="lic" value={this.state.course_lic}
                    onChange={this.onChangeCourseLic}
                />
                <br/><br/>
                <input
                    type="submit" id="submit" value="Submit"
                />
            </form>

            </center>
        )
    }


}
export default AddCourse;