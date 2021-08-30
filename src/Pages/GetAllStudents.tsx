import React from 'react'
import { StudentResponseModel } from '../Models/Students';
import { loading } from '../Utilities/Gernal-Utilities';
import { CustomModel } from './CustomModel';
import { ModelBox } from './ModelBox';
interface Props { }

interface State {
    StudentDetails: StudentResponseModel[],
    modalShow: boolean,
    ID : number,
}

export class GetAllStudents extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            StudentDetails: [],
            modalShow: false,
            ID:0,
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
    //                 this.this.({StudentDetails :{ ...StudentDetails }});
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
    async Delete_async (){
        loading(true)
        let Id = this.state.ID;
        let url = `https://localhost:44378/student/DeleteStudent/${Id}`;
        fetch(url, {
            method: "DELETE",
        })
    }
    render() {
        let Student = this.state.StudentDetails;
        console.log(Student)
        console.log(this.state.modalShow)
        const {modalShow}=this.state;

        return (
            <div className="my-5">
                <ModelBox
                    show={modalShow}
                    onHide={() => {this.setState({modalShow:false})}}
                />
                <h3 className="text-center">Student's List</h3>
                <hr />
                <table className="my-4 container table table-bordered">
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
                                    <td className="trim">
                                        {std.address}
                                    </td>
                                    <td>
                                        {std.department}
                                    </td>
                                    <td>
                                        <span>
                                            <button
                                                onClick={()=>{
                                                    this.setState({ID:std.id})
                                                    
                                                }}
                                                className='btn btn-outline-success btn-sm mx-1'>
                                                <i className="bi bi-pencil-fill"></i>
                                            </button>
                                            {console.log(std.id)}
                                            <button
                                                className='btn btn-outline-danger btn-sm mx-1'
                                                onClick={() => { this.setState({ modalShow: true }) }}>
                                                <i className="bi bi-trash"></i>
                                            </button>
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