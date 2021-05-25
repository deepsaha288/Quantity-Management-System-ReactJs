import React,{useState} from 'react'
import Header from '../Components/header/Header.jsx';
import Unit from '../Components/units/Unit.jsx';
import Converter from '../Components/converter/Converter.jsx';



let length= ["meter", "kilometer", "centimeter"];
let temperature = ["Celsius", "Farenhite", "Kalvin"];
let volume = ["liter", "Mililitres", "Gallons"];

const DashBoard = () =>{
    const[units,setUnits] = useState([]);

    const handlechange =(value)=>{
        console.log(value)
        if(value === "length"){
            setUnits(length)
        }
        if(value === "temperature"){
            setUnits(temperature)
        }
        if(value === "volume"){
            setUnits(volume)
        }
        
    }
    return(
        <>
        <Header/>
        <Unit  handleConverter ={handlechange}/> 
        <Converter units={units}/>
       </>
    )
}
export default DashBoard;