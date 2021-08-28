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
        
        let Id = parseInt(this.state.StudentId);
        let API_URL = `https://localhost:44378/Student/GetStudent/${Id}`
        loading(true)
        axios.get(API_URL)
            .then(resp => {
                console.log(resp.data)
                let details = resp.data;
                this.setState({ StudentDetail: details })
                loading(false)
            })
    }

    render() {
        const Student = this.state.StudentDetail;
        return (
            <div className="container">
                <div className="my-5">
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
                        className="btn btn-success float-end col-5 m-4"
                        onClick={this.RefreshStudent}>
                        Fetch Student Details For ID: <b>{this.state.StudentId}</b>
                    </button>
                </div>

                
                {Student.map((std,id) => {
                    return (
                        <div key={id} className="text-danger text-capitalize">
                                {std.id}
                                {std.firstName}
                                {std.middleName}
                                {std.lastName}
                                {std.registerationNo}
                                {std.address}
                                {std.phoneNo}
                                {std.department}
                        </div>

                    )
                })}
            </div>
        )
    }
}