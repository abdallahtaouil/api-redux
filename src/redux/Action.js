import axios from "axios"
import { GETUSER } from "./Actiontype"

export const getusers=()=>async(dispatch)=>{
    try {
        const res=await axios.get('http://192.168.2.14:4556/api/user/get')
        .then(res=>dispatch({type:GETUSER,payload:res.data.getuser}))
    } catch (error) {
        
    }
}
export const deleteuser=(id)=>async(dispatch)=>{
    try{
        const res=await axios.delete('http://192.168.2.14:4556/api/user/delete/'+id)
        .then(res=>dispatch(getusers()))
    }catch(error){
       console.log(error)
    }

}
export const adduser=(data)=>async(dispatch)=>{
    try{
        const res=await axios.post('http://192.168.2.14:4556/api/user/add',data)
        .then(res=>dispatch(getusers()))
    }catch(error){
        console.log(error)
    }
}
export const edituser=(data,id)=>async(dispatch)=>{
    try{
        const res=await axios.put('http://192.168.2.14:4556/api/user/update/'+id,data)
        .then(res=>dispatch(getusers()))
    }catch(error){
        console.log(error)
    }
}