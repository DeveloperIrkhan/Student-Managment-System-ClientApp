import axios from 'axios';
import React from 'react'
import { StudentResponseModel } from '../Models/Students';
import { loading } from '../Utilities/Gernal-Utilities';

interface Props { }

interface State {
    StudentId: string,
    StudentDetail: StudentResponseModel[]
}

export class GetOneStudent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            StudentId: "",
            StudentDetail: [],
        };
        this.RefreshStudent = this.RefreshStudent.bind(this);
    }

    RefreshStudent() {
        loading(true);
        let Id = parseInt(this.state.StudentId);
        let API_URL = `https://localhost:44378/Student/GetStudent/${Id}`
        axios.get(API_URL)
            .then(resp => {
                console.log(resp.data)
                let details = resp.data;
                this.setState({ StudentDetail: details })
            })
        loading(false)
    }

    render() {
        const Student = (this.state.StudentDetail);
        return (
            <div className="container">
                <div className="mt-5 mb-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Please Enter Id to serch Student"
                        onChange={(e) => {
                            this.setState({
                                StudentId: e.target.value,
                            })
                        }} />
                    <button
                        className="btn btn-outline-success float-end col-4 m-4"
                        onClick={this.RefreshStudent}>
                        Fetch Student Details For ID: <b>{this.state.StudentId}</b>
                    </button>
                </div>
                <div>
                    {Student.map((std, id) => {
                        return (
                            <div key={id} className="col-12 text-capitalize container">
                                <div className="col-12">
                                    <div className="box card card-img m-2">
                                        <div className="py-2 px-3">
                                            <h4 className="f-14-b text-left pt-2">Student Name </h4>
                                            <hr />
                                        </div>
                                        <div className="center-block justify-content-center d-block px-2 pb-4">
                                            <b>First Name :</b> {std.firstName} <br />
                                            {std.middleName ?
                                                <div><b>Middle Name :</b> {std.middleName} <br /></div> : ""
                                            }
                                            <b>Last Name : </b>{std.lastName} <br />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="box card card-img m-2">
                                        <div className="py-2 px-3">
                                            <h4 className="f-14-b text-left pt-2">Contact Info </h4>
                                            <hr />
                                        </div>
                                        <div className="center-block justify-content-center d-block px-2 pb-4">
                                            <b>Phone no:</b> {std.phoneNo} <br />
                                            <b>Address :</b> {std.address} <br />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="box card card-img m-2">
                                        <div className="py-2 px-3">
                                            <h4 className="f-14-b text-left pt-2">Details </h4>
                                            <hr />
                                        </div>
                                        <div className="center-block justify-content-center d-block px-2 pb-4">
                                            <b>Student Id :</b> {std.id} <br />
                                            <b>Registeration :</b> {std.registerationNo} <br />
                                            <b>Department :</b> {std.department} <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}