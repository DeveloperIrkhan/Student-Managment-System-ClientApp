// import { serialize } from "object-to-formdata";
import { StudentResponseModel } from "../Models/Students";
import { loading } from "./Gernal-Utilities";

////////////////////////API_URL////////////////////////
export const API_URL = "https://localhost:44378/";

//////////////////////////API_ENDPOINTS/////////////////////////
export const API_ENDPOINTS = {
    Student: {
        GetAllStudents: "Student/GetStudents"
    }
}
////////////////////////APIs////////////////////////////////////

export async function ExecuteAPI<T>(endPoint: string, std:StudentResponseModel) {
	try {
		loading(true);
		const apiPath = API_URL;
		// const formData = serialize(std);
		fetch(`${apiPath}${endPoint}`, {
			method: "GET",
			// body: formData,
		}).then(resp => resp.json())
		.then(async (res) => {
			loading(false);
			return (await res) as T;
		});
	} catch (error) {
		loading(false);
	}
	finally{
		loading(false);
	}
}


export async function ExecuteAPI_GET_Students<T>( endPoint: string, Getdata?: any) {
	const response: any = await ExecuteAPI<T>(endPoint,Getdata);
	return response as T;
}