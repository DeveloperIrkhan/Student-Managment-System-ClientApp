import React from 'react'
import { Department, StudentResponseModel } from '../Models/Students';
import { loading } from '../Utilities/Gernal-Utilities';
interface Props { }

interface State {
    StudentDetails: StudentResponseModel[],
}

export class GerAllStudents extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            StudentDetails: []
        };
        this.GetStudents = this.GetStudents.bind(this);
    }
    async GetStudents() {
        loading(true)
        let url = 'https://localhost:44378/student/GetStudents';
        fetch(url, {
            method: "GET",
        })
            .then((response) => {
                if (!response.ok) {
                    loading(true)
                }
                return response.json()
            })
            .then(data => {
                this.setState({ StudentDetails: data })
                loading(false);
            })
    }
    // async GetStudents() {
    //     try{
    //         loading(true);
    //         await GetAllStudents()
    //         .then((res : StudentResponseModel)=>{
    //             if(res){
    //                 const StudentDetails = res;
    //                 this.setState({StudentDetails :{ ...StudentDetails }});
    //             }
    //         })
    //         .catch(() => {
    //             loading(false);
    //         });
    //     } catch (error) {}
    // }
    componentDidMount() {
        this.GetStudents();
    }
    render() {
        let Student = this.state.StudentDetails;
        console.log(Student)

        return (
            <div className="my-5">
                <h3 className="text-center">All Student Record</h3>
                <table className="m-4 table table-bordered">
                    <thead className="table bg-dark text-white">
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>Registeration No</th>
                            <th>Phone No</th>
                            <th>Address</th>
                            <th>Department</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Student?.map((std, key) => {
                            return (
                                <tr key={key} className="text-center">
                                    <td>
                                        {std.id}</td>
                                    <td>
                                        {std.firstName}
                                    </td>
                                    <td>
                                        {std.middleName}
                                    </td>
                                    <td>
                                        {std.lastName}
                                    </td>
                                    <td>
                                        {std.registerationNo}
                                    </td>
                                    <td>
                                        {std.phoneNo}
                                    </td>
                                    <td>
                                        {std.address}
                                    </td>
                                    <td>
                                        {std.department}
                                    </td>
                                    <td>
                                        <span>
                                            <button className='btn btn-outline-success btn-sm mx-1'><i className="bi bi-pencil-fill"></i></button>
                                            <button className='btn btn-outline-danger btn-sm mx-1'><i className="bi bi-trash"></i></button>
                                        </span>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}