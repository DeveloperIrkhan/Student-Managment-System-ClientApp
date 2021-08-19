import React from 'react'
import { StudentResponseModel } from '../Models/Students';
import { loading } from '../Utilities/Gernal-Utilities';
import { GetAllStudents } from '../Utilities/GettingAPI-data';
interface Props {}

interface State {
    StudentDetails : StudentResponseModel
}

export class Students extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            StudentDetails : Object()
        };
        this.GetStudents=this.GetStudents.bind(this);
    }
   
    async GetStudents() {
        try{
            loading(true);
            await GetAllStudents()
            .then((res : StudentResponseModel)=>{
                if(res){
                    const StudentDetails = res;
                    this.setState({StudentDetails:{ ...StudentDetails }});
                }
            })
            .catch(() => {
                loading(false);
            });
        } catch (error) {}
    }
    componentDidMount(){
        this.GetStudents();
    }
    render() {
        let Studentlist = this.state.StudentDetails;
        alert(Studentlist.ID)
        return (
            <div className="">
                <table className="table table-bordered">
                    <thead className="table bg-success text-white">
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>Registeration No</th>
                            <th>Test Marks</th>
                            <th>Interview Marks</th>
                            <th>Total Marks</th>
                            <th>Phone No</th>
                            <th>Address</th>
                            <th>Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <tr>
                                <td>{Studentlist.ID}</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}