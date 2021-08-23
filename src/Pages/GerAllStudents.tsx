import React from 'react'
import { StudentResponseModel } from '../Models/Students';
import { loading } from '../Utilities/Gernal-Utilities';
interface Props {}

interface State {
    StudentDetails : StudentResponseModel[],
}

export class GerAllStudents extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            StudentDetails : [],
        };
        this.GetAllStudents=this.GetAllStudents.bind(this);
    }
    async GetAllStudents(){
        loading(true)
        let url = `https://localhost:44378/Student/GetStudents`;
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
    // async GetAllStudents() {
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
      this.GetAllStudents()
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
                        { Student?.map((std,key)=>{
                               return(
                                   <tr key={key}>
                                       <td className='text-center'
                                       ><a
                                        className="btn btn-outline-danger rounded rounded-circle"
                                       >{key+1}</a></td>
                                       <td>{std.FirstName}</td>
                                       <td>{std.MiddleName}</td>
                                       <td>{std.LastName}</td>
                                       <td>{std.RegisterationNo}</td>
                                       <td>{std.PhoneNo}</td>
                                       <td>{std.Address}</td>
                                       <td>{std.Department}</td>
                                       <td className="text-center">
                                           <span>
                                           <button className='btn btn-success btn-sm mx-1'><i className="bi bi-pencil-fill"></i></button>
                                               <button className='btn btn-danger btn-sm mx-1'><i className="bi bi-trash"></i></button>
                                           </span>
                                        </td>
                                       {console.log(std.FirstName)}
                                   </tr>
                               )
                           })}
                    </tbody>
                </table>
            </div>
        )
    }
}