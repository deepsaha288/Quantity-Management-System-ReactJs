import React,{useState ,useEffect} from 'react'
import Header from '../Components/header/Header.jsx';
import Unit from '../Components/units/Unit.jsx';
import Converter from '../Components/converter/Converter.jsx';



let length= [{Drop:["meter", "centimeter", "millimeter", "kilometer", "mile"], unit: ["m", "cm",  "mm","kl","ml"]}];
let temperature = [{Drop: ["Celsius", "Farenhite", "Kalvin"], unit: ["c", "f",  "k"]}];
let volume = [{Drop:  ["liter", "Mililitres", "Gallons"], unit: ["l", "ml",  "gal"]}];

const DashBoard = () =>{
    const[units,setUnits] = useState(length);

    useEffect(() => {
        
     handlechange("length")
      
    }, [])

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