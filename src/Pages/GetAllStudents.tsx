import React from 'react'
import { StudentResponseModel } from '../Models/Students';
import { loading } from '../Utilities/Gernal-Utilities';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ModelBox } from './ModelBox';
import { EditStudentModal } from './EditStudentModal';
interface Props { }

interface State {
    StudentDetails: StudentResponseModel[],
    modalShow: boolean,
    EditModalShow: boolean,
    ID: number,
    StudentName?:string
}
export class GetAllStudents extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            StudentDetails: [],
            modalShow: false,
            EditModalShow: false,
            StudentName:"",
            ID: 0,
        };
        this.GetStudents = this.GetStudents.bind(this);
    }
    async handleClick(id: number, hide: boolean) {
        try {
            this.setState({ modalShow: true });
            loading(true);
            let url = `https://localhost:44378/student/DeleteStudent/${id}`;
            await fetch(url, {
                method: "DELETE",
            })
            loading(false)
            this.setState({ modalShow: false });
            this.GetStudents();
            toast.dark("student delete successfully!!!",
                {
                    autoClose: 2000,
                })
            console.log(id)
        }
        catch {
            loading(false)
            console.log("something went wrong!!!")

        }
    }
    async GetStudents() {
        loading(true)
        let url = 'https://localhost:44378/student/GetStudents';
        await fetch(url, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
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
                toast.success("Students list refreshed!!!",
                    {
                        autoClose: 6000,
                    })
            })
    }
    componentDidMount() {
        this.GetStudents();
    }

    render() {
        let Student = this.state.StudentDetails;
        const { modalShow, EditModalShow, StudentName } = this.state;

        return (
            <div className="my-5">
                <ModelBox
                    show={modalShow}
                    StudentName={StudentName}
                    onHide={() => { this.setState({ modalShow: false }) }}
                    onDelete={() => {
                        this.handleClick(this.state.ID, this.state.modalShow)
                    }}
                />
                <EditStudentModal
                    show={EditModalShow}
                    onHide={() => {
                        this.setState({EditModalShow:false})
                    }}
                    onUpdate={() => {

                    }}
                />
                <ToastContainer style={{ paddingTop: "50px" }} />
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
                                <tr key={key} className="text-center trim">
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
                                                className='btn btn-outline-success btn-sm mx-1'
                                                onClick={() => {
                                                    this.setState({ ID: std.id })
                                                    this.setState({ EditModalShow: true })
                                                }}>
                                                <i className="bi bi-pencil-fill"></i>
                                            </button>
                                            <button
                                                className='btn btn-outline-danger btn-sm mx-1'
                                                onClick={() => {
                                                    this.setState({ ID: std.id, StudentName:std.firstName })
                                                    this.setState({ modalShow: true })
                                                }}>
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