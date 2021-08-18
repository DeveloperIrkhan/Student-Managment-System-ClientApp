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
    }
   
    async GetStudents() {
        try{
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
    render() {
        let Studentdetails = this.state.StudentDetails;
        console.log(Students)   
        console.log(Studentdetails)
        return (
            <div className="">
                {Studentdetails}
            </div>
        )
    }
}