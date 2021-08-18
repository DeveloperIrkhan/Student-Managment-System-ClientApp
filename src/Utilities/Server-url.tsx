import { serialize } from "object-to-formdata";
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

export async function ExecuteAPI<T>(endPoint: string) {
	try {
		loading(true);
		let apiPath = API_URL;
		const formData = serialize(endPoint);
		const response = await fetch(`${apiPath}${endPoint}`, {
			method: "GET",
			body: formData,
		});
		return response.json().then(async (res) => {
			loading(false);
			return (await res) as T;
		});
	} catch (error) {
		loading(false);
	}
}


export async function ExecuteAPI_GET_Students<T>( endPoint: string, entity?: string) {
	const response: any = await ExecuteAPI<T>(endPoint);
	return response as T;
}