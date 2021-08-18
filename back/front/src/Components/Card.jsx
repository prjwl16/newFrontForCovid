/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { API } from '../backend/api'
import { removePatient,updatePatient } from '../backend/apiCalls'
import "./card.css"
const Card = ({data,setReload=f=>f,reload=undefined}) => {
    const [cdata, setCdata] = useState({...data})
    const [readValues, setreadValue] = useState(true)
    const [Statusvalue, setStatusValue] = useState(true)
    const [text, setText] = useState("Update")
    const {name,lastname,phone,status,email,_id} = cdata
    const [val, setVal] = useState("none")

    const handleDelete=()=>{
            removePatient(_id)
            .then(res=>{
                if(res.message){
                    setReload(reload=>!reload)
                }
            })
            .catch(err=>console.log("errrrr",err))
    }
    
    const handleUpdate=()=>{
        setStatusValue(true)
        setVal("")

        updatePatient(_id,status)
        .then(res=>{
            setTimeout(() => {
                setVal("none")
                setText("update")
            }, 2000);
        })
    }

    
    const handleChange=(event)=>{
        setCdata({...cdata, status:event.target.value})
        setText("Save Changes")
    }
    return (
        <div className="bigDiv text-info">
            <div className=" m-2 form-group   row">
                <label className="mt-2 col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input readOnly type="text" value={name +" "+ lastname} className=" mt-2 form-control"placeholder="Name" />
                </div>
            </div>
            <div className="m-2 form-group row">
                <label className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input readOnly type="text" value={email} className="form-control"placeholder="Email" />
                </div>
            </div>
            <div className="m-2 form-group row">
                <label className="col-sm-2 col-form-label">Mobile</label>
                <div className="col-sm-10">
                    <input readOnly type="text" value={phone} className="form-control"placeholder="Mobile Number" />
                </div>
            </div>
            <div className="m-2 form-group row">
                <label className="col-sm-2 col-form-label">Status</label>
                <div className="col-sm-10">
                    <select onChange={handleChange} type="text" value={status} className=" mb-2 form-control"placeholder="Status">
                        <option>Positive</option>
                        <option>Negative</option>
                        <option>Pending</option>
                    </select>
                </div>
            </div>
            <div className="div text-center bg-gradient-info" style={{display: val}}><h4 className="">Updated Successfully</h4></div>
            <div className="m-2 form-group text-center row">
                <div className="col-6 ">
                    <button onClick={()=>{
                        handleUpdate()}} className="bg-gradient btn btn-primary">{text}</button>
                </div>
                <div className="col-6">
                    <button onClick={()=>{
                        handleDelete()
                        }} className="btn btn-danger bg-gradient">Remove</button>
                </div>
            </div>
        </div>
    )
}


export default Card