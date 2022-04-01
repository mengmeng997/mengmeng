import {Request} from '../http/http';
 
export const getList = (param?:any) => Request.post("/app-api/v1/app/month/list",param)