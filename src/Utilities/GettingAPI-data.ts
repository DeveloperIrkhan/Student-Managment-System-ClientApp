import { StudentResponseModel } from "../Models/Students";
import { EntityName } from "./General-utilities";
import { API_ENDPOINTS, ExecuteAPI_GET_Students } from "./Server-url";

export async function GetAllStudents(){
    return await ExecuteAPI_GET_Students<StudentResponseModel>
    (API_ENDPOINTS.Student.GetAllStudents,EntityName.Student)
}
