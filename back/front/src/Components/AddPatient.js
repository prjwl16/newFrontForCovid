import React, { useState } from 'react'
import { addPatient } from '../backend/apiCalls'
import "./modal.css"
const AddPatient = () => {

    const [values, setValues] = useState({
        name: "",
        lastname:"",
        email: "",
        phone: "",
        status: "Negative"
    })
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(undefined)
    const { name,lastname, email, phone, status } = values
    const handleSubmit = () => {

        if(!name || !lastname || !email || !phone){
            setError(true)
        }
        else{
            addPatient(values)
            .then(res => {
                setSuccess(true)
                setError(false)
                if (res.message) {
                    setValues({
                        name: "",
                        lastname:"",
                        email: "",
                        phone: "",
                        status: "Positive"
                    })
                }
            })
        }
    }

    const handleChange = value => e => {
        setValues({ ...values, [value]: e.target.value })
    }
    return (
        <div className="modalAdd text-info p-2 ">
            <form>
                {
                    error && (
                        <div className="bg-dark rounded">
                            <h4 className="text-center  text-danger">All fields are Mandatory</h4>
                        </div>
                    )
                }
                <div className="form-group row m-2">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input onChange={handleChange("name")} type="text" value={name} className="form-control" placeholder="Name" />
                    </div>
                </div>
                <div className="form-group row m-2">
                    <label className="col-sm-2 col-form-label">Last Name</label>
                    <div className="col-sm-10">
                        <input onChange={handleChange("lastname")} type="text" value={lastname} className="form-control" placeholder="Last Name" />
                    </div>
                </div>
                <div className="form-group row m-2">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={handleChange("email")} value={email} className="form-control" id="staticEmail" placeholder="email@example.com" />
                    </div>
                </div>
                <div className="form-group row m-2">
                    <label className="col-sm-2 col-form-label">Mobile</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={handleChange("phone")} value={phone} className="form-control" placeholder="Mobile Number" />
                    </div>
                </div>
                <div className="form-group row m-2">
                    <label className="col-sm-2 col-form-label">Status</label>
                    <div className="col-sm-10">
                        <select onChange={handleChange("status")} value={status} type="text" className=" mb-2 form-control" placeholder="Status">
                            <option>Negative</option>
                            <option>Positive</option>
                            <option>Pending</option>
                        </select>
                    </div>
                    <div className="text-info text-center bg-dark rounded mb-2 p-1" style={{display: success ? "":"none"}}> <h4> Patient Added..!</h4></div>
                    <div onClick={handleSubmit} className="btn btn-outline-info">Add Patient</div>
                </div>
            </form>
        </div>
    )
}

export default AddPatient
