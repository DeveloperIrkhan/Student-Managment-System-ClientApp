import { StudentResponseModel } from "../Models/Students";
import { API_ENDPOINTS } from "./EndPoints";
import { EntityName } from "./General-utilities";
import { ExecuteAPI_GET_Students } from "./Server-url";

export async function GetAllStudents(){
    return await ExecuteAPI_GET_Students<StudentResponseModel>
    (API_ENDPOINTS.Student.GetAllStudents,EntityName.Student)
}

export async function GetOneStudents(){
    return await ExecuteAPI_GET_Students<StudentResponseModel>
    (API_ENDPOINTS.Student.GetOneStudent,EntityName.Student)
}


