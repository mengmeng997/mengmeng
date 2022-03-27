import {Request} from '../http/http';
 
export const getList = (param?:any) => Request.post("/list",param)