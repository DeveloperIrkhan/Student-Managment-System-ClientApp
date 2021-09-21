import React from 'react';
import { StudentResponseModel } from '../Models/Students';
// import { loading } from '../Utilities/Gernal-Utilities';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import 'react-phone-input-2/lib/style.css'
interface Props { }

interface State {
    Student: StudentResponseModel;
    notValid: boolean

}

export class AddStudent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            Student: Object(),
            notValid: false
        };
        this.validationCheck = this.validationCheck.bind(this)
        this.PostStudentdata = this.PostStudentdata.bind(this)
    }

    validationCheck() {
        let Std = this.state.Student;
        if (!(Std.firstName?.length > 0 ||
            Std.lastName?.length > 0 ||
            Std.phoneNo?.length > 0 ||
            Std.registerationNo?.length > 0 ||
            Std.address?.length > 0 ||
            Std.department?.length > 0)) {
            this.setState({ notValid: true }, () => {
                toast.error("Pleae Fill the required Field!!!")

            })
        }
        else {
            this.setState({ notValid: false }, () => {
                this.PostStudentdata();
            })
        }

    }


    async PostStudentdata() {
        try {
            let Student = this.state.Student;

            let API_URL = "https://localhost:44378/Student/AddStudent";
            // loading(true);
            await axios.post(API_URL, Student)
            Student.firstName = "";
            Student.middleName = "";
            Student.lastName = "";
            Student.phoneNo = "";
            Student.registerationNo = "";
            Student.address = "";
            Student.department = "";
            // loading(false);
            this.setState({ Student }, () => {
                toast.success("Student Details Added Successfully!!!!")
            })

        }
        catch {
            // loading(false);
            toast.error("Error! while adding Student details",
                {
                    autoClose: 5000,
                })
        }
    }
    // componentDidUpdate() {
    //     let student = this.state.Student;
    //     student.firstName = "",
    //     student.middleName = "";
    //     student.lastName = "";
    //     student.registerationNo = "";
    //     student.phoneNo = "";
    //     student.address = "";
    //     student.department = "";
    //     this.setState({Student:student})
    // }

    render() {
        let Student = this.state.Student;
        // let 
        let  notValid  = this.state.notValid;
        console.log("notValid = ", notValid)
        return (
            <div className="py-5 row col-12">
                <ToastContainer />
                <div>
                    <div className="col-lg-5 col-12 m-auto m-0">
                        <h5 className="text-muted" >Please Enter Your Full Name</h5>
                        <div className="Textbox-div">
                            <input className={`${!(Student.firstName?.length>0) && notValid === true ? "RedBorders form-control shadow-none m-2" : "myInput border-3 form-control shadow-none m-2"}`}
                                placeholder="Here Your First Name"
                                type="text"
                                value={Student.firstName}
                                onChange={(e) => {
                                    Student.firstName = e.target.value;
                                    this.setState({ Student })
                                }}
                            />
                        </div>
                        <div className="Textbox-div">
                            <input className="myInput border-3 form-control shadow-none m-2"
                                placeholder="Here Your Middle Name" type="text"
                                value={Student.middleName}
                                onChange={(e) => {
                                    Student.middleName = e.target.value;
                                    this.setState({ Student })
                                }}
                            />
                        </div>
                        <div className="Textbox-div">
                            <input className={`${!(Student.lastName?.length>0) && notValid === true ? "RedBorders form-control shadow-none m-2" : "myInput border-3 form-control shadow-none m-2"}`}
                                placeholder="Here Your Last Name" type="text"
                                value={Student.lastName}
                                onChange={(e) => {
                                    Student.lastName = e.target.value;
                                    this.setState({ Student })
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-5 col-12 m-auto m-0">
                        <h5 className="text-muted" >Please Enter Other's cradincial</h5>
                        <div className="Textbox-div">
                            <input className={`${!(Student.registerationNo?.length>0) && notValid === true ? "RedBorders form-control shadow-none m-2" : "myInput border-3 form-control shadow-none m-2"}`}
                                placeholder="Your Registeration No" type="text"
                                value={Student.registerationNo}
                                onChange={(e) => {
                                    Student.registerationNo = e.target.value;
                                    this.setState({ Student })
                                }}
                            />
                        </div>
                        <div className="Textbox-div">
                            <input className={`${!(Student.phoneNo?.length>0) && notValid === true ? "RedBorders form-control shadow-none m-2" : "myInput border-3 form-control shadow-none m-2"}`}
                                placeholder="Your Phone No" type="text"
                                value={Student.phoneNo}
                                onChange={(e) => {
                                    Student.phoneNo = e.target.value;
                                    this.setState({ Student })
                                }}
                            />
                        </div>
                        <div className="Textbox-div">
                            <input className={`${!(Student.address?.length>0) && notValid === true ? "RedBorders form-control shadow-none m-2" : "myInput border-3 form-control shadow-none m-2"}`}
                                placeholder="Your Full Address" type="text"
                                value={Student.address}
                                onChange={(e) => {
                                    Student.address = e.target.value;
                                    this.setState({ Student })
                                }}
                            />
                        </div>
                        <div className="Textbox-div">
                            <input className={`${!(Student.department?.length>0) && notValid === true ? "RedBorders form-control shadow-none m-2" : "myInput border-3 form-control shadow-none m-2"}`}
                                placeholder="Your Department" type="text"
                                value={Student.department}
                                onChange={(e) => {
                                    Student.department = e.target.value;
                                    this.setState({ Student })
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-5 p-4 col-12 col-md-10  m-auto m-0 col-xm-9">
                        <button
                            onClick={this.validationCheck}
                            className="savebtn col-12">Save
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}