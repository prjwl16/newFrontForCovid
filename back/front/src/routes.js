import React from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from './Components/Home'
import AddPatient from './Components/AddPatient'


export default function Routes()
{
    return (
        <BrowserRouter >
            <Switch >
            <Route path="/" exact component ={Home}  />
            <Route path="/add" exact component ={AddPatient}  />
            </Switch>
        </BrowserRouter>
    )
}