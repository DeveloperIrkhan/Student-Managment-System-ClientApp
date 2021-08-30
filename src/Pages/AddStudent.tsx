import axios from 'axios';
import React from 'react'
import { StudentResponseModel } from '../Models/Students';
import { loading } from '../Utilities/Gernal-Utilities';
interface Props { }

interface State {
    AddStudent: StudentResponseModel;
}

export class AddStudent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            AddStudent: Object(),
        };
        this.PostStudentdata= this.PostStudentdata.bind(this)
    }
    async PostStudentdata() {
        loading(true);
        let studentDetails = {
            firstName: this.state.AddStudent.firstName,
            middleName: this.state.AddStudent.middleName,
            lastName: this.state.AddStudent.lastName,
            registerationNo: this.state.AddStudent.registerationNo,
            phoneNo: this.state.AddStudent.phoneNo,
            address: this.state.AddStudent.address,
            department: this.state.AddStudent.department,
        }
        let API_URL = "https://localhost:44378/Student/AddStudent";
        let request = await axios.post(API_URL,studentDetails)
        let response = request.data
        console.log("this data is inseted" + response)
        loading(false);
    }

    render() {
        let Save_Student = this.state.AddStudent;
        return (
            <div className="py-5 row col-12">
                <form action="">
                    <div className="col-lg-5 col-12 m-auto m-0">
                        <h5 className="text-muted" >Please Enter Your Full Name</h5>
                        <div className="">
                            <input className="myInput border-3 form-control m-2" placeholder="Here Your First Name" type="text"
                                    value={Save_Student.firstName}
                                    onChange={(e) => {
                                        Save_Student.firstName = e.target.value
                                    }}
                            />
                        </div>
                        <div className="">
                            <input className="myInput border-3 form-control m-2" placeholder="Here Your Middle Name" type="text"
                                    value={Save_Student.middleName}
                                    onChange={(e) => {
                                        Save_Student.middleName = e.target.value
                                    }}
                            />
                        </div>
                        <div className="">
                            <input className="myInput border-3 form-control m-2" placeholder="Here Your Last Name" type="text"
                                    value={Save_Student.lastName}
                                    onChange={(e) => {
                                        Save_Student.lastName = e.target.value
                                    }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-5 col-12 m-auto m-0">
                        <h5 className="text-muted" >Please Enter Other's cradincial</h5>
                        <div className="">
                            <input className="myInput border-3 form-control m-2" placeholder="Your Registeration No" type="text"
                                    value={Save_Student.registerationNo}
                                    onChange={(e) => {
                                        Save_Student.registerationNo = e.target.value
                                    }}
                            />
                        </div>
                        <div className="">
                            <input className="myInput border-3 form-control m-2" placeholder="Your Phone No" type="text"
                                    value={Save_Student.phoneNo}
                                    onChange={(e) => {
                                        Save_Student.phoneNo = e.target.value
                                    }}
                            />
                        </div>
                        <div className="">
                            <input className="myInput border-3 form-control m-2" placeholder="Your Full Address" type="text"
                                    value={Save_Student.address}
                                    onChange={(e) => {
                                        Save_Student.address = e.target.value
                                    }}
                            />
                        </div>
                        <div className="">
                            <input className="myInput border-3 form-control m-2" placeholder="Your Department" type="text"
                                    value={Save_Student.department}
                                    onChange={(e) => {
                                        Save_Student.department = e.target.value
                                    }}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <button 
                        onClick={this.PostStudentdata}
                        className="btn btn-success float-end col-3">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}