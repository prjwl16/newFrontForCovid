/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Card from './Card'
import "./card.css"
import { listPatients } from '../backend/apiCalls'
import { Link } from 'react-router-dom'
import AddPatient from './AddPatient'
import "./style.css"
const Home = () => {

    const [number, setNumber] = useState()
    const [patients, setPatient] = useState()
    const [filtered, setFiltered] = useState()
    const [reload, setReload] = useState(false)
    const [addP, setAddP] = useState(false)
    const [cls, setCls]=useState("outer")

    const handleChange = async event => {
        setNumber(event.target.value)
    }

    const search = () => {
        return (
            <div>
                <div className="input-group">
                    <input type="search"
                        className="form-control rounded"
                        placeholder="Search By Phone Number" aria-label="Search"
                        aria-describedby="search-addon"
                        onChange={handleChange}
                    />
                </div>
            </div>
        )
    }

    const ShowAdd=()=>{
        setCls("outer bg-active")
        setAddP(true)
    }

    const handleClick=()=>{
        setCls("outer")
        setAddP(false)
    }

    
    const allPatients = () => {
        return (
            <div className="big mt-5">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-6">{search()}</div>
                    <div className="col-2 text-center "><button onClick={ShowAdd} className="btn btn-outline-info">Add patinet</button></div>
                    {
                        addP && (
                            <div className={`${cls}`}>
                                <AddPatient />
                                <div className="cst">
                                    <button onClick={handleClick} className="btn btn-outline-danger mt-4">Close</button>
                                </div>
                            </div>
                        )
                    }
                    <div className="col-2"></div>
                </div>
                <div className="mainC">
                    {
                        filtered && (
                            filtered.map((patient, idx) => {
                                return (
                                    <Card key={idx}
                                        data={patient}
                                        setReload={setReload}
                                    />
                                )
                            })
                        )
                    }
                </div>
            </div>
        )
    }
    useEffect(() => {
        setReload(reload)
    }, [reload])


    useEffect(() => {
        const temp = []
        if (!number) {
            setFiltered(patients)
        }
        else {
            patients.map(patient => {
                if (number && patient.phone.toString().startsWith(number.toString())) {
                    temp.push(patient)
                }
            })
            setFiltered(temp)
        }
    }, [number, reload])

    useEffect(() => {
        listPatients()
            .then(data => {
                setPatient(data)
                setFiltered(data)
            })
    }, [reload])

    return (
        <div className="div">
            {allPatients()}
        </div>
    )
}

export default Home