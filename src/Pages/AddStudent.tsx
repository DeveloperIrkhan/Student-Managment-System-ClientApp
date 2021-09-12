import React from 'react';
import { StudentResponseModel } from '../Models/Students';
import { loading } from '../Utilities/Gernal-Utilities';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
interface Props { }

interface State {
    Student: StudentResponseModel;
    validate: boolean

}

export class AddStudent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            Student: Object(),
            validate: true
        };
        this.validationCheck = this.validationCheck.bind(this)
        this.PostStudentdata = this.PostStudentdata.bind(this)
    }

    validationCheck() {
        let Std = this.state.Student;
        let firstName = Std.firstName;
        let middlename = Std.middleName;
        let lastName = Std.lastName;
        let registerationNo = Std.registerationNo;
        let phoneNo = Std.phoneNo;
        let address = Std.address;
        let department = Std.department;
        console.log(firstName)
        console.log(middlename)
        console.log(lastName)
        console.log(registerationNo)
        if (firstName === "" || middlename === "" || lastName === "" || registerationNo === "" || phoneNo === "" || address === "" || department === "") {
            toast.error("Pleae Fill the required Field!!!")
            this.setState({ validate: false })
        }
        else {
            this.setState({ validate: true })
            this.PostStudentdata();

        }
    }


    async PostStudentdata() {
        try {
            let Student = this.state.Student;
            let API_URL = "https://localhost:44378/Student/AddStudent";
            loading(true);
            await axios.post(API_URL, Student)
            loading(false);
            toast.success("Student Details Added Successfully!!!!")
        }
        catch {
            loading(false);
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
        let Save_Student = this.state.Student;
        // const { firstName, middleName, lastName, registerationNo, phoneNo, address, department } = this.state.Student
        const { validate } = this.state
        return (
            <div className="py-5 row col-12">
                <ToastContainer />
                <div>
                    <div className="col-lg-5 col-12 m-auto m-0">
                        <h5 className="text-muted" >Please Enter Your Full Name</h5>
                        <div className="Textbox-div">
                            <input className={`${Save_Student.firstName === "" && validate !== true ? "RedBorders form-control m-2" : "myInput border-3 form-control m-2"}`}
                                placeholder="Here Your First Name"
                                type="text"
                                value={Save_Student.firstName}
                                onChange={(e) => {
                                    Save_Student.firstName = e.target.value
                                }}
                            />
                        </div>
                        <div className="Textbox-div">
                            <input className={`${Save_Student.middleName === "" && validate !== true ? "RedBorders form-control m-2" : "myInput border-3 form-control m-2"}`}
                                placeholder="Here Your Middle Name" type="text"
                                value={Save_Student.middleName}
                                onChange={(e) => {
                                    Save_Student.middleName = e.target.value
                                }}
                            />
                        </div>
                        <div className="Textbox-div">
                            <input className={`${Save_Student.lastName === "" && validate !== true ? "RedBorders form-control m-2" : "myInput border-3 form-control m-2"}`}
                                placeholder="Here Your Last Name" type="text"
                                value={Save_Student.lastName}
                                onChange={(e) => {
                                    Save_Student.lastName = e.target.value
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-5 col-12 m-auto m-0">
                        <h5 className="text-muted" >Please Enter Other's cradincial</h5>
                        <div className="Textbox-div">
                            <input className={`${Save_Student.registerationNo === "" && validate !== true ? "RedBorders form-control m-2" : "myInput border-3 form-control m-2"}`}
                                placeholder="Your Registeration No" type="text"
                                value={Save_Student.registerationNo}
                                onChange={(e) => {
                                    Save_Student.registerationNo = e.target.value
                                }}
                            />
                        </div>
                        <div className="Textbox-div">
                            <input className={`${Save_Student.phoneNo === "" && validate !== true ? "RedBorders form-control m-2" : "myInput border-3 form-control m-2"}`}
                                placeholder="Your Phone No" type="text"
                                value={Save_Student.phoneNo}
                                onChange={(e) => {
                                    Save_Student.phoneNo = e.target.value
                                }}
                            />
                        </div>
                        <div className="Textbox-div">
                            <input className={`${Save_Student.address === "" && validate !== true ? "RedBorders form-control m-2" : "myInput border-3 form-control m-2"}`}
                                placeholder="Your Full Address" type="text"
                                value={Save_Student.address}
                                onChange={(e) => {
                                    Save_Student.address = e.target.value
                                }}
                            />
                        </div>
                        <div className="Textbox-div">
                            <input className={`${Save_Student.department === "" && validate !== true ? "RedBorders form-control m-2" : "myInput border-3 form-control m-2"}`}
                                placeholder="Your Department" type="text"
                                value={Save_Student.department}
                                onChange={(e) => {
                                    Save_Student.department = e.target.value
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-5 p-4 col-12 col-md-10  m-auto m-0 col-xm-9">
                        <button
                            onClick={
                                this.validationCheck}
                            className="savebtn col-12">Save
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}