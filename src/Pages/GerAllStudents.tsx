import React from 'react'
import { StudentResponseModel } from '../Models/Students';
import { loading } from '../Utilities/Gernal-Utilities';
// import { GetAllStudents } from '../Utilities/GettingAPI-data';
interface Props {}

interface State {
    StudentDetails : StudentResponseModel[]
}

export class GerAllStudents extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            StudentDetails : []
        };
        // this.GetStudents=this.GetStudents.bind(this);
        this.GetAllStudents=this.GetAllStudents.bind(this);
    }
    async GetAllStudents(){
        let url = "https://localhost:44378/Student/GetStudents";
        fetch(url,{
            method:"GET",
            mode:"cors"
        })
        .then((response)=>{
            if(!response.ok){
                loading(true)
            }
            return response.json()
        })
        .then(data =>{
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
    //                 this.setState({StudentDetails:{ ...StudentDetails }});
    //             }
    //         })
    //         .catch(() => {
    //             loading(false);
    //         });
    //     } catch (error) {}
    // }
    componentDidMount(){
        // this.GetStudents();
        this.GetAllStudents()
    }
    render() {
        let Student = this.state.StudentDetails;
        console.log(" ID = "+Student)
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
                        </tr>
                    </thead>
                    <tbody>
                        { Student?.map((std,key)=>{
                               return(
                                   <tr key={key}>
                                       <td>{key+1}</td>
                                       <td>{std.FirstName}</td>
                                       <td>{std.MiddleName}</td>
                                       <td>{std.LastName}</td>
                                       <td>{std.RegisterationNo}</td>
                                       <td>{std.PhoneNo}</td>
                                       <td>{std.Address}</td>
                                       <td>{std.Department}</td>
                                   </tr>
                               )
                           })}
                    </tbody>
                </table>
            </div>
        )
    }
}