import React,{useEffect} from 'react'
import './Converter.css';
// import convert from 'convert-units'

const Converter = (props) => {
    const [from,setFrom] = React.useState("1");
    const [to, setTo] = React.useState("100");
    const [fromOption,setFromOption] =React.useState( props.units[0].Drop[0]);
    const[toOption,setToOption] = React.useState( props.units[0].Drop[0]);
    console.log(props)

     useEffect(() => {
    lengthConversion();
    tempetureConversion();
    volumeConverter();
      

    }, [from])

    const lengthConversion =()=>{
      if (fromOption === 'meter' && toOption === 'centimeter'){
          setTo(Number(from *100));
      }
   else if (fromOption === "meter" && toOption === "millimeter") {
        setTo(Number(from * 1000));

    }
    else if (fromOption === "meter" && toOption === "kilometer") {

		setTo( Number(from) * 0.001);
    }
    else if (fromOption === "meter" && toOption=== "mile") {
		setTo(Number(from) * 0.000621371);
	}

}

const tempetureConversion =()=>{
	 if (fromOption === "Celsius" && toOption === "Fahrenheit") {
		setTo(Number(from) * 9 / 5 + 32);
		
	} else if (fromOption === "Celsius" && toOption === "Kelvin") {
		setTo( Number(from) + 273.15);
	}
	if (fromOption === "Fahrenheit" && toOption === "Celsius") {
		setTo( Number(from) - 32 * 5 / 9);
	} else if (fromOption === "Fahrenheit" && toOption === "Fahrenheit") {
		setTo(from)
	} else if (fromOption === "Fahrenheit" && toOption === "Kelvin") {
		setTo (Number(from) - 32 * 5 / 9 + 273.15);
	}

	if (fromOption === "Kelvin" && toOption === "Celsius") {
		setTo(Number(from) - 273.15);
	} else if (fromOption === "Kelvin" && toOption === "Fahrenheit") {
		setTo (Number(from) - 459.67);
	} else if (fromOption === "Kelvin" && toOption === "Kelvin") {
		setTo(from);
	}
}
const volumeConverter =()=>{
    if (fromOption === "Litres" && toOption === "Millilitres") {
		setTo(Number(from) * 1000);
	} else if (fromOption === "Litres" && toOption === "Galons") {
		setTo(Number(from) * 0.219969);
	} else if (fromOption === "Litres" && toOption === "Litres") {
		setTo(from)
	}
	if (fromOption === "Millilitres" && toOption === "Millilitres") {
		setTo(from)
	} else if (fromOption === "Millilitres" && toOption=== "Galons") {
		setTo(Number(from) * 0.000219969);
	} else if (fromOption=== "Millilitres" && toOption === "Litres") {
		setTo(Number(from) * 0.001);
	}

	if (fromOption === "Galons" && toOption === "Millilitres") {
		setTo(Number(from) * 4546.09);
	} else if (fromOption === "Galons" && toOption === "Litres") {
		setTo(Number(from) * 4.54609);
	} else if (fromOption === "Galons" && toOption === "Galons") {
		setTo(from);
	}
}
  
    const calFrom =(e)=>{
     console.log(e.target.value);
      setFrom(e.target.value);
    
    }

    const CalTo =(e)=>{
      console.log(e.target.value);
      setTo(e.target.value);
      }
       
  return (
      <>
          <div className="input-container">
              <div className="from">
                  <div>FROM</div>
                  <form className="form-input">
                      <input type="text" className="section1" value={from} onChange={calFrom} name="from" />
                  </form>
                  <form className="form-input">
                      <select className="section1" value={fromOption} onChange={e => setFromOption(e.target.value)}>
                          {
                           
                            props.units[0].Drop.map((value,index)=> <option key={index}value={value}>{value}</option>)
                          }
                      </select>
                  </form>
              </div>
              <div className="to">
                  <div>TO</div>
                  <form className="form-input">
                      <input type="text" className="section2" value={to} onChange={CalTo} name="to"/>
                  </form>
                  <form className="form-input">
                      <select className="section2" value={toOption} onChange={e => setToOption(e.target.value)}>
                          {
                            props.units[0].Drop.map((value,index) => <option key={index}value={value}>{value}</option>)
                          }
                      </select>
                  </form>
              </div>
          </div>
      </>
  )
}
export default Converter; 