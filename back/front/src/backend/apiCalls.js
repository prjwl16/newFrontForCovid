import { API } from "./api"

export const listPatients = async ()=>{
    return fetch(`${API}/listpatients`)
    .then(res=>res.json())
    .then(patients=> {
        return patients} )
        .catch(err=>console.log("Error: ",err))
}
    
export const removePatient = async _id =>{
    console.log("Remove")
    return fetch(`${API}/removepatient`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({_id})
    })
    .then(res=>res.json())
    .then(patient=>patient)
    .catch(err=>console.log("errr",err))
}

export const updatePatient=async (_id,status)=>{
    return fetch(`${API}/updatePatient`, {
        method: 'PUT',
        headers: {
            Accept:'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({_id,status}),
        })
        .then(response => response.json())
        .then(data =>data)
        .catch(error => error);
}

export const addPatient=  async (patient)=>{
    return fetch(`${API}/addpatient`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(patient)
    })
    .then(res=>res.json())
    .then(patient=>{return patient})
    .catch(err=>console.log("errr",err))
}