import internal from "stream";

export interface StudentResponseModel {
        id:number,
        firstName :string,
        middleName :string,
        lastName :string,
        registerationNo :string,
        phoneNo :string,
        address :string,
        department :string,
}
export enum Department {
        IT =1,
        HR,
        Finance,
        Networks,
        Administration
}